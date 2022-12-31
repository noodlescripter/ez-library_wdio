import type { Protocol } from './types.js';
import type AppiumCommands from './commands/appium.js';
import type ChromiumCommands from './commands/chromium.js';
import type GeckoCommands from './commands/gecko.js';
import type JSONWPCommands from './commands/jsonwp.js';
import type MJSONWPCommands from './commands/mjsonwp.js';
import type SauceLabsCommands from './commands/saucelabs.js';
import type SeleniumCommands from './commands/selenium.js';
import type WebDriverCommands from './commands/webdriver.js';
import type WebDriverBidiCommands from './commands/webdriverBidi.js';
declare const WebDriverProtocol: Protocol;
declare const WebDriverBidiProtocol: Protocol;
declare const MJsonWProtocol: Protocol;
declare const JsonWProtocol: Protocol;
declare const AppiumProtocol: Protocol;
declare const ChromiumProtocol: Protocol;
declare const GeckoProtocol: Protocol;
declare const SauceLabsProtocol: Protocol;
declare const SeleniumProtocol: Protocol;
type WebDriverCommandsAsync = {
    [K in keyof WebDriverCommands]: (...args: Parameters<WebDriverCommands[K]>) => Promise<ReturnType<WebDriverCommands[K]>>;
};
type WebDriverBidiCommandsAsync = {
    [K in keyof WebDriverBidiCommands]: (...args: Parameters<WebDriverBidiCommands[K]>) => Promise<ReturnType<WebDriverBidiCommands[K]>>;
};
type AppiumCommandsAsync = {
    [K in keyof AppiumCommands]: (...args: Parameters<AppiumCommands[K]>) => Promise<ReturnType<AppiumCommands[K]>>;
};
type ChromiumCommandsAsync = {
    [K in keyof ChromiumCommands]: (...args: Parameters<ChromiumCommands[K]>) => Promise<ReturnType<ChromiumCommands[K]>>;
};
type GeckoCommandsAsync = {
    [K in keyof GeckoCommands]: (...args: Parameters<GeckoCommands[K]>) => Promise<ReturnType<GeckoCommands[K]>>;
};
type JSONWPCommandsAsync = {
    [K in keyof JSONWPCommands]: (...args: Parameters<JSONWPCommands[K]>) => Promise<ReturnType<JSONWPCommands[K]>>;
};
type MJSONWPCommandsAsync = {
    [K in keyof MJSONWPCommands]: (...args: Parameters<MJSONWPCommands[K]>) => Promise<ReturnType<MJSONWPCommands[K]>>;
};
type SauceLabsCommandsAsync = {
    [K in keyof SauceLabsCommands]: (...args: Parameters<SauceLabsCommands[K]>) => Promise<ReturnType<SauceLabsCommands[K]>>;
};
type SeleniumCommandsAsync = {
    [K in keyof SeleniumCommands]: (...args: Parameters<SeleniumCommands[K]>) => Promise<ReturnType<SeleniumCommands[K]>>;
};
export interface ProtocolCommands extends WebDriverCommands, Omit<JSONWPCommands, keyof WebDriverCommands>, AppiumCommands, ChromiumCommands, Omit<MJSONWPCommands, keyof AppiumCommands | keyof ChromiumCommands>, SauceLabsCommands, SeleniumCommands {
}
export interface ProtocolCommandsAsync extends WebDriverCommandsAsync, Omit<JSONWPCommandsAsync, keyof WebDriverCommandsAsync>, AppiumCommandsAsync, ChromiumCommandsAsync, Omit<MJSONWPCommandsAsync, keyof AppiumCommandsAsync | keyof ChromiumCommandsAsync>, SauceLabsCommandsAsync, SeleniumCommandsAsync {
}
export * from './types.js';
export { WebDriverProtocol, MJsonWProtocol, JsonWProtocol, AppiumProtocol, ChromiumProtocol, SauceLabsProtocol, SeleniumProtocol, GeckoProtocol, WebDriverBidiProtocol, AppiumCommands, ChromiumCommands, JSONWPCommands, MJSONWPCommands, SauceLabsCommands, SeleniumCommands, WebDriverCommands, GeckoCommands, WebDriverBidiCommands, WebDriverCommandsAsync, AppiumCommandsAsync, ChromiumCommandsAsync, JSONWPCommandsAsync, MJSONWPCommandsAsync, SauceLabsCommandsAsync, SeleniumCommandsAsync, GeckoCommandsAsync, WebDriverBidiCommandsAsync };
export declare const CAPABILITY_KEYS: string[];
//# sourceMappingURL=index.d.ts.map