$(function() {
    describe('RSS Feeds', function() {
      // check if allFeeds is defined and not empty
      it('feeds are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });
      // loop through feeds in allFeeds to check if url is defined / not empty
      it('url is defined', function() {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      })
      // loop through feeds in allFeeds to check if name is defined / not empty
      it('name is defined', function() {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      })
    });

    describe('The Menu', function() {
      // check if menu is hidden by default by checking for the related class
      it('is hidden by default', function() {
        const body = document.getElementsByTagName('body')[0];
        expect(body).toHaveClass('menu-hidden');
      });
      // check if burger button changes visiblity by adding/removing related class
      it('changes visibility upon click on hamburger button', function() {
        const body = document.getElementsByTagName('body')[0];
        const icon = document.getElementsByClassName('menu-icon-link')[0];
        icon.click();
        expect(body).not.toHaveClass('menu-hidden');
        icon.click();
        expect(body).toHaveClass('menu-hidden');
      });
    });

    describe('Initial Entries', function() {
      // make sure loadFeed is run and done before it's are tested
      beforeEach(function(done) {
        // give done function as argument to wait for completion
        loadFeed(0, done);
      })
      // check if feed container has entries in it by checking for length
      it('has at least one .entry element in the .feed container', function(){
        expect(document.querySelectorAll('.feed .entry').length).not.toBe(0);
      });

    });

    describe('New Feed Selection', function() {
      // check if after new feed selection content changes
      let initialFeed;
      let newFeed;

      beforeEach(function(done) {
        // loadFeed to get default/initial feed, get first entry.innertext
        // save it in a variable and wait for completion
        loadFeed(0, function() {
          initialFeed = document.getElementsByClassName('feed')[0].innerText;
          done();
        });
      });

      it('changes content when new feed is loaded with loadFeed', function(done) {
        // load new Feed with loadFeed, get first entry.innertext
        // save it in a variable and wait for completion
        loadFeed(1, function() {
          newFeed = document.getElementsByClassName('feed')[0].innerText;
          // now check if initialFeed is equal to newFeed
          expect(initialFeed).not.toEqual(newFeed);
          done();
        });
      })
    })
}());
