var wait = async function (ele) {
    var { timeout: dTime } = 40000;
    var sEle = await $(ele);
    await sEle.waitForClickable({ timeout: { timeout: dTime } }).then(async function (clickable) {
        if (!clickable) {
            await sEle.waitForDisplayed({ timeout: dTime }).then(async function (displayed) {
                if (!displayed) {
                    await sEle.waitForEnabled({ timeout: dTime }).then(async function (enabled) {
                        if (!enabled) {
                            await sEle.waitForExist({ timeout: dTime }).then(async function (ex) {
                                if (!ex) {
                                    throw new Error("Naaaaaaahhhhh that did not work!!!!!!! Element is not found!!!!!!!!");
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = wait;