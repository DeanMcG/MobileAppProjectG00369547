import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathcalc',
  templateUrl: './mathcalc.page.html',
  styleUrls: ['./mathcalc.page.scss'],
})
export class MathcalcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Variables
  display = '0';
  firstval: number = null;
  operator: any = null;
  newcursor = false;
  isc = false;
  iscomma = false;

  //Click event for all buttons on calculator
  click(val: any) {
    //Switch statement to handle which button has been pressed
    switch (val) {
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.isc = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.display, 0)) === 1) {
          const sign = -Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else if (Math.sign(parseInt(this.display, 0)) === -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else {
          this.display = this.display;
        }
        break;
      case '%':
        this.addpercent();
        break;
      case ':':
        this.addoperator(':');
        break;
      case 'X':
        this.addoperator('X');
        break;
      case '-':
        this.addoperator('-');
        break;
      case '+':
        this.addoperator('+');
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calclast();
        }
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        break;
      case '1':
        this.addnumber('1');
        break;
      case '2':
        this.addnumber('2');
        break;
      case '3':
        this.addnumber('3');
        break;
      case '4':
        this.addnumber('4');
        break;
      case '5':
        this.addnumber('5');
        break;
      case '6':
        this.addnumber('6');
        break;
      case '7':
        this.addnumber('7');
        break;
      case '8':
        this.addnumber('8');
        break;
      case '9':
        this.addnumber('9');
        break;
      case ',':
        this.addcomma();
        break;
    }
  }

  //Method to know whether or not to add a comma
  addcomma() {
    if (this.iscomma === false) {
      this.iscomma = true;
    } else {
      this.iscomma = false;
    }
  }

  //Method to handle if number in calc is 0 or not and if its not it will take in the number
  addnumber(nbr: string) {
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
          this.display = this.display.toString() + nbr;
        }
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = nbr;
        }
      } else {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = this.display.toString() + nbr;
        }
      }
    }
    this.isc = true;
  }

  //Method for percentages
  addpercent() {
    this.iscomma = false;
    const dispval = parseInt(this.display, 0) / 100;
    this.display = dispval.toString();
  }

  
  addoperator(op: string) {
    if (this.newcursor === false) {
      if (this.firstval === null) {
        if (this.iscomma === true) {
          this.firstval = parseFloat(this.display);
        } else {
          this.firstval = parseInt(this.display, 0);
        }
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calclast();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newcursor = true;
  }
  //Method for handling the math of each operator eg. +, x, -
  calclast() {
    switch (this.operator) {
      case ':':
        if (this.iscomma === true) {
          this.firstval = (this.firstval / parseFloat(this.display));
        } else {
          this.firstval = (this.firstval / parseInt(this.display, 0));
        }
        break;
      case 'X':
        if (this.iscomma === true) {
          this.firstval = (this.firstval * parseFloat(this.display));
        } else {
          this.firstval = (this.firstval * parseInt(this.display, 0));
        }
        break;
      case '-':
        if (this.iscomma === true) {
          this.firstval = (this.firstval - parseFloat(this.display));
        } else {
          this.firstval = (this.firstval - parseInt(this.display, 0));
        }
        break;
      case '+':
        if (this.iscomma === true) {
          this.firstval = (this.firstval + parseFloat(this.display));
        } else {
          this.firstval = (this.firstval + parseInt(this.display, 0));
        }
        break;
    }
    this.display = this.firstval.toString();
  }




}
