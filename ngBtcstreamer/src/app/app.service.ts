import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  socket:WebSocket;

  constructor(private http:HttpClient) { }

  stream() {

    // taking observer (registered callbacks) and return a teardown func
    let observable = new Observable(
      observer => {
        this.connect();

        // Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.

        this.socket.onopen = (e) => {
          console.log('open', e);

          // // send ping msg and get rsp
          // let data1 = JSON.stringify({ "op": "ping" })
          // this.socket.send(data1)

          // this.socket.onmessage = (e) => {
          //   console.log('pinged', e);
          // }

          // send data and get unconfirmed transactions stream
          let data2 = JSON.stringify({ "op": "unconfirmed_sub" })
          
          this.socket.send(data2);
          this.socket.onmessage = (e) => {
            console.log('msg', e);
            observer.next(e.data);
          }

          // Handle err.
          this.socket.onerror = function (err) {
            console.log('WebSocket Error Connection: ' + err);
            observer.error(err);
          };
        }

        return () => { this.disconnect(); }
      }
    )

    return observable;
  }


  stream2(url){
    // console.log("url, p", url, p);

    let headers = new HttpHeaders({
      // 'Cache-Control': 'no-cache',
      // 'Pragma': 'no-cache',
      // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    });


    let options = {
      headers: headers,
      // params: p,
      // body: data,
    };

    let obs = this.http.get(url, options)
    return obs;

  }

  disconnect() {
    this.socket.close();
    this.socket.onclose = (e) => {
      console.log('close', e);
    }
  }

  connect() {
    // Create a new WebSocket.
    this.socket = new WebSocket("wss://ws.blockchain.info/inv");
  }


}
