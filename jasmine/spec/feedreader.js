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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //  Gets the url for each feed obj and checks
        // (a) that it is defined, and 
        // (b) that it is not empty (length > 0 characters)
        // Note that this does NOT check the validity of the link or its formulation,
        // although we were not asked to test that aspect of it.
        allFeeds.forEach( function(obj) {
            console.log(obj);
            
            it('it has a url defined', function() {
                expect(obj.url).toBeDefined();
            });

            it('the url is not empty', function() {
                expect(obj.url.length).not.toBe(0);
            });
        
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //  Gets the name of each feed obj and checks
        // (a) that it is defined, and 
        // (b) that it is not empty (name length > 0 characters)
        allFeeds.forEach( function(obj) {
            it('it has a name defined', function() {
                expect(obj.name).toBeDefined();
            });

            it('the name is not empty', function() {
                expect(obj.name.length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should hide menu by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
         /* By using BeforeEach() here we both reduce the number of times we have to declare the variables currently in its
          * scope while simultaneously avoiding conflicts between the results of the two expectations, which might otherwise
          * fail when falling outside the BeforeEach() scope, since the tests are set to run randomly.
          */ 
        
            //  beforeEach( function() {
                // let cL = document.body.classList;
                // let menuIcon = $('.menu-icon-link');
                // let menuIcon = document.body;
                // let menuHiddenIndicator = document.body.classList.contains
            // });

            // // Testing for the existence of the side menu
            it('should toggle when clicked', function() {                    

                // Initiate a click on the icon that links to the menu
                $('.menu-icon-link').trigger('click');
                // Check that the class menu-hidden has been removed from the body tag
                expect($('body').hasClass('menu-hidden')).toBe(false);
                
                // Initiate another click on the icon that links to the menu
                $('.menu-icon-link').trigger('click');
                // Check that the class menu-hidden has been added back to the body tag
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        }); // End of suite "The menu"

        // **********************************************************************

        // Spy section - it turns out that spies may or may not be needed

        // menuIcon = document.querySelector('.menu-icon-link');
        // let spy = jasmine.createSpy(toggleSpy);

        // let menuIcon = $('.menu-icon-link');
        // let toggleSpy = null;

        // beforeEach(function() {
            
        //     toggleSpy = {
        //         hideMenu: $('body').toggleClass('menu-hidden')
        //     }

        //     spyOn(toggleSpy, hideMenu)
        // });

        // it('should spy on toggleClass', function() {
        //     expect(toggleSpy.hideMenu).toHaveBeenCalled();
        // });

        // **********************************************************************
        
        // let toggleSpy = spyOn(menuIcon, 'toggleClass');

        // toggleSpy.toggleClass(menuIcon);
        // expect(toggleSpy).toHaveBeenCalled();

        // it('should spy on toggleClass', function() {
        //     toggleSpy = spyOn(menuIcon, 'toggleClass');
        //     toggleSpy.toggleClass(menuIcon);
        //     expect(toggleSpy).toHaveBeenCalled();
        // });

        // let menuIcon = $('.menu-icon-link');
        // menuIcon.css.
        // menuIcon.on('click', function() {
        //     $('body').toggleClass('menu-hidden');
        // });


        // it('should show sliding menu', function() {
        //     expect(document.body.classList).not.toContain('menu-hidden');
        // });

        // spyOn(menuIcon, 'toggleClass');

        // it('tracks that the spy was called again', function() {
        //     expect(menuIcon.toggleClass).toHaveBeenCalled();
        // });

        // it('should re-hide the sliding menu', function() {
        //     expect(document.body.classList).toContain('menu-hidden');
        // });
        
        // **********************************************************************

    //       beforeEach( function() {
    //           let spy = jasmine.createSpy('click');
    //       });

    //       it("tracks that the spy was called", function() {
    //           expect('click').toHaveBeenCalled();
    //       })

    //       spyOn('.menu-icon-link', click());
         
    //      it('should display the menu when clicked', function() {
             
    //         $('.menu-icon-link').trigger('click');
    //         expect(document.body.classList).not.toContain('menu-hidden');
    //      });

            // **********************************************************************

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * Remember, loadFeed() is asynchronous so this test will require
    * the use of Jasmine's beforeEach and asynchronous done() function.
    */

    describe("Initial Entries", function() {

        // Using beforeEach and passing the indicator function done() as an argument to
        // handle asynchronous nature of the loadFeed() function.
        beforeEach(function (done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Verify that there is at least one .entry element in the .feed container
        it("contains entries; that is, the feed's length is not zero", function() {
            expect($('.feed').length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
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
