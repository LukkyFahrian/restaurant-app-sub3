const assert = require('assert');

Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/');
});
 
Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.error-container__favorite');
});

Scenario('liking one restaurant',async ({ I }) => {

  I.seeElement('.btn-modal a');
  const firstRestoTitle = await I.grabTextFrom(locate('.rest-item__title').first());
  I.click(locate({css: '.btn-modal a'}).first());

  I.seeElement('#likeButton');
  I.click({css: '#likeButton'});

  I.amOnPage('/#/favorite');
  I.seeElement('.rest-item');
  const likedRestoTitle = await I.grabTextFrom(locate('.rest-item__title').first());

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant before', async ({ I }) => {

    I.amOnPage('/#/favorite');

    I.seeElement('.btn-modal a');
    const likedRestoTitle = await I.grabTextFrom(locate('.rest-item__title').first());
    I.click(locate({css: '.btn-modal a'}).first());
    
    const restoTitleDetail = await I.grabTextFrom('.detail-rest-item__title');
    assert.strictEqual(likedRestoTitle, restoTitleDetail);

    I.seeElement('#likeButton');
    I.click({css: '#likeButton'});
  
    I.amOnPage('/#/favorite');
    I.seeElement('.error-container__favorite');
});

Scenario('send review customer', async ({ I }) => {

    I.seeElement('.btn-modal a');
    I.click(locate({css: '.btn-modal a'}).first());

    const  testNameReview = 'Lukky Fahriann';
    const  testCommentReview = 'test e2e';
    I.fillField('name',testNameReview);
    I.fillField('Review :',testCommentReview);
    I.click('Submit');

    I.see(testNameReview, '.costumerReviews');
    I.see(testCommentReview, '.costumerReviews');
});