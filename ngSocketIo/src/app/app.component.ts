import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './core/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  stockQuote: number;
  sub: Subscription;
  result;
  inputs=[];
  outputs=[];
  fee;

  d;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.sub = this.dataService.getQuotes()
    this.sub = this.dataService.stream()
        .subscribe(res => {
          this.result = JSON.parse(res);
          // Value is the number of Satoshi (1 BTC = 100,000,000 Satoshi)
          this.inputs= this.result.x.inputs.map((o)=>{return o.prev_out.value})
          this.outputs= this.result.x.out.map((o)=>{return o.value})
        });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getdata(e){
    this.d=e.target.value;
  }

  send(){
    this.dataService.senddata(this.d);
  }



  discon(){
    this.dataService.disconnect();
  }
  con(){
    this.dataService.connect();
  }
  stream(){
    this.dataService.stream();
  }


}
