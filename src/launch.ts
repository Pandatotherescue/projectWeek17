import {routes} from './0_routes/routes.js';
//netstat -ano | find "LISTENING" | find "3000" find process on port



const port = process.env.PORT;


const server = routes.listen(port, () =>{
    console.log('This server is listening at port:' + port);
} );



