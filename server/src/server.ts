import express from  'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

process.on('SIGTERM', () => {
    process.exit();
});

app.listen(3333, ()=>
    console.log('Backend started! on localhost:3333 ⚡')
)
    
