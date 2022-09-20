export default class TestConfig {
    static webdriverPath = '/wd/hub';
    static webdriverPort = 4723;
   static androidBaseCapabilities(appPackage, appActivity) {
     const desiredCapabilities = {
           platformName: "Android",
      automationName: "UiAutomator2",
           deviceName: "Android Emulator",
           appPackage: typeof appPackage !== 'undefined' ? appPackage : "com.adetola.stockprice",
           appActivity: typeof appActivity !== 'undefined' ? appActivity : ".MainActivity",
     }
   return {
      path: this.webdriverPath,
      port: this.webdriverPort,
      capabilities: desiredCapabilities
     }
    }
   static iosBaseCapabilities(bundleId) {
     const desiredCapabilities = {
      platformName: "iOS",
      automationName: "XCUITest",
      deviceName: "iPhone 11",
      platformVersion: "15.5",
      bundleId: typeof bundleId !== 'undefined' ? bundleId : "com.adetola.stockprice"
     }
   return {
      path: this.webdriverPath,
      port: this.webdriverPort,
      capabilities: desiredCapabilities
     }
    }
   }