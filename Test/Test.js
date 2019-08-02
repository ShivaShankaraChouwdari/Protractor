describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {

        browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
       
            console.log("shiva..");
            element(by.model("first")).sendKeys(4);
            element(by.model("second")).sendKeys(5);
            element.all(by.model("select[model='operator']")).then(function(xx){
                console.log(xx);
                // Number of elements.


// First and last.

//element.all(locator).last();
            })
            element(by.id("gobutton")).click().then(function(){

                browser.sleep(5000);
                element(by.css("h2[class='ng-binding']")).getText().then(function(tt){
                console.log(tt);
                expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('9');
                })
            })
        })       
    });
});
        
    
   
            
