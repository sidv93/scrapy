import axios from 'axios';
import cheerio from 'cheerio';
import { models } from '../models';

let currentPrices = {};

async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}

async function getPriceFromBestBuy(url) {
    const html = await getHTML(url);
    const $ = cheerio.load(html);
    const span = $('.priceView-customer-price span');
    const spanTextArray = span.text().split(' ');
    const price = spanTextArray.slice(-1)[0];
    return price;
}

async function getPriceFromAmazon(url) {
    const html = await getHTML(url);
    const $ = cheerio.load(html);
    const span = $('#priceblock_ourprice');
    const price = span.text();
    return price;
}

async function getPriceFromAmazonIndia(url) {
    const html = await getHTML(url);
    const $ = cheerio.load(html);
    const span = $('#priceblock_ourprice');
    const price = span.text();
    return price;
}

async function getCurrentPrices() {
    if(Object.entries(currentPrices).length) {
        return currentPrices;
    }

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

    currentPrices = {
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
    };

    return currentPrices;
}

export { getPriceFromBestBuy, getPriceFromAmazon, getPriceFromAmazonIndia, getCurrentPrices };
