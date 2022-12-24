import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier/lib/services/notifier.service';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public personnels: Personnel[] = [];

  email: any; 
  password: any;
  constructor(private route: Router, private personnelService: PersonnelService) { }

  ngOnInit(): void {
    this.getPersonnels();
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
  navInscription(){
    this.route.navigate(['personnel'])
  }
  navInsc(){
    this.route.navigate(['inscription'])
  }

  public async onAuthentifierUser(addForm: NgForm):Promise<any>{
    let response = await this.personnelService.authentification(this.email,this.password).toPromise();
    
    if(response.message === "Patient"){
          this.route.navigate(['/priseRdv']);
          addForm.onReset();
        }else if(response.message === "Administrateur"){
          this.route.navigate(['/admin']);
          addForm.onReset();
        }else if(response.message === "Laborantin"){
          this.route.navigate(['/labo']);
          addForm.onReset();
        }else if(response.message === "Cardiologue"){
          this.route.navigate(['/cardioloque']);
          addForm.onReset();
        }else if(response.message === "Pediatre"){
          this.route.navigate(['/pediatre']);
          addForm.onReset();
        }else if(response.message === "Generaliste"){
          this.route.navigate(['/generaliste']);
          addForm.onReset();
        }else if(response.message === "Ophtalmologue"){
          this.route.navigate(['/ophtalmologue']);
          addForm.onReset();
        }else if(response.message === "Geniquologue"){
          this.route.navigate(['/genicoloque']);
          addForm.onReset();
        }else if(response.message === "Dentiste"){
          this.route.navigate(['/rdv']);
          addForm.onReset();
        }else if(response.message === "null"){
          alert("Email ou Mot de passe est incorrect desole...");
          addForm.onReset();
        }
        addForm.onReset();
  }
}

