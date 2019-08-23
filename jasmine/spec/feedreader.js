$(function() {
    describe('RSS Feeds', function() {

      it('feeds are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      it('url is defined', function() {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      })

      it('name is defined', function() {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      })
    });

    describe('The Menu', function() {
      it('is hidden by default', function() {
        const body = document.getElementsByTagName('body')[0];
        expect(body).toHaveClass('menu-hidden');
      });
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
      beforeEach(function(done) {
        loadFeed(0, done);
      })

      it('has at least one .entry element in the .feed container', function(){
        expect(document.getElementsByClassName('entry').length).not.toBe(0);
      });

    });

    describe('New Feed Selection', function() {
      let initialFeed;
      let newFeed;

      beforeEach(function(done) {
        loadFeed(0, function() {
          initialFeed = document.getElementsByClassName('feed')[0].innerText;
          done();
        });
      });

      it('changes content when new feed is loaded with loadFeed', function(done) {
        loadFeed(1, function() {
          newFeed = document.getElementsByClassName('feed')[0].innerText;
          done();
        });
        expect(initialFeed).not.toEqual(newFeed);
      })
    })
}());
