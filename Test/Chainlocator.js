describe("Test Chainloacators", function () {
    it("Chainlocator Test", function () {

        browser.get('http://juliemr.github.io/protractor-demo/').then(function () {

            console.log("shiva..");
            element(by.model("first")).sendKeys(41);
            element(by.model("second")).sendKeys(5);
            element(by.id("gobutton")).click().then(function () {

                browser.sleep(5000);
                element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
                    console.log(text);
                })
            })


})

    });

    });