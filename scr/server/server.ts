import express = require('express')
import { timingSafeEqual } from 'crypto';


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

    start( callback: Function) {
        this.app.listen( this.port,function (){
            console.log("Servidor corriendo en el puerto 3000");
        });
    }
    


}