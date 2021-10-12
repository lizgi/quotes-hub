import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Robbin Mwangi Githimbo', 'Marie Curie', '“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.”', new Date(2021, 8, 14)),
    new Quote(2, 'Robbin Mwangi Githimbo', 'John Lennon', '“Life is what happens while you are busy making other plans.”', new Date(2021, 7, 16)),
    new Quote(3, 'Robbin Mwangi Githimbo', 'Buddha', '“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”', new Date(2021, 8, 30)),
    new Quote(4, 'Robbin Mwangi Githimbo', 'Albert Einstein', '“Life is like riding a bicycle. To keep your balance, you must keep moving.”', new Date(1986, 8, 30)),
    new Quote(5, 'Robbin Mwangi Githimbo', 'Margaret Thatcher', '“If you want something said, ask a man; if you want something done, ask a woman.”', new Date(1986, 8, 30)),
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
