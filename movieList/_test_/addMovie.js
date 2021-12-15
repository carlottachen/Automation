const { By } = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Spider-Man');
    await driver.findElement(By.xpath('//button')).click();

    //see if list is created
    const movie = await driver.findElement(By.xpath('//li'));
    const displayed = movie.isDisplayed();
    expect(displayed).toBeTruthy();
}

const crossedOff = async (driver) => {
    const toCrossOff = driver.findElement(By.xpath('//li/span'));
    await toCrossOff.click();
    const checkedOff = driver.findElement(By.css('.checked'));
    expect(checkedOff).toBeTruthy();
}

const deleteMovie = async (driver) => {
    const toDeleteItem = driver.findElement(By.css('#Spider-Man'));
    await toDeleteItem.click();
    // plural .findElements will grab all '//li'
    const movies = await driver.findElements(By.xpath('//li'));
    expect(movies).toHaveLength(0);
}

const deletedNotification = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Spider-Man');
    await driver.findElement(By.xpath('//button')).click();
    const toDeleteItem = driver.findElement(By.css('#Spider-Man'));
    await toDeleteItem.click();

    const hidden = await driver.findElement(By.css('#message')).getText();
    expect(hidden).toContain("Spider-Man deleted!");
}

module.exports = {
    addMovie,
    crossedOff,
    deleteMovie,
    deletedNotification
}

