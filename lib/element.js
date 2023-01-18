var dTime = 40000;
var element = {
    
    clickByName: async function (name) {
        var sEle = await $("[name='"+name+"']");
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.click();
    },

    clickById: async function(id){
        var sEle = await $("[id='"+id+"']");
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.click();
    },

    clickByCss: async function(css){
        var sEle = await $(css);
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.click();
    },


    clickByClassName: async function(className){
        var sEle = await $("[class='"+className+"']");
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.click();
    },

    clickByXpath: async function(xpath){
        var sEle = await $(xpath);
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.click();
    },

    typeByName: async function (name, value) {
        var sEle = await $("[name='"+name+"']");
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.setValue(value);
    },

    typeById: async function (id, value) {
        var sEle = await $("[id='"+id+"']");
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.setValue(value);
    },

    typeByCss: async function (css, value) {
        var sEle = await $(css);
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.setValue(value);
    },

    typeByXpath: async function (xpath, value) {
        var sEle = await $(xpath);
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.setValue(value);
    },

    typeByClassName: async function (className, value) {
        var sEle = await $(className);
        await sEle.waitForClickable(dTime).then(async function(clickable){
            if (!clickable) {
                await sEle.waitForDisplayed(dTime).then(async function(displayed){
                    if (!displayed) {
                        await sEle.waitForEnabled(dTime).then(async function(enabled){
                            if (!enabled) {
                                await sEle.waitForExist(dTime).then(async function(ex){
                                    if (!ex) {
                                        throw new Error("Naaaaaaahhhhh that did not work!!!!!!!");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
        await sEle.setValue(value);
    },

}

module.exports = element;