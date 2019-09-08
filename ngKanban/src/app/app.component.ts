import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  title = 'triple';

  columns = [

    { "name": "one", "bc": "#8E6E95", "cards": ["card11", "card12"] },
    { "name": "two", "bc": "#39a59c", "cards": ["card21", "card22"] },
    { "name": "three", "bc": "#344759", "cards": ["card31", "card32"] },
    { "name": "four", "bc": "#e8741e", "cards": ["card41", "card42"] }
  ];


  ngOnInit(){
    if(localStorage.getItem('columns') ){
      this.columns = JSON.parse( localStorage.getItem('columns') );
    }

  }


  addcard = (i) => {
    let content = window.prompt("fill the card content")
    this.columns[i].cards.push(content);
    localStorage.setItem('columns', JSON.stringify(this.columns));

  }

  moveleft = (i, j) => {
    console.log(i, j);
    let content = this.columns[i].cards[j];
    this.columns[i].cards.splice(j, 1);
    this.columns[i - 1].cards.push(content);
    localStorage.setItem('columns', JSON.stringify(this.columns));

  }

  moveright = (i, j) => {
    console.log(i, j);

    let content = this.columns[i].cards[j];
    this.columns[i].cards.splice(j, 1);
    this.columns[i + 1].cards.push(content);
    localStorage.setItem('columns', JSON.stringify(this.columns));

  }

}
