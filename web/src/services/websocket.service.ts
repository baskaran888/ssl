import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketService {

    constructor() { }

    public async initService() {

        const ws = new WebSocket('ws://localhost:9898/');

        ws.onopen = () => {
            console.log('WebSocket Client Connected');
            ws.send('Hi this is web client.');
        };

        ws.onmessage = (e) => {
            console.log('Received: ' + e.data + '..');
        };
    }

}
