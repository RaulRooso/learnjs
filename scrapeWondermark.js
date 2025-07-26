import * as cheerio from 'cheerio';
import fs from 'fs';

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getCache(name) {
    if (fs.existsSync(`./cache/${name}.html`)) {
        return fs.readFileSync(`./cache/${name}.html`, 'utf8');
    }
    return false;
}

function setCache(name, value) {
    if (!fs.existsSync(`./cache/`)) {
        fs.mkdirSync(`./cache/`);
    }
    fs.writeFileSync(`./cache/${name}.html`, value);
}

const scrape = async () => {
    for (let i = 1571; i > 1561; i--) {
        let data = getCache(i);
        if (!data) {
            console.log(`!!LIVE DATA!! comic no.${i}`);
            const res = await fetch(`https://wondermark.com/c/${i}/`);
            data = await res.text();
            setCache(i, data);
            await sleep(1000);
        }

        const $ = cheerio.load(data);
        const title = $('title').text().trim();

        const imgEl = $('.webcomic-media img');
        const imgSrc = imgEl.attr('src');

        console.log(`Comic #${i}`);
        console.log('Title:', title);
        console.log('Image:', imgSrc ? imgSrc : 'Not found');
        console.log('------------------');
    }
};

scrape();
