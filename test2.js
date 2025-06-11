
const { Builder, By, Key, until, Browser } = require('selenium-webdriver');

(async function search() {
    let page = await new Builder().forBrowser(Browser.CHROME).build();

    try {
        await page.get('https://www.duckduckgo.com');
        let searchBox = await page.findElement(By.name('q'));
        await searchBox.sendKeys('docker hub', Key.RETURN);
        await page.wait(until.titleContains('docker hub'), 5000);
        let title = await page.getTitle();
        console.log("The page title is:", title);
        await page.sleep(5000);
    } finally {
        await page.quit();
    }
})();