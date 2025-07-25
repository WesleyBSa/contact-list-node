import express, { Router } from 'express';
import helmet from 'helmet';
import router from './routes';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', router);

server.listen(3000, () => {
    console.log('Servidor rodando: http>//localhost:3000/')
});