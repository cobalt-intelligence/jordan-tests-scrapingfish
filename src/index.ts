import fetch from 'node-fetch';
import cheerio from 'cheerio';
import dotenv from 'dotenv';

dotenv.config();


(async () => {
    console.time('start');
    let errors = 0;

    for (let i = 0; i < 20; i++) {
        try {
            await toughScrape();
        }
        catch (e) {
            console.log('error on tough scrape', e);
            errors = 0;
        }
    }

    console.timeEnd('start');
    console.log('total errors', errors);
})();

async function basicScrape() {
    const url = 'https://cobaltintelligence.com';
    const proxyUrl = `https://scraping.narf.ai/api/v1/?api_key=${process.env.scrapingFishApiKey}&url=${url}`
    const response = await fetch(proxyUrl);
    const html = await response.text();

    const $ = cheerio.load(html);

    const title = $('title').text();

    console.log('title', title);
}

async function toughScrape() {
    const url = 'https://www.fastpeoplesearch.com/name/john-doe_star-id';
    const proxyUrl = `https://scraping.narf.ai/api/v1/?api_key=${process.env.scrapingFishApiKey}&url=${url}`
    const response = await fetch(proxyUrl);
    const html = await response.text();

    const $ = cheerio.load(html);

    const title = $('title').text();

    console.log('title', title);

}