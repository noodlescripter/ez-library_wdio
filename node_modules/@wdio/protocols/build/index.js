import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const WebDriverProtocol = require('../protocols/webdriver.json');
const WebDriverBidiProtocol = require('../protocols/webdriverBidi.json');
const MJsonWProtocol = require('../protocols/mjsonwp.json');
const JsonWProtocol = require('../protocols/jsonwp.json');
const AppiumProtocol = require('../protocols/appium.json');
const ChromiumProtocol = require('../protocols/chromium.json');
const GeckoProtocol = require('../protocols/gecko.json');
const SauceLabsProtocol = require('../protocols/saucelabs.json');
const SeleniumProtocol = require('../protocols/selenium.json');
export * from './types.js';
export { 
// protocols
WebDriverProtocol, MJsonWProtocol, JsonWProtocol, AppiumProtocol, ChromiumProtocol, SauceLabsProtocol, SeleniumProtocol, GeckoProtocol, WebDriverBidiProtocol };
export const CAPABILITY_KEYS = [
    'browserName', 'browserVersion', 'platformName', 'acceptInsecureCerts',
    'pageLoadStrategy', 'proxy', 'setWindowRect', 'timeouts', 'strictFileInteractability',
    'unhandledPromptBehavior', 'webSocketUrl'
];
