var wait = require("./wait");
var select = {

    selectByText : async function(ele, text){
        var sEle = await $(ele);
        await wait(sEle);
        await sEle.selectByVisibleText(text);
    },
    selectByIndex : async function(ele, index){
        var sEle = await $(ele);
        await wait(sEle);
        await sEle.selectByIndex(index);
    },
    /* selectByText : async function(ele, att){
        var sEle = await $(ele);
        await wait(sEle);
        await sEle.selectByAttribute(att);
    } */

}

module.exports = select;