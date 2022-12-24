import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public personnels: Personnel[] = [];
  public editPersonnel: Personnel | undefined;
  public deletePersonnel: Personnel  | undefined;
  private readonly notifier: NotifierService;


  constructor(private personnelService: PersonnelService, private router: Router,
    notifierService: NotifierService,private toastr: ToastrService){
    this.notifier = notifierService;
  }

  ngOnInit(): void {
      this.getPersonnels();
  }
  navConex(){
    this.router.navigate(['connexion'])
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
  public onAddPersonnel(addForm: NgForm): void{    
    document.getElementById('addPersonnel')?.click;
    this.personnelService.addPersonnel(addForm.value).subscribe(
      (response: Personnel) =>{
        console.log(response);
        this.toastr.success('Inscrisption effectuez avec success');
        this.router.navigate(['priseRdv']);
        this.getPersonnels();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        this.toastr.error("Cette Address Email exit!")
      }
    );
  }

   public searchPersonnel(key: string): void{
    const results: Personnel[] = [];
    for (const personnel of this.personnels){
      if (personnel.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ||(personnel.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(personnel.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(personnel.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(personnel.genre.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(personnel.type.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(personnel.address.toLowerCase().indexOf(key.toLowerCase()) !== -1)){
        results.push(personnel);
      }
      }
      this.personnels = results;
      if (results.length === 0 || !key){
        this.getPersonnels();
    }
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
 
  public onDeletePersonnel(PersonnelId: any): void{    
    this.personnelService.deletePersonnel(PersonnelId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getPersonnels();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(Personnel: Personnel, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPersonnelModal');
    }
    if (mode === 'edit') {
      this.editPersonnel = Personnel;
      button.setAttribute('data-target', '#updatePersonnelModal');
    }
    if (mode === 'delete') {
      this.deletePersonnel = Personnel;
      button.setAttribute('data-target', '#PersonnelDelete');
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
      button.setAttribute('data-target', '#addPersonnelModal');
    }
    
    container?.appendChild(button);
    button.click()  ;
  }
}

