import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rdv } from 'src/rdv';
import { RdvService } from '../rdv.service';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {

  public rdvs: Rdv[] = [];
  public editRdv: Rdv | undefined;
  public deleteRdv: Rdv  | undefined;
  private readonly notifier: NotifierService;

  constructor(private rdvService: RdvService, private router: Router,
    notifierService: NotifierService,private toastr: ToastrService){
      this.notifier = notifierService;
    }

  ngOnInit(): void {
      this.getRdvs();
  }
  navConex(){
    this.router.navigate(['connexion'])
  }

  public getRdvs(): void{
    this.rdvService.getRdvs().subscribe(
      (response: Rdv[]) =>{
        this.rdvs = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public onAddRdv(addForm: NgForm): void{    
    document.getElementById('addRdv')?.click;
    this.rdvService.addRdv(addForm.value).subscribe(
      (response: Rdv) =>{
        console.log(response);
        this.toastr.success('Rendez-vous prise avec success');
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
