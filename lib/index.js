import axios from 'axios';
import cheerio from 'cheerio';
import util from 'util';

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

export { getPriceFromBestBuy, getPriceFromAmazon, getPriceFromAmazonIndia };
