import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = () => {
      const shoeElements = document.querySelectorAll('.col-md-4');
      shoeElements.forEach(shoeElement => {
        if (this.isElementInViewport(shoeElement)) {
          shoeElement.classList.add('fadeInUp');
        }
      });
    }
  }

  isElementInViewport(el:any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}
