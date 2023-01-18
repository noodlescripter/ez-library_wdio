var scroll = {
    scrollToElement: async function (ele) {
        const element = await $(ele);
        const y = await browser.execute(async function (element) {
            return await element.getBoundingClientRect().top + window.pageYOffset;
        }, element);
        await browser.execute(`window.scrollTo(0, ${y});`);
    }
}