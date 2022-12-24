import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import { AnswerRdvService } from 'src/app/answer-rdv.service';
import { PersonnelService } from 'src/app/personnel.service';
import { RdvService } from 'src/app/rdv.service';
import { Personnel } from 'src/personnel';
import { Rdv } from 'src/rdv';

@Component({
  selector: 'app-rdv-geniquologue',
  templateUrl: './rdv-geniquologue.component.html',
  styleUrls: ['./rdv-geniquologue.component.css']
})
export class RdvGeniquologueComponent implements OnInit {

  public rdvs: Rdv[] = [];
  public editRdv: Rdv | undefined;
  public deleteRdv: Rdv  | undefined;
  public personnels: Personnel[] = [];
  private readonly notifier: NotifierService;
  public editPersonnel: Personnel | undefined;



  constructor(private rdvService: RdvService, private router: Router, 
    private anwerService: AnswerRdvService, private personnelService:PersonnelService,
    notifierService: NotifierService,private toastr: ToastrService){
      this.notifier = notifierService;
    }
  ngOnInit(): void {
      this.getRdvs();
  }
  navAnswer(){
    this.router.navigate(['Answer'])
  }
  public onSendMail(addForm: NgForm): void{    
    document.getElementById('SendMail')?.click;
    this.anwerService.SendAnswer(addForm.value).subscribe(
      (response: string) =>{
        console.log(response);
      },
      (error: HttpErrorResponse) =>{
        this.toastr.success('Mail envoyez avec success');
        addForm.reset();
      }
    );
  }
  navConsulation(){
    this.router.navigate(['listConsGyneco'])
  }
  public getRdvs(): void{
    this.rdvService.findRdvBySpecialite('Gynecologue').subscribe(
      (response: Rdv[])=>{
        this.rdvs = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public getPersonnels(): void{
    this.personnelService.getPersonnels().subscribe(
      (response: Personnel[]) =>{
        this.personnels = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }
  public onUpdatePersonnel(Personnel: Personnel): void{    
    this.personnelService.updatePersonnel(Personnel).subscribe(
      (response: Personnel) =>{
        console.log(response);
        this.getPersonnels();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public onAddRdv(addForm: NgForm): void{    
    document.getElementById('addRdv')?.click;
    this.rdvService.addRdv(addForm.value).subscribe(
      (response: Rdv) =>{
        console.log(response);
        this.getRdvs();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

   public searchRdv(key: string): void{
    const results: Rdv[] = [];
    for (const rdv of this.rdvs){
      if (rdv.date.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ||(rdv.rdvCode.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(rdv.etat.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(rdv.specialite.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(rdv.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1)){
        results.push(rdv);
      }
      }
      this.rdvs = results;
      if (results.length === 0 || !key){
        this.getRdvs();
    }
   }

  public onUpdateRdv(Rdv: Rdv): void{    
    this.rdvService.updateRdv(Rdv).subscribe(
      (response: Rdv) =>{
        console.log(response);
        this.getRdvs();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
 
  public onDeleteRdv(RdvId: any): void{    
    this.rdvService.deleteRdv(RdvId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getRdvs();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(Rdv: Rdv, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRdvModal');
    }
    if (mode === 'edit') {
      this.editRdv = Rdv;
      button.setAttribute('data-target', '#updateRdvModal');
    }
    if (mode === 'delete') {
      this.deleteRdv = Rdv;
      button.setAttribute('data-target', '#RdvDelete');
    }

    if (mode === 'tra') {
      this.editRdv = Rdv;
      button.setAttribute('data-target', '#RdvTraite');
    }

    container?.appendChild(button);
    button.click()  ;
  }
  public onOpenModals( mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRdvModal');
    }
    container?.appendChild(button);
    button.click()  ;
  }

}
