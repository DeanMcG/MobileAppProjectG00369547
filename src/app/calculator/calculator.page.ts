import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Value in calculator
  value = '0';

  //Allows the number in calculator to be overwritten
  readyForNewInput = true;

  //remembers previous value in calculator
  oldValue = '0';

  //remembers last operator used, set by default to multiply
  lastOperator = 'x';
  
  //array within an array of the different buttons
  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'C', '/', '=']
  ];

  //function for the pressing of a button
  onButtonPress(symbol){
    console.log(symbol);

    if(isNumber(symbol)) {
      console.log('is a number');
      if (this.readyForNewInput) {
        this.value = '' + symbol;
      }
      else
        this.value += '' + symbol;
        this.readyForNewInput = false;
    }
    else if (symbol === 'C'){
      this.value = '0';
      this.readyForNewInput = true;
    }
   
    else if (symbol === '='){
      if (this.lastOperator === 'x'){
        this.value = '' + parseInt(this.oldValue) * parseInt(this.value);
      }
      else if (this.lastOperator === '-'){
        //this.value =  parseInt(this.oldValue) - parseInt(this.value);
      }
      else if (this.lastOperator === '+'){
        this.value = '' + parseInt(this.oldValue) + parseInt(this.value);
      }
      else if (this.lastOperator === '/'){
        this.value = '' + parseInt(this.oldValue) / parseInt(this.value);
      }
      this.readyForNewInput = true;
    }
    else { //operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }

}

