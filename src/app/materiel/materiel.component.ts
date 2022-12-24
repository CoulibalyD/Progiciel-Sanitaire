import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  public materiels: Materiel[] = [];
  public editMateriel: Materiel | undefined;
  public deleteMateriel: Materiel  | undefined;
  private readonly notifier: NotifierService;



  constructor(private materielService: MaterielService,
    notifierService: NotifierService,private toastr: ToastrService){
      this.notifier = notifierService;
    }

  ngOnInit(): void {
      this.getMateriels();
  }
  public getMateriels(): void{
    this.materielService.getMateriels().subscribe(
      (response: Materiel[]) =>{
        this.materiels = response;
        console.log(this.materiels)
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  

  public onAddMateriel(addForm: NgForm): void{    
    document.getElementById('addMateriel')?.click;
    this.materielService.addMateriel(addForm.value).subscribe(
      (response: Materiel) =>{
       // console.log(response);
        this.getMateriels();
        addForm.reset();
        this.toastr.success('Materiel Ajouter avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public searchMateriel(key: string): void{
    const results: Materiel[] = [];
    for (const materiel of this.materiels){
      if (materiel.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ||(materiel.date.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(materiel.etat.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(materiel.materielCode.toLowerCase().indexOf(key.toLowerCase()) !== -1))
       {
        results.push(materiel);
      }
      }
      this.materiels = results;
      if (results.length === 0 || !key){
        this.getMateriels();
    }
   }

  public onUpdateMateriel(materiel: Materiel): void{    
    this.materielService.updateMateriel(materiel).subscribe(
      (response: Materiel) =>{
       // console.log(response);
        this.getMateriels();
        this.toastr.success('Materiel ajouter avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  
 
  public onDeleteMateriel(MaterielId: any): void{    
    this.materielService.deleteMateriel(MaterielId).subscribe(
      (response: void) =>{
        //console.log(response);
        this.getMateriels();
        this.toastr.error('Materiel supprimer avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(Materiel: Materiel, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMaterielModal');
    }
    if (mode === 'edit') {
      this.editMateriel = Materiel;
      button.setAttribute('data-target', '#updateMaterielModal');
    }
    if (mode === 'delete') {
      this.deleteMateriel = Materiel;
      button.setAttribute('data-target', '#MaterielDelete');
    }
    // if (mode === 'search') {
    //   this.searchMateriel = Materiel;
    //   button.setAttribute('data-target', '#MaterielSearh');
    // }
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
      button.setAttribute('data-target', '#addMaterielModal');
    }
    
    container?.appendChild(button);
    button.click()  ;
  }

}
