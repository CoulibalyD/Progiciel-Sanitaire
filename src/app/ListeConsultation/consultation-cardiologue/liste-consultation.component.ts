import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consultation } from '../../consultation';
import { ConsultationService } from '../../consultation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';



@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.css']
})
export class ListeConsultationComponent implements OnInit {

  public consultations: Consultation[] = [];
  public editConsultation: Consultation | undefined;
  public deleteConsultation: Consultation  | undefined;


  constructor(private consultationService: ConsultationService,private router: Router,
    private toastr: ToastrService){
    }
    @ViewChild('content', {static: false}) el!: ElementRef;

    printConsultation(){
      console.log('Print PDF');
      const doc = new jsPDF('p','pt','a3');
      doc.html(this.el.nativeElement,{
        callback: (doc) =>{
          doc.save('Consulation.pdf')

        }
      })
    }
  

  ngOnInit(): void {
      this.getConsultations();
  }
  // public getConsultations(): void{
  //   this.consultationService.getConsultations().subscribe(
  //     (response: Consultation[]) =>{
  //       this.consultations = response;
  //       console.log(this.consultations)
  //     },
  //     (error: HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   )
  // }

  public onAddConsultation(addForm: NgForm): void{    
    document.getElementById('addConsultation')?.click;
    this.consultationService.addConsultation(addForm.value).subscribe(
      (response: Consultation) =>{
       // console.log(response);
        this.getConsultations();
        addForm.reset();
        this.toastr.success('Consultation Ajouter avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public searchConsultation(key: string): void{
    const results: Consultation[] = [];
    for (const consultation of this.consultations){
      if (consultation.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ||(consultation.date.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(consultation.medicament.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(consultation.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       ||(consultation.observation.toLowerCase().indexOf(key.toLowerCase()) !== -1))
       {
        results.push(consultation);
      }
      }
      this.consultations = results;
      if (results.length === 0 || !key){
        this.getConsultations();
    }
   } 

  public onUpdateConsultation(consultation: Consultation): void{    
    this.consultationService.updateConsultation(consultation).subscribe(
      (response: Consultation) =>{
       // console.log(response);
        this.getConsultations();
        this.toastr.success('Consultation ajouter avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
  public getConsultations(): void{
    this.consultationService.findRdvByMedecin('Cardiologue').subscribe(
      (response: Consultation[])=>{
        this.consultations = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public onDeleteConsultation(ConsultationId: any): void{    
    this.consultationService.deleteConsultation(ConsultationId).subscribe(
      (response: void) =>{
        //console.log(response);
        this.getConsultations();
        this.toastr.error('Consultation supprimer avec success');
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(Consultation: Consultation, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button'; 
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addConsultationModal');
    }
    if (mode === 'edit') {
      this.editConsultation = Consultation;
      button.setAttribute('data-target', '#updateConsultationModal');
    }
    if (mode === 'delete') {
      this.deleteConsultation = Consultation;
      button.setAttribute('data-target', '#ConsultationDelete');
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
      button.setAttribute('data-target', '#addConsultationModal');
    }
    
    container?.appendChild(button); 
    button.click()  ;
  }
}
