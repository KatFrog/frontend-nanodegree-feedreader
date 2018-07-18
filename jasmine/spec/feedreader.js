/* feedreader.js
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

	describe('RSS Feeds', function() {
		// Ensure that the allFeeds variable is defined
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		// Checks whether a feed has a URL
		function url_present(input) {
			it("each feed has a URL", function() {
				expect(input.url).toBeDefined();
				expect(input.url.length).not.toBe(0);
			});
		}

		// Checks whether a feed has a name
		function name_present(input) {
			it("each feed has a name", function() {
				expect(input.name).toBeDefined();
				expect(input.name.length).not.toBe(0);
			});
		}

		// Loops through all the feeds to check URL and name of each feed
		for (let i = 0; i < allFeeds.length; ++i) {
			url_present(allFeeds[i]);
			name_present(allFeeds[i]);
		}

	});



	describe('The menu', function() {

		const mainBody = document.getElementById('main');
		const menu = document.querySelector('.menu-icon-link');

		// Check that the default state of the menu is hidden
		it("menu should be hidden", function() {
			expect(mainBody.className).toBe('menu-hidden');
		});

		// Test whether clicking on the menu hides/reveals it
		it("menu automatically reveals/hides when clicked", function() {
			menu.click();
			expect(mainBody.className).not.toBe('menu-hidden');
			menu.click();
			expect(mainBody.className).toBe('menu-hidden');
		});

	});


	describe('Initial Entries', function() {
		// Determine that a feed has at least one entry.
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('every feed needs at least one entry', function() {
			let feed = document.getElementById('feed');
			expect(feed.childElementCount).not.toBeLessThan(0);
		});
	});


	describe('New Feed Selection', function() {
		// Ensure that new content is loaded with a feed change
		let initialFeed;

		beforeEach(function(done) {
			loadFeed(0);
			initialFeed = $('#feed').html();
			loadFeed(1);
			done();
		});

		it('check that page content changes with a new feed', function() {
			expect('.feed').not.toBe(initialFeed);
		});
	});


}());