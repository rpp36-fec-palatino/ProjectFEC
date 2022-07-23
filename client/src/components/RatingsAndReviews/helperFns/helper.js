//avgStarScores function is to calculate average rating scores for star rating display;
/**
 * 'ratings': { '2': '1', '3': '2', '4': '2', '5': '6' },
 *
 *
*/

let avgStarScores = (ratingsObj) => {

  if (Object.keys(ratingsObj).length === 0) {
    return Number((0.0).toFixed(1));
  } else {
    let numberArr = Object.values(ratingsObj).map(ele => Number(ele));
    let totalCount = numberArr.reduce((a, b) => a + b );
    let accumScores = 0;
    for (let key in ratingsObj) {
      accumScores += Number(key) * Number(ratingsObj[key]);

    }

    return Number((accumScores / totalCount).toFixed(1)); //result round to 1 decimals

  }



};


/**
 * ratingPercent is to calculate the percentage of each different star rating
 * input: ratingObj
 * expected output will be like:
 * {'5': percentage5, '4': percentage4, '3':percentage3, '2':percentage2, '1': percentage1}
 * .percentage5 + percentage4 + percentage3 + percentage2 + percentage1 = 100;
 * e.g:
 * ratingsObj = { '2': '1', '3': '2', '4': '2', '5': '6' };
 * ratingPercent(ratingsObj) will return:
 * { '1': 0, '2': 9, '3': 18, '4': 18, '5': 55 }
 *
*/

let ratingPercentage = (ratingsObj) => {

  let result = {'5': 0, '4': 0, '3': 0, '2': 0, '1': 0}; //initial setting
  if (Object.keys(ratingsObj).length === 0) {

    return result;

  } else {
    let numberArr = Object.values(ratingsObj).map(ele => Number(ele));
    let totalCount = numberArr.reduce((a, b) => a + b );
    for (let key in ratingsObj) {
      result[key] = Math.round((Number(ratingsObj[key]) / totalCount).toFixed(2) * 100);

    }
    return result;
  }




};

/****
 * recommendationRate helper function will calculate the recommendation percentage
 * data format: e. g. {false: "1", true: "15"}
 *
*/

let recommendationRate = (recommendObj) => {

  if (Object.keys(recommendObj).length === 0) {
    return 0;

  }
  let recommended = Number(recommendObj['true']) || 0;
  let notRecommend = Number(recommendObj['false']) || 0;
  let recommendRate = Math.round((recommended / (recommended + notRecommend)) * 100);
  return recommendRate;

};



module.exports = {
  avgStarScores,
  ratingPercentage,
  recommendationRate

};