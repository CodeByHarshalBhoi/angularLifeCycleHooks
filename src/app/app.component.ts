import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLifeCycleHooks';
  toDestroy:boolean= false;


  inputVal:string='';
  constructor(){
    console.log("App Component constructor is called");
  };

  onBtnClick(inputValel:HTMLInputElement){
    this.inputVal = inputValel.value
  }

  onDestroy(){
    this.toDestroy = !this.toDestroy
  }
}
