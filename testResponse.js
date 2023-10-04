let constants = require('./constants');
const {until , By} = require('selenium-webdriver');
const fs = require('fs');
const resemble = require('resemblejs');


async function compareImages(imagePath1, imagePath2) {
    return new Promise((resolve, reject) => {
      resemble(imagePath1)
        .compareTo(imagePath2)
        .onComplete(data => resolve(data))
        .ignoreLess()
        .onComplete(data => resolve(data));
    });
  }


async function testResponse(driver , listElements){
    try{
        await listElements[4].click();
        await driver.wait(until.elementLocated(By.className('ace_content')) , 10000);
        const add_response=await driver.findElement(By.xpath('//div[@id="functionScript"]/textarea'));
        let inputText="'Sushil Lodhi'"
        await add_response.clear();
        add_response.sendKeys(inputText);
        const save=await driver.findElement(By.xpath('//button[text()="Save"]'))
        save.click();
        const svgElements = driver.findElement(By.xpath('//div[contains(@class,"responseslider__icons flex-end-center px-2 mb-4 MuiBox-root css-0")]//div'));
        await svgElements.click();
        await driver.sleep(2000);

        const ResponseRefrenceScreenshot = await driver.takeScreenshot();
        fs.writeFileSync('./refrenceImage/ResponseRefrenceScreenshot.png' , ResponseRefrenceScreenshot , 'base64');

        const ResponseTestScreenshot = await driver.takeScreenshot();
        fs.writeFileSync('./specs/ResponseTestScreenshot.png' , ResponseTestScreenshot   , 'base64');
        
        const comparisonResult = await compareImages('./refrenceImage/ResponseRefrenceScreenshot.png', './specs/ResponseTestScreenshot.png');
        fs.writeFileSync('./comparisonImage/comparisonResponse.png', comparisonResult.getBuffer());
        
        console.log('Image comparison result:', comparisonResult);
        resolve();

    } 
    catch(error){
        console.log(error);
    }finally{
        await driver.quit();
    }}


module.exports=testResponse;


















