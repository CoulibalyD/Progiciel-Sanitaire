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
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;

  calcularImc(): number{
    let tail = this.taille;
    let pds = this.poids;

    this.imc = pds / (tail**2);
     this.indice = Math.round(this.imc) ;
    
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
