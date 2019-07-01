import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { startJob } from './lib/cron';
import { getCurrentPrices } from './lib/index';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

startJob();

app.get('/' , async (req, res, next) => {
    console.log('You have reached Sid');
    console.log('Getting prices');
    let prices = await getCurrentPrices();
    res.status(200);
    res.json({
        status: 'success',
        message: 'Prices retrieved successfully',
        data: prices
    });
});

const port = process.env.port || '3000';
app.set('port', port);

app.listen(port, () => console.log(`Server running in port ${port}`));
