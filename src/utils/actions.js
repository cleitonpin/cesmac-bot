const { searchStringInArray } = require('./searchStringInArray');

module.exports = {
    getNotifications: async (page, client) => {
        try {
            try {
                const butt = await page.$$('.ui-commandlink'); 
                await butt[1].click();
                await page.waitForTimeout(10000);
                
                var data = await page.evaluate(() => {
                    const entrege =  document.querySelectorAll('table tbody');
                    let li = [...entrege];
                    const mape = li.map(il => il.innerText)
                    return mape;
                })
            } catch (e) {
                client.channels.cache.get('575815357609148428').send(e)
            }
            const guild = client.guilds.cache.get("575815357609148426");
            const role = guild.roles.cache.get('687011829960147057')

            console.log(searchStringInArray('Não Entregue', data))
            client.channels.cache.get('575815357609148428').send(`Atividades disponiveis: \n\n${searchStringInArray('Não Entregue', data).join('\n')}\n${role}`) 
        } catch (e) {
            client.channels.cache.get('575815357609148428').send(e)
        }
    },
 
    login: async (page) => {
        await page.$eval('.ui-inputfield', m => m.value = process.env.LOGIN);
        await page.$eval('input[type=password]', s => s.value = process.env.SENHA);
        const button = await page.$('.ui-button');
        await button.click();
        await page.waitForTimeout(5000);
    }

}