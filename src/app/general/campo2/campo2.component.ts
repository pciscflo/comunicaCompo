import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-campo2',
  templateUrl: './campo2.component.html',
  styleUrls: ['./campo2.component.css']
})
export class Campo2Component implements OnInit {

  data:any;

  constructor(private messageService: MessageService) {
    this.data = "";
   }


  ngOnInit(): void {
     this.data = "";
     //Este componente se subscribe a los eventos emitidos por el servicio MessageService
     this.messageService.getMsg().subscribe((message:any) => {
       this.data = message;
       console.log(message);
    });
  }

}
