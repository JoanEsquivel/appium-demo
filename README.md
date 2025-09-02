
# Appium + WebDriver.IO Demo Framework - Android & IOS Example

This project has been created to demonstrate how a QA Engineer can perform Mobile Testing using Appium + WebDriver.IO
More commands and insights about the integration at [WebDriverIO Appium docs](https://webdriver.io/docs/api/appium/)

- - - 
## General System Requirements

#### Node JS

We need node js to download Appium beta version & drivers easily.
* Download[ Node Js](https://linktodocumentation) depending on your operating system.
#### Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
* [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

I Tested the following steps on MAC OS Monterrey:

* Installed Adopted [Open JDK with Homebrew](https://formulae.brew.sh/cask/adoptopenjdk)
* To return where was the SDK installed I used the command:
```bash
    /usr/libexec/java_home
```
* If you want to check the java version:
```bash
    /usr/libexec/java_home -V
```
* Open the zshenv file to insert the JAVA_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variable and save the vim session (:wq!):
```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $JAVA_HOME
```
* It should return something like: 
```bash
    /Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home
```

## Android Setup
#### Android Studio & ANDROID_HOME variable

* [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
* [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
* [ANDROID_HOME setup for Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)

Tested the following steps on MAC OS Monterrey:
* Android studio on Mac can be located at:
```bash
    * cd /Users/[USER]/Library/Android/sdk
```
* We need to add a reference to a couple of folders inside of that SDK
   * Tools & Platform Tools
* Open the zshenv file to insert the ANDROID_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variables and save the vim session (:wq!):
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $ANDROID_HOME
```
* It should return something like: 
```bash
    /Users/[USER]/Library/Android/sdk
```
* With this configured you can access the command [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
```bash
    adb
```
- - -

## IOS Setup

1. Install XCode from the MacOs App Store
2. Install [XCode Command line tools](https://www.freecodecamp.org/news/install-xcode-command-line-tools/)
```bash
    xcode-select --install
```
- Make sure it is installed correctly using the following command:
```bash
    xcode-select -p
```
- It should return something like(may defer from your OS version):
```bash
    /Applications/Xcode.app/Contents/Developer
```
3. Install Carthage(It is a simple dependency manager for macOS and iOS, created by a group of developers from GitHub).
```bash
    brew install carthage
```

---

#### Download Appium Inspector
In order to find the correct locators to map elements, you will need to have this tool installed in your computer.

* [Appium Inspector Releases](https://github.com/appium/appium/blob/1.x/docs/en/writing-running-appium/web/chromedriver.md)

For this project you can use the following configuration:

| Server Key | Server Value |
| ------------- | ------------- |
| Remote Host | 0.0.0.0 |
| Remote Port | 4724 |
| Remote Path | / |

Android Desired Capabilities(Example)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | Android |
| platformVersion  | [OS VERSION / IMAGE]  |
| deviceName | [EMULATED_DEVICE_NAME] | 
| app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |

IOS Desired Capabilities(Emulator - App)
| Desired Capability Key  | Desired Capability Value |
| ------------- | ------------- |
| platformName  | IOS |
| platformVersion  | [OS VERSION / IMAGE]  |
| deviceName | [EMULATED_DEVICE_NAME] | 
| app | /[PROJECT_PATH]/[APP_NAME].app |
| appium:automationName | XCUItest |

#### Install Apium 
Appium is an open source test automation framework for use with native, hybrid and mobile web apps. 
It drives iOS, Android, and Windows apps using the WebDriver protocol.

* Install [Appium](https://appium.io) from the official documentation 
* Install [Appium 2](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli) by Node JS(Beta):
```bash
    npm install -g appium@next
```
Check the appium version using
```bash
    appium -v
```

#### Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
Install it using the command 
```bash 
npm install appium-doctor -g
```
And then use the library:
```bash 
appium-doctor
```

#### Appium drivers
If you want Appium to work correctly, you need to download and have the android/ios driver in your system.
Run the commands:
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```
If you need to update them for Appium 3:
```bash 
appium driver uninstall xcuitest
appium driver uninstall uiautomator2

appium driver install xcuitest
appium driver install uiautomator2

```
Check the installed drivers using
```bash 
appium driver list
```

#### Sample applications
Sample Application that you can use:

[SauceDemo Hybrid App - React Native)](https://github.com/saucelabs/my-demo-app-rn) - (Framework is configured to use this one)

[Sauce Labs Native Sample Application](https://github.com/saucelabs/sample-app-mobile)

[WebdriverIO Demo App for iOS and Android](https://github.com/webdriverio/native-demo-app)

***Important Note:***
For IOS you are going to need an app build to run it in simulators, but an .IPA file to run it in real devices. It required additonal desired capabilities, and you can see which ones in the next article: [Appium XCUITest Driver Real Device Setup
](https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/)

## Setup WebDriverIO

1- Run the command to create the package.json & continue with the installation process
```bash
    npm init wdio .
```
2- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:  
* On my local machine
* Mocha
* No compiler
* Spect Location: Default
* Do you want WebDriverIO to generate some test files?: No
* Reporter: Spec
* No Plugin 
* Service: Appium
* Base URL: Default
* NPM Install: Yes

3- Add your tests at 
```bash
'./[yourProject]/specs/**/*.js'
```

4- Configure the app route at wdio.conf.js
* Declare where it is going to be located
```bash
const projectPath = require('path')
const androidAppPath = projectPath.join(process.cwd(), "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk")
const iosAppPath = projectPath.join(process.cwd(),"app/ios/MyRNDemoApp.app");
```

* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'Android', 
        "appium:device-name": 'Pixel 4 API 30(R)',
        "appium:platformVersion": "11.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
        // "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity"(For OLD swaglabs app)
    }]
```
* Set up the capabilities for Android(Emulator sample)
```bash
capabilities: [{
        platformName: 'IOS',
        "appium:device-name": 'iPhone 13 Pro Max',
        "appium:platformVersion": "16.0",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,   
    }]
```

* Install Appium in your project
```bash
    npm install --save-dev appium@next
```

* Check if the drivers are still available, if not install them again:
```bash 
appium driver list
```
```bash 
appium driver install xcuitest
appium driver install uiautomator2
```

* Run your scripts using
```bash
npx wdio
```

## Setup WebDriverIO
if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android or app/IOS

5- npm run wdioIOS/wdioAndroid

## Android setup & demo
[![ANDROID TESTING VIDEO](https://i.ytimg.com/vi/KN1sTvvX0mM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgoIVXC8QqNpzuuw9sdzSkOos1lg)](https://www.youtube.com/watch?v=KN1sTvvX0mM&t=2569s)

## IOS setup & demo
[![IOS TESTING VIDEO](https://i.ytimg.com/vi/Q5Oy8axA8Qw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoa-PxuNR5xJ0U8NM4J0sigtqwgg)](https://www.youtube.com/watch?v=Q5Oy8axA8Qw&ab_channel=JoanMedia)


### Extra Information

* [UI Selectors (Android)](https://developer.android.com/reference/androidx/test/uiautomator/UiSelector)

* [Predicate Strings Selectors (IOS)](https://appium.io/docs/en/writing-running-appium/ios/ios-predicate/)

* [Class Chain Selectors (IOS)](https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules)

### Notes
* To manage node versions you can install "n" using the command "npm install -g n". Then you can install the version you may need, for instance "n 16.15.1"(LTS version where this project is working fine.)

### Browserstacks Integration
1.  Create a new account
2. Use the "App Automate" service. 
3. Upload your application, and then get the ID.
4. Have in hand your access key as well!
5. Based on the [documentation](https://webdriver.io/docs/browserstack-service) provided by WDIO, install the BS service using the command:
```bash
npm install @wdio/browserstack-service --save-dev
```
6. **Create environment variables for your credentials** (NEVER hardcode them in config files):
   - Copy `.env.example` to `.env`: `cp .env.example .env`
   - Update `.env` with your actual BrowserStack credentials:
     ```env
     BROWSERSTACK_USER=your_browserstack_username
     BROWSERSTACK_KEY=your_browserstack_access_key  
     BROWSERSTACK_APP=bs://your_uploaded_app_id
     ```
   - The `.env` file is already in `.gitignore` and won't be committed to the repository
7. Set device name & version based on BS device list provided in the config file.
8. For CI/CD (GitHub Actions), add the same variables as repository secrets:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add `BROWSERSTACK_USER`, `BROWSERSTACK_KEY`, and `BROWSERSTACK_APP` secrets

Note: Check their capability builder: https://www.browserstack.com/docs/app-automate/capabilities

## GitHub Actions CI/CD - BrowserStack Integration

This project includes a GitHub Actions workflow that automatically runs your BrowserStack Android tests on every push and pull request. The workflow is configured to provide fast feedback and detailed reporting.

### 🚀 Workflow Features

The BrowserStack GitHub Actions workflow (`.github/workflows/browserstack-android.yaml`) provides:

- **Automated Testing**: Runs on push/PR to `main` and `develop` branches
- **Manual Triggering**: Can be triggered manually from the GitHub Actions tab
- **Optimized Performance**: Uses npm caching for faster builds
- **Comprehensive Logging**: Automatically uploads test logs and performance reports
- **Failure Handling**: Detailed artifacts when tests fail

### 🔐 Required GitHub Secrets

To run BrowserStack tests in GitHub Actions, you need to configure the following repository secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add each of the following:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `BROWSERSTACK_USER` | Your BrowserStack username | Found in your BrowserStack account settings |
| `BROWSERSTACK_KEY` | Your BrowserStack access key | Found in your BrowserStack account settings |
| `BROWSERSTACK_APP` | BrowserStack app URL for your APK | Upload your APK to BrowserStack (see below) |

### 📱 Getting Your BrowserStack App URL

To get the `BROWSERSTACK_APP` value for your secret:

1. **Upload your APK to BrowserStack using cURL:**
```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@app/android/android.wdio.native.app.v1.0.8.apk"
```

2. **Or upload via BrowserStack Dashboard:**
   - Log into your BrowserStack account
   - Go to **App Automate** → **Upload**
   - Upload your APK file
   - Copy the generated `app_url` (format: `bs://abc123def456`)

3. **Use the app_url as your `BROWSERSTACK_APP` secret**

### 🎯 Current Test Configuration

The GitHub Actions workflow runs tests with the following configuration:

- **Platform**: Android
- **Device**: Samsung Galaxy S23 Ultra
- **OS Version**: Android 13.0
- **Automation**: UIAutomator2
- **Test Suite**: All specs in `test/specs/android/*.js`

### 🔄 How to Use

#### Automatic Triggers
The workflow runs automatically when:
- You push code to `main` or `develop` branches
- You create a pull request targeting `main` or `develop`

#### Manual Trigger
1. Go to your repository on GitHub
2. Click on the **"Actions"** tab
3. Select **"BrowserStack Android Tests"** from the workflow list
4. Click **"Run workflow"** button
5. Select the branch and click **"Run workflow"**

### 📊 Test Results & Artifacts

When tests run, you'll get:

#### ✅ **On Success:**
- Test results in the GitHub Actions log
- BrowserStack performance reports (uploaded as artifacts)

#### ❌ **On Failure:**
- Detailed error logs in GitHub Actions
- Complete test logs uploaded as artifacts
- BrowserStack session details for debugging
- All artifacts retained for 30 days

#### 📋 **Viewing Results:**
1. Go to the **Actions** tab in your repository
2. Click on the specific workflow run
3. View logs in real-time or download artifacts
4. Check the BrowserStack dashboard for session recordings

### 🛠️ Customization

To modify the workflow for your needs:

#### Change Target Branches:
```yaml
on:
  push:
    branches: [main, master, staging]  # Add your branches
  pull_request:
    branches: [main, master]
```

#### Modify Device Configuration:
Update the device in `config/android-bs-wdio.conf.js`:
```javascript
capabilities: [{
    "platformName": 'Android',
    "appium:deviceName": 'Google Pixel 7',  // Change device
    "appium:platformVersion": "13.0",       // Change OS version
    "appium:automationName": "UIAutomator2",
    "appium:app": process.env.BROWSERSTACK_APP,
}]
```

#### Add Multiple Device Testing:
```javascript
capabilities: [
    {
        "platformName": 'Android',
        "appium:deviceName": 'Samsung Galaxy S23 Ultra',
        "appium:platformVersion": "13.0",
        // ... other caps
    },
    {
        "platformName": 'Android', 
        "appium:deviceName": 'Google Pixel 7',
        "appium:platformVersion": "13.0",
        // ... other caps
    }
]
```

### 🚨 Troubleshooting

#### Common Issues:

**❌ "BROWSERSTACK_USER not found"**
- Ensure you've added all three secrets to your repository
- Check that secret names are exactly: `BROWSERSTACK_USER`, `BROWSERSTACK_KEY`, `BROWSERSTACK_APP`

**❌ "App not found on BrowserStack"** 
- Verify your `BROWSERSTACK_APP` URL is correct (starts with `bs://`)
- Re-upload your APK if the URL expired

**❌ "Tests failing in CI but working locally"**
- Check the uploaded artifacts for detailed error logs
- Verify your APK is the same version used locally
- Ensure BrowserStack device capabilities match your local setup

**❌ "Workflow not triggering"**
- Check that your workflow file is in `.github/workflows/` directory
- Verify YAML syntax is correct
- Ensure you're pushing to the correct branches (`main`, `develop`)

