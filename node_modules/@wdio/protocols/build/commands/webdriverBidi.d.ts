import type { BidiResponse } from '../types.js';
export default interface WebdriverBidiCommands {
    /**
     * WebdriverBidi Protocol Command
     *
     * Send socket commands via WebDriver Bidi
     * @ref https://github.com/w3c/webdriver-bidi
     *
     */
    send(params: object): BidiResponse;
    /**
     * WebdriverBidi Protocol Command
     *
     * Send asynchronous socket commands via WebDriver Bidi
     * @ref https://github.com/w3c/webdriver-bidi
     *
     */
    sendAsync(params: object): void;
}
//# sourceMappingURL=webdriverBidi.d.ts.map