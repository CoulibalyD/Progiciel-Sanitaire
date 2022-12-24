import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

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
    this.router.navigate(['statistique'])
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
        this.getPersonnels();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
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
    console.log()  
    this.personnelService.updatePersonnel(Personnel).subscribe(
      (response: Personnel) =>{
        console.log(response);
        this.getPersonnels();
        this.toastr.success('Modification effectuez avec success');

      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  // @ViewChild('content', {static: false}) el!: ElementRef;

  //   printConsultation(){
  //     console.log('Print PDF');
  //     const doc = new jsPDF('p','pt','a3');
  //     doc.html(this.el.nativeElement,{
  //       callback: (doc) =>{
  //         doc.save('Consulation.pdf')

  //       }
  //     })
  //   }
  public onDeletePersonnel(PersonnelId: any): void{    
    this.personnelService.deletePersonnel(PersonnelId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getPersonnels();
        this.toastr.error('Suppression effectuez avec success');

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

