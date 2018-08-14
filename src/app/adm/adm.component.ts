import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  public inputValue: string 
 
  public vanish: boolean
  public byConfirmed: boolean

  onChange = (event: Event) : void => {
    console.log((<HTMLInputElement>event.target).value)
  }

  func(p){
    window.setTimeout(() => {
      this.byConfirmed = p
    }, 700)
  }

  showAgain(){
    window.setTimeout(() => {
      this.byConfirmed = false
      this.vanish = false
  }, 600)
  }

  warnClosing = () : void => {
    const inputValue = this.inputValue 

    // simulating a verifiction of an input
    if (inputValue !== null){
      this.vanish = true
    }

    this.inputValue = ''
  }
  ngOnInit() {
  }

}
