const axios = require('axios');
const cheerio = require('cheerio');

URLS = [
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
    'https://introcs.cs.princeton.edu/java/11cheatsheet',
]

function scrapIMG(data, root="") {
    let $ = cheerio.load(data);
    let images = [];
    $("img").each((i, elem) => {
        try {
            let path = elem.attribs["src"];
            if (!path.startsWith("http:") && !path.startsWith("https:")) {
                path = root + (path.startsWith("/") ? "" : "/") + path;
            }
            images.push(path);
        } catch (error) {
            console.log(error);
        }
    })
    return images;
}

async function scrap(url, scrapper) {
    let response = await axios.get(url);
    return scrapper(response.data, url);
}

// ------- SEQUENTIAL SCRAPING -------
// (async () => {
//     urls = [
//         'https://introcs.cs.princeton.edu/java/11cheatsheet',
//     ]
//     result = [];
//     for (let promise of URLS.map(url => scrap(url, scrapIMG))) {
//         result.push(await promise);
//     }
// })();

// ------- PARALLEL SCRAPING -------
// (async () => {
//     let result = await Promise.all(URLS.map(url => scrap(url, scrapIMG)));
// })();
