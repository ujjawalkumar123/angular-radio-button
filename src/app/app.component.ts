import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText2 = '';
  inputText
  changecolor = "";

  inputColor = '';




  changeCOLOR() {
    this.inputText2 = this.inputText;
    console.log(this.inputColor);
  }

  onSelectionChange(event){
    console.log(event);
    if(event == 1){
      this.changecolor = "red";
    }else if(event == 2){
      this.changecolor = "green";
    }else{
      this.changecolor = "black";
    }
    
  }
}


