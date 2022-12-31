let webdriverIO_EZ_LIB = function () {

    let dTime = 10000;

    function error() {
        throw new Error("Somthing went wrong!!!! Could be something to do with the function param :::::: :(");
    }


    /* clearing the element for later uses */
    function getElement(mEle) {
        let sEle = $(mEle);
        sEle.waitForExist(dTime).then(function (displayed) {
            if (!displayed) error();
            console.log("Waiting for ::: "+dTime);
        })
        return sEle;
    }

    this.element = function(ele){
        if(!ele) error();
        let sEle = getElement(ele);
        return sEle;
    }

    this.goTo = function (url) {
        if (!url) error();
        browser.url(url);
    }

    this.byId = function (mEle) {
        if (!mEle) error();
        let sEle = getElement("[id='" + mEle + "']");
        return sEle;
    }

    this.byName = function (mEle) {
        if (mEle) error();
        let sEle = getElement("[name='" + mEle + "']");
        return sEle;

    }

    this.byClassName = function (mEle) {
        if (!mEle) error();
        let eEle = getElement("[class='" + mEle + "']");
        return eEle;
    }

    this.selectDDFieldByName_BYTEXT = function(name, sOption){
        if(!name || !sOption) error();
        let sName = getElement("[name='"+name+"']");
        sName.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sName.selectByVisibleText(sOption);
        });
    }

    this.selectDDFieldById_BYTEXT = function(id, sOption){
        if(!id || !sOption) error();
        let sId = getElement("[id='"+id+"']");
        sId.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sId.selectByVisibleText(sOption);
        });
    }

    this.selectDDFieldByCss_BYTEXT = function(css, sOption){
        if(!css || !sOption) error();
        let sCss = getElement(css);
        sCss.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sCss.selectByVisibleText(sOption);
        });
    }

    this.selectDDFeildByName_BYINDEX = function(name, sOption){
        if(!name || !sOption) error();
        let sName = getElement("[name='"+name+"']");
        sName.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sName.selectByIndex(sOption);
        })
    }

    this.selectDDFeildById_BYINDEX = function(id, sOption){
        if(!id || !sOption) error();
        let sId = getElement("[id='"+id+"']");
        sId.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sId.selectByIndex(sOption);
        })
    }

    this.selectDDFeildByCss_BYINDEX = function(css, sOption){
        if(!css || !sOption) error();
        let sCss = getElement(css);
        sCss.waitForDisplayed(dTime).then(function(displayed){
            if(!displayed) error();
            sCss.selectByIndex(sOption);
        })
    }
} 

module.exports = new webdriverIO_EZ_LIB();