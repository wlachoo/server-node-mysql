import express = require('express')
import { timingSafeEqual } from 'crypto';
import path = require('path');


export default class Server {

    public app: express.Application
    public port: number;

    constructor( puerto: number) {
        this.port = puerto;
        this.app = express();
    }

    static init (puerto: number) {
        return new Server(puerto);
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath) );
    }

    start( callback: Function) {
        this.app.listen( this.port,function (){
            console.log("Servidor corriendo en el puerto 3000");
        });
        this.publicFolder();
    }
    


}