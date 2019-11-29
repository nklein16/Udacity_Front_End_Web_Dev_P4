// Using the function form of 'use strict' as explained here:
// https://stackoverflow.com/questions/4462478/jslint-is-suddenly-reporting-use-the-function-form-of-use-strict
(function () {
    'use strict';
 }());

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //  Gets the url for each feed obj and checks
        // (a) that it is defined, and 
        // (b) that it is not empty (length > 0 characters)
        // Note that this does NOT check the validity of the link or its formulation,
        // although we were not asked to test that aspect of it.
        
        // Attempt 1 - This works, but was rejected by reviewer
        // allFeeds.forEach( function(obj) {
        //     console.log(obj);
            
        //     it('it has a url defined', function() {
        //         expect(obj.url).toBeDefined();
        //     });

        //     it('the url is not empty', function() {
        //         expect(obj.url.length).not.toBe(0);
        //     });
        
        // });

        // Attempt 2 (after rejection above)

        it('each have a URL defined and the URL is not empty', function() {
            
            allFeeds.forEach( function(feed) {
             
                // Checking first expectation
                expect(feed.url).toBeDefined();
                // See that it exists in the console (that it does not come back as undefined)
                console.log('RSS Feeds, Feed URL: ' + feed.url);

                // Checking second expectation
                expect(feed.url.length).not.toBe(0);
                // See that the length of each url is > 0
                console.log('RSS Feeds, Feed URL length: ' + feed.url.length);
            });            
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        /*  Gets the name of each feed obj and checks
         * (a) that it is defined, and 
         * (b) that it is not empty (name length > 0 characters)
         */

        //  Attempt 1 - This works, but was rejected by reviewer
        // allFeeds.forEach( function(obj) {
        //     it('it has a name defined', function() {
        //         expect(obj.name).toBeDefined();
        //     });

        //     it('the name is not empty', function() {
        //         expect(obj.name.length).not.toBe(0);
        //     });
        // });

        // Attempt 2 (after rejection above)
        it('each have a name defined and the name is not empty', function() {

            allFeeds.forEach( function(obj) {
                
                // Checking first condition
                expect(obj.name).toBeDefined();
                // See that it exists in the console (that it does not come back as undefined)
                console.log("RSS Feeds - Object's name: " + obj.name);
                
                // Checking second condition
                expect(obj.name.length).not.toBe(0);
                // See that the length of each name is > 0
                console.log("RSS Feeds - Length of object's name: " + obj.name.length);

            });
        });

    }); // End of suite RSS Feeds


    /* Write a new test suite named "The menu" */
    describe("The menu", function() {

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should be hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        // Testing for the existence of the side menu
        it('should toggle when clicked', function() {                    

            // Three tests are now done to separate these tests, as per rubric, from the one above
            
            // This works inconsistently for some reason, so sticking with utilizing the one above.
            // Note that the order I WAS using was this:
            // Test above: expected to be false
            // 1st test below - commented out: expected to be true
            // 2nd test below: expected to be false
            // 3rd test below: expected to be true
            // Had to revise these to re-include the first test above 

            // Testing that menu is showing
            // Initiate click on the icon that links to the menu
            // $('.menu-icon-link').trigger('click');
            // Check that the class menu-hidden has been added back to the body tag
            // expect($('body').hasClass('menu-hidden')).toBe(false);

            // Testing that menu is showing 
            // Initiate a second click on the icon that links to the menu
            $('.menu-icon-link').click();
            // Check that the class menu-hidden has been removed from the body tag
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            // Testing that menu is hidden again
            // Initiate a final click on the icon that links to the menu
            $('.menu-icon-link').click();
            // Check that the class menu-hidden has been added back to the body tag
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    }); // End of suite "The menu"

    /* TODO: Write a new test suite named "Initial Entries" */

    /* This test ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * Remember, loadFeed() is asynchronous so this test will require
    * the use of Jasmine's beforeEach and asynchronous done() function.
    */

    describe("Initial Entries", function() {

        // Using beforeEach and passing the indicator function done() as an argument to
        // handle asynchronous nature of the loadFeed() function.
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        // Verify that there is at least one .entry element in the .feed container
        it("exist; that is, the feed's length is not zero", function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Write a new test suite named "New Feed Selection" */

    /* This test ensures that when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */

    describe("New Feed Selection", function() {

        let feedOne, feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {        
                
                // Get first feed
                feedOne = $('.feed').find('h2').eq(0)[0].innerText;

                loadFeed(1, function() {
                    
                    // Get second feed
                    feedTwo = $('.feed').find('h2').eq(1)[0].innerText;
                
                    // Indicate end of callback 
                    done();
                });

            });

        });

        // Verify that the content has changed
        it("has been loaded, thus changing the content", function() {
            expect(feedOne).not.toEqual(feedTwo);
        });

    }); // End New Feed Selection
    
}());
