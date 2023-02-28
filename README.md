# @ez-lib/wdio

@ez-lib/wdio for automation testing with webdriverIO

## Installation

Use the package manager NPM to install 

```bash
npm install @ez-library/wdio
```

## **** Two ways to use ****

## #1
```javascript
const ez = require("@ez-library/wdio");

describe("Testing made easy with wdio", function(){
  it("Testing with @ez-library/wdio", async function(){
        await ez.goTo("https://www.google.com/");
        await ez.byClassName("name").click();
        await ez.byId("ID").click();
        await ez.selectDDFeildByCss_BYINDEX("dropdown css", 1);
        await ez.selectDDFieldById_BYTEXT("dropdown id", "some text");
  });
});
```

## #2  (Recomended)
Edit wdio.conf.js and add below line in before: function(){};
```javascript
before: function (capabilities, specs) {
    global.ez = require("@ez-library/wdio");
}
```
And Implement in your testcases:
```javascript
describe("Testing made easy with wdio", function(){
  it("Testing with @ez-library/wdio", async function(){
        await ez.goTo("https://www.google.com/");
        await ez.byClassName("name").click();
        await ez.byId("ID").click();
        await ez.selectDDFeildByCss_BYINDEX("dropdown css", 1);
        await ez.selectDDFieldById_BYTEXT("dropdown id", "some text");
  });
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

