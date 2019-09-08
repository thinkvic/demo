import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';

import { Socket } from '../shared/interfaces';

declare var io: {
  connect(url: string): Socket;
};

@Injectable()
export class DataService {

  socket2: Socket;
  socket;
  observer: Observer<number>;

  // getQuotes() : Observable<number> {
  getQuotes() {
    this.socket = socketIo('http://localhost:8080');
    // this.socket = socketIo('/socket.io');

    // this.socket.on('data', (res) => {
    //   this.observer.next(res.data);
    // });

    return this.createObservable();
  }

  senddata(d) {
    this.socket.emit('clientdata', d)
  }

  stream() {

    this.connect();

    this.socket.onopen = (e) => {

    let data = JSON.stringify({ "op": "unconfirmed_sub" })
    this.socket.send(data)

    this.socket.onmessage = (e) => {
      console.log('msg', e);
       this.observer.next(e.data);

    }
    }

    return this.createObservable();

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
    // Once the connection has been established 
    // the open event will be fired on your WebSocket instance.

    // Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.
    this.socket.onopen = (e) => {
      console.log('open', e);
      let data = JSON.stringify({ "op": "ping" })
      this.socket.send(data)

      this.socket.onmessage = (e) => {
        console.log('pinged', e);

      }
    }

    // Handle any errors that occur.
    this.socket.onerror = function (error) {
      console.log('WebSocket Error: ' + error);
    };
  }

  createObservable(): Observable<number> {
    return new Observable<number>(observer => {
      this.observer = observer;
    });
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

}
