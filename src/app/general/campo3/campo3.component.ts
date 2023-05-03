import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-campo3',
  templateUrl: './campo3.component.html',
  styleUrls: ['./campo3.component.css']
})
export class Campo3Component implements OnInit {


  constructor(private messageService: MessageService) { }
  data :any;

  ngOnInit(): void {
     this.data = "";
     this.messageService.getMsg().subscribe((message: any) => {
       this.data = message;
       console.log(message);
    });
  }

}
