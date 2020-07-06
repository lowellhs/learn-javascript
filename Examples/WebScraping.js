const axios = require('axios');
const cheerio = require('cheerio');
const { performance } = require('perf_hooks');

URLS = [
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

(async () => {
    t_seq_0 = performance.now();

    result = [];
    for (let promise of URLS.map(url => scrap(url, scrapIMG))) {
        result.push(await promise);
    }

    t_seq_1 = performance.now();
    console.log("Sequential in", (t_seq_1-t_seq_0)/1000, "s");
})();


(async () => {
    t_par_0 = performance.now();

    let result = await Promise.all(URLS.map(url => scrap(url, scrapIMG)));
    
    t_par_1 = performance.now();
    console.log("Parallel in", (t_par_1-t_par_0)/1000, "s");
})();
