import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;
  inputs = [];
  outputs = [];
  fees: string;
  color: string;
  fontsize: number;
  streaming: boolean;

  labels = [
    { "amount": "> 1000BTC", color: "red", fontsize: 44 },
    { "amount": "> 100BTC", color: "pink", fontsize: 40 },
    { "amount": "> 50BTC", color: "green", fontsize: 36 },
    { "amount": "> 10BTC", color: "maroon", fontsize: 32 },
    { "amount": "> 1BTC", color: "#333333", fontsize: 28 },
    { "amount": "< 1BTC", color: "#CCCCCC", fontsize: 24 },
  ]

  constructor(private ser: AppService) { }

  ngOnInit() {
    this.bitstream();
    this.labels = this.labels.slice().reverse();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  discon() {
    this.streaming = false;
    // console.log('discon');
    this.sub.unsubscribe();
    // this.ser.disconnect();
  }
  con() {
    this.ser.connect();
  }

  // subscribe real observers to observables
  bitstream(t = 0) {
    this.streaming = true;

    const obs = this.ser.stream2("http://localhost:3000");
    this.sub = obs.subscribe(
      (res: any) => {
        console.log('res', res);

        // let result = JSON.parse(res);
        let result=res;
        console.log('in subscriber', result);
        let isum = 0;
        let osum = 0;

        // Value is the number of Satoshi (1 BTC = 100,000,000 Satoshi)
        this.inputs = result.x.inputs.map((o) => {
          let value = o.prev_out.value / 100000000
          isum = isum + value
          return value
        })
        this.outputs = result.x.out.map((o) => {
          let value = o.value / 100000000;
          osum = osum + value;
          return value
        })

        this.fees = (isum - osum).toFixed(10);
        if (isum > 1000) {
          this.color = "red";
          this.fontsize = 44;
        } else if (isum > 100) {
          this.color = "pink";
          this.fontsize = 40;
        } else if (isum > 50) {
          this.color = "green";
          this.fontsize = 36;
        } else if (isum > 10) {
          this.color = "maroon";
          this.fontsize = 32;
        } else if (isum > 1) {
          this.color = "#333333";
          this.fontsize = 28;
        } else {
          this.color = "#CCCCCC";
          this.fontsize = 24;
        }
      });

      console.log('sub', this.sub);


  }

  //   const obs = this.ser.stream().pipe(throttleTime(t));

  //   this.sub = obs
  //     .subscribe((res: any) => {
  //       let result = JSON.parse(res);
  //       console.log('in subscriber', result);
  //       let isum = 0;
  //       let osum = 0;

  //       // Value is the number of Satoshi (1 BTC = 100,000,000 Satoshi)
  //       this.inputs = result.x.inputs.map((o) => {
  //         let value = o.prev_out.value / 100000000
  //         isum = isum + value
  //         return value
  //       })
  //       this.outputs = result.x.out.map((o) => {
  //         let value = o.value / 100000000;
  //         osum = osum + value;
  //         return value
  //       })

  //       this.fees = (isum - osum).toFixed(10);
  //       if (isum > 1000) {
  //         this.color = "red";
  //         this.fontsize = 44;
  //       } else if (isum > 100) {
  //         this.color = "pink";
  //         this.fontsize = 40;
  //       } else if (isum > 50) {
  //         this.color = "green";
  //         this.fontsize = 36;
  //       } else if (isum > 10) {
  //         this.color = "maroon";
  //         this.fontsize = 32;
  //       } else if (isum > 1) {
  //         this.color = "#333333";
  //         this.fontsize = 28;
  //       } else {
  //         this.color = "#CCCCCC";
  //         this.fontsize = 24;
  //       }
  //     });

  //     console.log('sub', this.sub);

  // }

}
