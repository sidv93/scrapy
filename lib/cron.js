import cron from 'cron';
const cronJob = cron.CronJob;
import { getPriceFromBestBuy, getPriceFromAmazon } from './index';
import { models } from '../models';
import { sendMail } from './mailer';

function startJob() {
    console.log('starting job');
    const job = new cronJob('00 06 * * *', async () => {
        console.log('Starting job');
        const macbookProTouchBarBestbuy = await getPriceFromBestBuy(models.macbookProWithTouchBar.bestbuy);

        const macbookPro128Bestbuy = await getPriceFromBestBuy(models.macbookPro128.bestbuy);

        const macbookPro256Bestbuy = await getPriceFromBestBuy(models.macbookPro256.bestbuy);

        const macbookAir128Bestbuy = await getPriceFromBestBuy(models.macbookAir128.bestbuy);

        const macbookAir256Bestbuy = await getPriceFromBestBuy(models.macbookAir256.bestbuy);

        const macbookProTouchBarAmazon = await getPriceFromAmazon(models.macbookProWithTouchBar.amazon);

        const macbookPro128Amazon = await getPriceFromAmazon(models.macbookPro128.amazon);

        const macbookPro256Amazon = await getPriceFromAmazon(models.macbookPro256.amazon);

        const macbookAir128Amazon = await getPriceFromAmazon(models.macbookAir128.amazon);

        const macbookAir256Amazon = await getPriceFromAmazon(models.macbookAir256.amazon);

        const sonyXm3Amazon = await getPriceFromAmazon(models.sonyXm3.amazon);

        sendMail({
            macbookProTouchBarBestbuy,
            macbookPro128Bestbuy,
            macbookPro256Bestbuy,
            macbookAir128Bestbuy,
            macbookAir256Bestbuy,
            macbookProTouchBarAmazon,
            macbookPro128Amazon,
            macbookPro256Amazon,
            macbookAir128Amazon,
            macbookAir256Amazon,
            sonyXm3Amazon
        });
    });

    console.log(`Job initiated`);
    job.start();
}

export { startJob };