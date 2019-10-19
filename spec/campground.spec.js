const Page = require("../lib/basePage");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000; // in microseconds.

(async function test(){
    try {
        describe("Campground Rodeo Beach",function(){
            
            beforeEach(async function(){
                page = new Page();
                driver = page.driver; 
                await page.setTimeouts(10000);
                await page.visit("https://thawing-headland-37322.herokuapp.com/campgrounds/5c530f7e5cf8174fbc3653ed");
            })

            afterEach(async function(){
                await page.quit();
            })

            it("should not add new comment without logging in",async function(){
                let addNewCommentButton = await page.findByLinkText("Add New Comment");
                await addNewCommentButton.click();
                
                // after clicking it should redirect user to login page 
                // get url of current
                let currentUrl = await page.getCurrentUrl();
                console.log(currentUrl) // https://thawing-headland-37322.herokuapp.com/login

                console.log("\nCampground Rodeo Beach should not add new comment without logging in")
                expect(currentUrl.includes("login")).toBe(true);
            })
        })
    } catch (error) {
        console.log(error);
    }
})();