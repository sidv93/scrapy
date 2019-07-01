import cron from 'cron';
const cronJob = cron.CronJob;
import util from 'util';
import { getCurrentPrices } from './index';
import { sendMail } from './mailer';

function startJob() {
    const job = new cronJob('56 23 * * *', async () => {
        console.log('Starting job');

        let prices = await getCurrentPrices();
        console.log(`${util.inspect(prices)}`);


        sendMail(prices);
    });

    console.log(`Job initiated`);
    job.start();
}

export { startJob };