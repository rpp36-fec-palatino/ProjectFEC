
/***
 * example review data: GET from
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort="relevant"&product_id=71697
*/
let sampleReviews =
{'product': '71697',
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
      'photos': []}]
};

module.exports = sampleReviews;