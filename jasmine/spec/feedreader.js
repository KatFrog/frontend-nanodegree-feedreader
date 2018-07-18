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

	describe('RSS Feeds', function() {

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		function url_present(input) {
			it("each feed has a URL", function() {
				expect(input.url).toBeDefined();
				expect(input.url.length).not.toBe(0);
			});
		}

		function name_present(input) {
			it("each feed has a name", function() {
				expect(input.name).toBeDefined();
				expect(input.name.length).not.toBe(0);
			});
		}

		for (let i = 0; i < allFeeds.length; ++i) {
			url_present(allFeeds[i]);
			name_present(allFeeds[i]);
		}

	});



	describe('The menu', function() {

		const mainBody = document.getElementById('main');
		const menu = document.querySelector('.menu-icon-link');

		it("menu should be hidden", function() {
			expect(mainBody.className).toBe('menu-hidden');
		});

		it("menu automatically reveals/hides when clicked", function() {
			menu.click();
			expect(mainBody.className).not.toBe('menu-hidden');
			menu.click();
			expect(mainBody.className).toBe('menu-hidden');
		});

	});


	describe('Initial Entries', function() {
		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */
	});


	describe('New Feed Selection', function() {
		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */

	});


}());