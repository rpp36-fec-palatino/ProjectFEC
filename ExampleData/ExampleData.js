/**
 * example data get from
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products
 * **/

let exampleData1 =
[{"id":71697,"campus":"hr-rpp","name":"Camo Onesie","slogan":"Blend in to your crowd","description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","category":"Jackets","default_price":"140.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"},{"id":71698,"campus":"hr-rpp","name":"Bright Future Sunglasses","slogan":"You've got to wear shades","description":"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.","category":"Accessories","default_price":"69.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"},{"id":71699,"campus":"hr-rpp","name":"Morning Joggers","slogan":"Make yourself a morning person","description":"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.","category":"Pants","default_price":"40.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"},{"id":71700,"campus":"hr-rpp","name":"Slacker's Slacks","slogan":"Comfortable for everything, or nothing","description":"I'll tell you how great they are after I nap for a bit.","category":"Pants","default_price":"65.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"},{"id":71701,"campus":"hr-rpp","name":"Heir Force Ones","slogan":"A sneaker dynasty","description":"Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl","category":"Kicks","default_price":"99.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"}];



/** single product data
 * example data get from
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71697
 * **/

let exampleData2 =
  { "id": 71697, "campus": "hr-rpp", "name": "Camo Onesie", "slogan": "Blend in to your crowd", "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.", "category": "Jackets", "default_price": "140.00", "created_at": "2022-05-11T19:38:15.373Z", "updated_at": "2022-05-11T19:38:15.373Z", "features": [{ "feature": "Fabric", "value": "Canvas" }, { "feature": "Buttons", "value": "Brass" }] }

/***
 * example review data:
 * https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?sort="relevant"&product_id=71697
*/
let exampleReviews =
{"product":"71697",
"page":0,
"count":5,
"results":[
  {
    "review_id": 1275188,
    "rating": 5,
    "summary": "love it",
    "recommend": true,
    "response": null,
    "body": "- If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review",
    "date": "2022-06-07T00:00:00.000Z",
    "reviewer_name": "test",
    "helpfulness": 72,
    "photos": []
  },
  {
    "review_id": 1275236,
    "rating": 4, "summary": "Good quality",
    "recommend": true, "response": null,
    "body": "the quality is good, might need some more colors, great",
    "date": "2022-06-09T00:00:00.000Z",
    "reviewer_name": "ssss", "helpfulness": 12,
    "photos": []
  },
  {
    "review_id": 1275244,
    "rating": 3, "summary": "",
    "recommend": true,
    "response": null,
    "body": "sad;flkjsad;lfkjas;dlkfja;slkdjf;aslkdjf;lkasjdf;lkajsdff;lk",
    "date": "2022-06-10T00:00:00.000Z",
    "reviewer_name": "asdf",
    "helpfulness": 9,
    "photos": []
  },

  {
    "review_id": 1275253,
    "rating": 5,
    "summary": "really like it ",
    "recommend": true,
    "response": null,
    "body": "really like it really like it really like it really like it ",
    "date": "2022-06-11T00:00:00.000Z",
    "reviewer_name": "test",
    "helpfulness": 3,
    "photos": []
  },
    {
      "review_id": 1275260,
      "rating": 5,
      "summary": "dgs",
      "recommend": true,
      "response": null,
      "body": "sjsjkgskjhslvhslhsljhsjkvhsjvhsljvhsljvhsjkvhsjvhvfv",
      "date": "2022-06-13T00:00:00.000Z",
      "reviewer_name": "test",
      "helpfulness":1,
      "photos": []}]
}