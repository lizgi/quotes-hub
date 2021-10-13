import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'LIZ BUSH', 'HENRY FORD', '“Failure is the opportunity to begin again more intelligently.”', new Date(2021, 7, 14)),
    new Quote(2, 'ZIPPY SHII', 'JOHANN WOLFGANG', '“Believe in yourself and all that you are.Know there is something inside you that is greater than any obstacle.”', new Date(2021, 7, 9)),
    new Quote(3, 'LIZ BUSH', 'JOHN WOODEN', '“knowing is not enough,we must apply.Wishing is not enough,we must do.”', new Date(2021, 8, 10)),
    new Quote(5, 'LIZ BUSH', 'CHINESE', '“Do not let what you cannot do interfere with what you can do.”', new Date(1986, 8, 20)),
  ];


  addNewQuote(quote: any) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);

  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: boolean, index:number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
