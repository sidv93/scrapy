import express from 'express';
import { startJob } from './lib/cron';
import { getCurrentPrices } from './lib/index';

const app = express();

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

app.get('/cron', async (req, res, next) => {
    console.log('Cron');
    startJob();
    res.status(200);
    res.json({
        status: 'success',
        message: 'Cron job started successfully',
        data: {}
    });
})

const port = process.env.port || '3000';
app.set('port', port);

app.listen(port, () => console.log(`Server running in port ${port}`));
