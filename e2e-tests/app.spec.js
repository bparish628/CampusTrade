describe('Login', () => {
  it('should log into a user', () => {
    browser.driver.manage().window().maximize();
    browser.get('http://localhost:3000/#/auth/login');

    element(by.model('$ctrl.user.email')).sendKeys('test@test.com');
    element(by.model('$ctrl.user.password')).sendKeys('password');
    browser.sleep(1500);
    element(by.css('[type="submit"]')).click();
    browser.sleep(1500);

    expect(element.all(by.css('h4')).count()).toEqual(2);
  });
});

describe('Dashboard', () => {
  it('should show the wishlisted items', () => {
    element(by.css('[href="#/dashboard"]')).click();
    const wishlist = element.all(by.repeater('item in $ctrl.wishlistPages.displayedPages'));
    expect(wishlist.count()).toEqual(2);
  });

  it('should show the posted items', () => {
    element(by.css('[href="#/dashboard"]')).click();
    const posts = element.all(by.repeater('post in $ctrl.tradePages.displayedPages'));
    expect(posts.count()).toEqual(2);
    browser.sleep(1500);
    element(by.cssContainingText('a', '2')).click();
    browser.sleep(1500);
    expect(posts.count()).toEqual(1);
  });
});

describe('Recent Trades', () => {
  it('should have a list of recent trades', () => {
    element(by.cssContainingText('li', 'My Recent Trades')).click();
    browser.sleep(1500);
    const trades = element.all(by.repeater('item in $ctrl.tradeItems'));
    expect(trades.count()).toEqual(3);
  });

  it('should select a recent trades', () => {
    const trades = element.all(by.repeater('item in $ctrl.tradeItems'));
    trades.get(0).click();
    browser.sleep(1500);
    expect(browser.getCurrentUrl()).toContain("/#/post/");
    element(by.cssContainingText('div', 'My Recent Trades')).click();
  });
});

describe('Recently Wishlisted', () => {
  it('should have a list of recently wishlisted items', () => {
    browser.sleep(1500);
    element(by.cssContainingText('li', 'Recently Wishlisted')).click();
    browser.sleep(1500);
    const wishlists = element.all(by.repeater('item in $ctrl.wishlistItems'));
    expect(wishlists.count()).toEqual(2);
  });  
  
  it('should select a wishlisted item', () => {
    const wishlists = element.all(by.repeater('item in $ctrl.wishlistItems'));
    wishlists.get(0).click();
    browser.sleep(1500);
    expect(browser.getCurrentUrl()).toContain("/#/browse/");
    element(by.cssContainingText('div', 'Recently Wishlisted')).click(); 
  });


});

describe('Profile', () => {
  it('should edit the users profile', () => {
    element(by.css('[href="#/profile"]')).click();
    element(by.model('$ctrl.user.firstName')).clear().sendKeys('Harry');
    element(by.model('$ctrl.user.lastName')).clear().sendKeys('Potter');
    browser.sleep(1500);
    element(by.css('[type="submit"]')).click();
    browser.sleep(1500);
    expect(element(by.css('.card-panel.green')).getText()).toEqual('Profile has successfully been updated');
  });
});

describe('Post', () => {
  it('Should post a new item', () => {
    element(by.css('[href="#/post"]')).click();
    element(by.model('$ctrl.post.name')).sendKeys('Test Book');
    element(by.css('.select-dropdown')).click();
    element(by.cssContainingText('span', 'Books')).click();
    element(by.model('$ctrl.post.price')).sendKeys('20.00');
    element(by.model('$ctrl.post.description')).sendKeys('This is quite the book!');
    browser.sleep(1500);
    element(by.css('.post-button')).click();
    expect(element(by.css('.card-panel.green')).getText()).toEqual('Your item has been successfully posted.');
    browser.sleep(1500);
  })
});

describe('Browse', () => {
  it('should show all items', () => {
    element(by.css('[href="#/browse"]')).click();
    const postList = element.all(by.repeater('post in $ctrl.page.displayedPages'));
    expect(postList.count()).toEqual(8);
    expect(postList.get(0).element(by.css('.title')).getText()).toEqual('Test Book');
    expect(postList.get(0).element(by.css('.seller')).getText()).toEqual('Harry Potter');
    browser.sleep(1500);
  });

  it('should select an item', () => {
    const postList = element.all(by.repeater('post in $ctrl.page.displayedPages'));
    browser.sleep(1500);
    postList.get(0).click();
    browser.sleep(1500);
    expect(element(by.css('.post-name')).getText()).toEqual('Test Book');
    expect(element(by.css('.post-price')).getText()).toEqual('$20.00');
  });

  it('wishlist the item', () => {
    const wishlistIcon = element(by.css('.small.pointer'))
    expect(wishlistIcon.getText()).toEqual('star_border');
    browser.sleep(1500);
    wishlistIcon.click();
    expect(wishlistIcon.getText()).toEqual('star');
    browser.sleep(1500);
    wishlistIcon.click();
    browser.sleep(1500);
    expect(wishlistIcon.getText()).toEqual('star_border');
  });

  it('delete the item', () => {
    element(by.css('[href="#/dashboard"]')).click();
    element.all(by.repeater('post in $ctrl.tradePages.displayedPages')).get(0).click();
    browser.sleep(1500);
    element(by.css('.delete-button')).click();
    expect(element(by.css('.card-panel.green')).getText()).toEqual('Your item has been successfully deleted.');
    browser.sleep(1500);
    element(by.css('[href="#/browse"]')).click();
    const postList = element.all(by.repeater('post in $ctrl.page.displayedPages'));
    expect(postList.count()).toEqual(7);
    expect(postList.get(0).element(by.css('.title')).getText()).not.toEqual('Test Book');
  });
});

describe('Messages', () => {
  it('should show the user messages', () => {
    element(by.css('[href="#/messages"]')).click();
    const users = element.all(by.repeater('user in $ctrl.users'));
    expect(users.count()).toEqual(2);
    browser.sleep(1500);
    users.get(0).click();
    browser.sleep(1500);
    const messages = element.all(by.repeater('message in $ctrl.messages'));
    expect(messages.first().getText()).toContain('Hello!');
  });

  it('should show submit a new message', () => {
    element(by.model('$ctrl.message.message')).sendKeys('Hey! This is an automated message!');
    browser.sleep(1500);
    element(by.css('[type="submit"]')).click();
    browser.sleep(1500);
    expect(element.all(by.repeater('message in $ctrl.messages')).last().getText()).toContain('Hey! This is an automated message!');
  });
});