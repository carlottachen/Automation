const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

//import functions from addMovie.js file
const { addMovie, crossedOff, deleteMovie, deletedNotification } = require('./addMovie');

//first go to site
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/index.html');
})
//after all tests, close the site
afterAll(async () => {
    await driver.quit();
})

test('Add a movie', async () => {
    await addMovie(driver);
    //await driver.sleep(5000);
})

test('Crossed off item', async () => {
    await crossedOff(driver);
    //await driver.sleep(5000);
})

test('Delete a movie', async () => {
    await deleteMovie(driver);
    //await driver.sleep(5000);
})

test('Notification displayed', async () => {
    await deletedNotification(driver);
    await driver.sleep(4000);
})