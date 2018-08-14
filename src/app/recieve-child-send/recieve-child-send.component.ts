import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recieve-child-send',
  templateUrl: './recieve-child-send.component.html',
  styleUrls: ['./recieve-child-send.component.css']
})
export class RecieveChildSendComponent implements OnInit {

  @Input() public vanishing: boolean 
  
  @Output() public answer = new EventEmitter() 

  resposta() {
    this.answer.emit(true)
  }

  constructor() { }

  ngOnInit() {
  }

}
