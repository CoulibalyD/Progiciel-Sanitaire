import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import jsPDF from 'jspdf';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  poids: any;
  taille: any ;
  imc: number = 0;
  indice: any;
  interpretation: string = '';
  constructor(private httpClient: HttpClient, private router: Router) { }

  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;

  calcularImc(): number {
    const taille = this.taille;
    const poids = this.poids;

    if (!taille || !poids || taille <= 0) {
      this.indice = 0;
      this.imc = 0;
      this.interpretation = 'Veuillez entrer des valeurs.';
      return 0;
    }

    this.imc = poids / (taille ** 2);
    this.indice = Math.round(this.imc);

    //Déterminer l'interprétation

    if (this.imc < 18.5){
      this.interpretation = 'Maigreur'
    }else if (this.imc < 25){
      this.interpretation = 'Poids normal';
    }else if (this.imc < 30){
      this.interpretation = 'Surpoids'
    }else {
      this.interpretation = 'Obésité';
    }

    return this.indice;
  }



  ngOnInit(): void {
  }

  navSpace(){
    this.router.navigate(['space'])
  }

 //Gets called when the user selects an image
 public onFileChanged(event:any) {
  //Select File
  this.selectedFile = event.target.files[0];
}


//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);

  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );


}

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
}
}
