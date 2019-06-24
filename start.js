import { getPriceFromBestBuy, getPriceFromAmazon, getPriceFromAmazonIndia } from './lib/index';
import { models } from './models';

( async () => {
    const macbookProTouchBarBestbuy = await getPriceFromBestBuy(models.macbookProWithTouchBar.bestbuy);
    console.log(`Price of Macbook pro with touch bar from BestBuy is ${macbookProTouchBarBestbuy}`);

    const macbookPro128Bestbuy = await getPriceFromBestBuy(models.macbookPro128.bestbuy);
    console.log(`Price of Macbook pro 128GB from BestBuy is ${macbookPro128Bestbuy}`);

    const macbookPro256Bestbuy = await getPriceFromBestBuy(models.macbookPro256.bestbuy);
    console.log(`Price of Macbook pro 256GB from BestBuy is ${macbookPro256Bestbuy}`);

    const macbookAir128Bestbuy = await getPriceFromBestBuy(models.macbookAir128.bestbuy);
    console.log(`Price of Macbook Air 128GB from BestBuy is ${macbookAir128Bestbuy}`);

    const macbookAir256Bestbuy = await getPriceFromBestBuy(models.macbookAir256.bestbuy);
    console.log(`Price of Macbook Air 256GB from BestBuy is ${macbookAir256Bestbuy}`);

    const macbookProTouchBarAmazon = await getPriceFromAmazon(models.macbookProWithTouchBar.amazon);
    console.log(`Price of Macbook pro with touch bar from Amazon is ${macbookProTouchBarAmazon}`);

    const macbookPro128Amazon = await getPriceFromAmazon(models.macbookPro128.amazon);
    console.log(`Price of Macbook pro 128GB from Amazon is ${macbookPro128Amazon}`);

    const macbookPro256Amazon = await getPriceFromAmazon(models.macbookPro256.amazon);
    console.log(`Price of Macbook pro 256GB from Amazon is ${macbookPro256Amazon}`);

    const macbookAir128Amazon = await getPriceFromAmazon(models.macbookAir128.amazon);
    console.log(`Price of Macbook Air 128GB from Amazon is ${macbookAir128Amazon}`);

    const macbookAir256Amazon = await getPriceFromAmazon(models.macbookAir256.amazon);
    console.log(`Price of Macbook Air 256GB from Amazon is ${macbookAir256Amazon}`);

    const sonyXm3Amazon = await getPriceFromAmazon(models.sonyXm3.amazon);
    console.log(`Price of Sony wh-1000xm3 from Amazon is ${sonyXm3Amazon}`);
})();

