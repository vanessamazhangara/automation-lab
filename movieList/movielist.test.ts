import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

/////////////////////////////////////////////////////
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html');
})
/////////////////////////////////////////////////////////////////
afterAll(async () => {
    await driver.quit();
})

test('should add movie to page', async () => {
    let addMovieInput = await driver.findElement(By.name("input"))
    let addMovieButton = await driver.findElement(By.name("button"))
    
    await addMovieInput.sendKeys('Greece');
    await addMovieButton.click();
    await driver.sleep(5000)
})
