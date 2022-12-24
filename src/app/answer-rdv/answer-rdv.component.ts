import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnswerRdvService } from '../answer-rdv.service';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-answer-rdv',
  templateUrl: './answer-rdv.component.html',
  styleUrls: ['./answer-rdv.component.css']
})
export class AnswerRdvComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor(private anwerService: AnswerRdvService,
    notifierService: NotifierService,private toastr: ToastrService){
      this.notifier = notifierService;
    }

  ngOnInit(): void {
  }

  public onSendMail(addForm: NgForm): void{    
    document.getElementById('SendMail')?.click;
    this.anwerService.SendAnswer(addForm.value).subscribe(
      (response: string) =>{
        console.log(response);
      },
      (error: HttpErrorResponse) =>{
        this.toastr.success('Mail envoyez avec success');
        addForm.reset();
      }
    );
  }
}
