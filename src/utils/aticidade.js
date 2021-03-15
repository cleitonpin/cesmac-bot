const cron = require('node-cron');
const puppeteer = require('puppeteer');
const get = require('./actions');

module.exports = {
    init: (client) => {
        cron.schedule('0 12 * * 5', () => {
            async function start() {

                const browser = await puppeteer.launch({ headless: true, timeout: 0, defaultViewport: { 'width': 1024, 'height': 920 } });
                const page = await browser.newPage();
                await page.goto('https://online.cesmac.edu.br/portalacademico/aluno/conteudo/index.jsf');
            
                await get.login(page);
                await get.getNotifications(page, client);
                await browser.close();
            }
            
            start();
        })
    }

}