
import * as cheerio from 'cheerio';
import fs from 'fs';

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getCache(name) {
    if (fs.existsSync(`./cache/${name}.html`)) {
        return fs.readFileSync(`./cache/${name}.html`);
    }
    return false;
}

function setCache(name, value) {
    if (!fs.existsSync(`./cache/`)) {
        fs.mkdirSync(`./cache/`);
    }
    fs.writeFileSync(`./cache/${name}.html`, value);
}

for (let i = 3118; i > 3108; i--) {
    let data = getCache(i);
    if (!data) {
        await sleep(1000);
        console.log('!!LIVE DATA !!')
        const res = await fetch(`https://xkcd.com/${i}/`)
        data = await res.text();
        setCache(i, data);
    }
    const $ = cheerio.load(data);
    const img = $('div#comic img')
    console.log(img.attr('src'))
    console.log(img.attr('title'))
    console.log(img.attr('alt'))
}