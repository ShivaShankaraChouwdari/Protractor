
    describe("Test Chainloacators", function () {
        function Add(a, b) {
            element(by.model("first")).sendKeys(a);
            element(by.model("second")).sendKeys(b);
            element(by.id("gobutton")).click();
        }
        it("Chainlocator Test", function () {
          
            browser.get('http://juliemr.github.io/protractor-demo/').then(function () {
                console.log("shiva..");
                Add(3, 66);
                Add(13, 6);
                Add(23, 16);
                Add(33, 26);
                Add(43, 66);
                Add(53, 96);
                element.all(by.repeater("result in memory")).each(function (count) {
                    count.element(by.css("td:nth-child(3)")).getText().then(function (outp) {
                        console.log(outp);
                    });
                    element.all(by.tagName("option")).each(function(ele){
                        ele.getAttribute("value").then(function(values){
                            console.log(values);
                        })
                    })
                });
            });
        });
    });
    


