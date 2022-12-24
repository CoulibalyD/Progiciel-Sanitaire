import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public personnels: Personnel[] = [];

  constructor(private personnelService: PersonnelService) { }

  ngOnInit(): void {
 this.getPersonnels()
}
  
   public getPersonnels(): void{
    this.personnelService.getPersonnels()
    .subscribe(res =>{
      let sexeH = res.map(res => res.genre).filter(Homme => Homme === 'Homme').length
      let sexeF = res.map(res => res.genre).filter(Femme => Femme === 'Femme').length
      let typePatient = res.map(res => res.type).filter(Patient => Patient === 'Patient').length
      let typePediatre = res.map(res => res.type).filter(Pediatre => Pediatre === 'Pediatre').length
      let typeAdministrateur = res.map(res => res.type).filter(Administrateur => Administrateur === 'Administrateur').length
      let typeCardiologue = res.map(res => res.type).filter(Cardiologue => Cardiologue === 'Cardiologue').length
      let typeOphtalmologue = res.map(res => res.type).filter(Ophtalmologue => Ophtalmologue === 'Ophtalmologue').length
      let typeLaborantin = res.map(res => res.type).filter(Laborantin => Laborantin === 'Laborantin').length
      let typeGynecologue = res.map(res => res.type).filter(Gynecologue => Gynecologue === 'Gynecologue').length
      let typeDentiste = res.map(res => res.type).filter(Dentiste => Dentiste === 'Dentiste').length


      //console.log(sexe.splice(1,2, 'Femme').length)
      var genre = new Chart("myChart", {
      type: 'pie',
      data: {
          labels: ['  Homme','  Femme'],
          datasets: [
            {
              label: 'Repartion des personnes selon le Genre',
              data: [sexeH,sexeF,],
              backgroundColor: [
                'rgba(54, 162, 235, 2)',
                'rgba(255, 99, 132, 2)',


            ],
            borderColor: [
                  'rgba(54, 162, 235, 3)',
                  'rgba(255, 99, 132, 3)',
              ],
              borderWidth: 15,
            }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  var types = new Chart("myCharts", {
    type: 'bar',
    data: {
        labels: ['Patient','Pediatre', 'Administrateur', 'Cardiologue', 'Laborantin', 'Ophtalmologue','Gynecologue','Dentiste'],
        datasets: [
          {
            label: 'Repartion des personnes selon leurs Types',
            data: [typePatient, typePediatre, typeAdministrateur, typeCardiologue, typeLaborantin,typeOphtalmologue,typeGynecologue,typeDentiste ],
            backgroundColor: [
                  'rgba(255, 99, 132, 2)',
                  'rgba(54, 162, 235, 2)',
                  'rgba(255, 206, 86, 2)',
                  'rgba(255, 159, 64, 2)',
                  'rgba(153, 102, 255, 2)',
                  'rgba(39, 70, 78, 94)',
                  'rgba(15, 82, 95, 2)',
                  'rgba(89, 30, 12, 2)',
          ],
          borderColor: [
                  'rgba(255, 99, 132, 2)',
                  'rgba(54, 162, 235, 2)',
                  'rgba(255, 206, 86, 2)',
                  'rgba(255, 159, 64, 2)',
                  'rgba(153, 102, 255, 2)',
                  'rgba(39, 70, 78, 94)',
                  'rgba(15, 82, 95, 2)',
                  'rgba(89, 30, 12, 2)',
        ],
            borderWidth: 0,
          }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

    })
  }
}
