
/***
 * example review data: GET from
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort="relevant"&product_id=71697
*/
let sampleReviews71697 =
{
  'product': '71697',
  'page': 0,
  'count': 5,
  'results': [
    {
      'review_id': 1275188,
      'rating': 5,
      'summary': 'love it',
      'recommend': true,
      'response': null,
      'body': '- If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review',
      'date': '2022-06-07T00:00:00.000Z',
      'reviewer_name': 'test',
      'helpfulness': 72,
      'photos': []
    },
    {
      'review_id': 1275236,
      'rating': 4, 'summary': 'Good quality',
      'recommend': true, 'response': null,
      'body': 'the quality is good, might need some more colors, great',
      'date': '2022-06-09T00:00:00.000Z',
      'reviewer_name': 'ssss', 'helpfulness': 12,
      'photos': []
    },
    {
      'review_id': 1275244,
      'rating': 3, 'summary': '',
      'recommend': true,
      'response': null,
      'body': 'sad;flkjsad;lfkjas;dlkfja;slkdjf;aslkdjf;lkasjdf;lkajsdff;lk',
      'date': '2022-06-10T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 9,
      'photos': []
    },

    {
      'review_id': 1275253,
      'rating': 5,
      'summary': 'really like it ',
      'recommend': true,
      'response': null,
      'body': 'really like it really like it really like it really like it ',
      'date': '2022-06-11T00:00:00.000Z',
      'reviewer_name': 'test',
      'helpfulness': 3,
      'photos': []
    },
    {
      'review_id': 1275260,
      'rating': 5,
      'summary': 'dgs',
      'recommend': true,
      'response': null,
      'body': 'sjsjkgskjhslvhslhsljhsjkvhsjvhsljvhsljvhsjkvhsjvhvfv',
      'date': '2022-06-13T00:00:00.000Z',
      'reviewer_name': 'test',
      'helpfulness': 1,
      'photos': []
    }]
};


/***
 * example review data: GET from
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort="relevant"&product_id=71699&count=10
*/

let sampleReviews71698 =
{
  'product': '71698',
  'page': 0,
  'count': 10,
  'results': [
    {
      'review_id': 1254282,
      'rating': 4,
      'summary': 'I am liking these glasses',
      'recommend': true,
      'response': 'Glad you\'re enjoying the product!',
      'body': 'They are very dark. But that\'s good because I\'m in very sunny spots',
      'date': '2019-06-23T00:00:00.000Z', 'reviewer_name': 'bigbrotherbenjamin',
      'helpfulness': 7, 'photos': []
    },
    {
      'review_id': 1254284,
      'rating': 3,
      'summary': 'I\'m enjoying wearing these shades',
      'recommend': true,
      'response': '',
      'body': 'Comfortable and practical.',
      'date': '2019-04-14T00:00:00.000Z',
      'reviewer_name': 'shortandsweeet',
      'helpfulness': 7,
      'photos': [
        { 'id': 2414648, 'url': 'https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
        { 'id': 2414649, 'url': 'https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80' }, { 'id': 2414650, 'url': 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' }
      ]
    },
    {
      'review_id': 1254286,
      'rating': 2,
      'summary': 'This product was ok!',
      'recommend': false,
      'response': '',
      'body': 'They\'re fine but I wouldn\'t buy again.',
      'date': '2019-05-23T00:00:00.000Z',
      'reviewer_name': 'anyone',
      'helpfulness': 1,
      'photos': []
    },
    {
      'review_id': 1254283,
      'rating': 4,
      'summary': 'They look good on me',
      'recommend': true,
      'response': '',
      'body': 'I so stylish and just my aesthetic.',
      'date': '2019-03-12T00:00:00.000Z',
      'reviewer_name': 'fashionperson',
      'helpfulness': 1, 'photos': []
    },
    {
      'review_id': 1274995,
      'rating': 3,
      'summary': 'TESTING TESTING REVIEW',
      'recommend': true,
      'response': null,
      'body': 'Is this TESTING TESTING Rview************?',
      'date': '2022-06-01T00:00:00.000Z',
      'reviewer_name': 'Unicorn MAD',
      'helpfulness': 0,
      'photos': [{ 'id': 2455096, 'url': 'testingUnicorn@gmail.com' }]
    },
    {
      'review_id': 1275179,
      'rating': 5,
      'summary': '',
      'recommend': true,
      'response': null,
      'body': 'asdfasdfawsdfasdfasdfajsdfjasjdfjasdjfjasdjfajsdjf',
      'date': '2022-06-05T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 0,
      'photos': [
        { 'id': 2455190, 'url': 'blob:http://localhost:3000/7c91f6d7-fc8e-42c8-9a22-95755a79915c' }
      ]
    },
    {
      'review_id': 1275178,
      'rating': 5,
      'summary': '',
      'recommend': true,
      'response': null,
      'body': 'asdfasdfawsdfasdfasdfajsdfjasjdfjasdjfjasdjfajsdjf',
      'date': '2022-06-05T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 0,
      'photos': []
    },
    {
      'review_id': 1275177,
      'rating': 5,
      'summary': '',
      'recommend': true,
      'response': null,
      'body': 'asdfasdfawsdfasdfasdfajsdfjasjdfjasdjfjasdjfajsdjf',
      'date': '2022-06-05T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 0, 'photos': []
    },
    {
      'review_id': 1275176,
      'rating': 5,
      'summary': '',
      'recommend': true,
      'response': null,
      'body': 'asdfasdfawsdfasdfasdfajsdfjasjdfjasdjfjasdjfajsdjf',
      'date': '2022-06-05T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 0,
      'photos': []
    },
    {
      'review_id': 1275175,
      'rating': 5,
      'summary': '',
      'recommend': true,
      'response': null,
      'body': 'asdfasdfawsdfasdfasdfajsdfjasjdfjasdjfjasdjfajsdjf',
      'date': '2022-06-05T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 0, 'photos': []
    }]
};

module.exports =
{
  sampleReviews71697,
  sampleReviews71698
};