//avgStarScores function is to calculate average rating scores for star rating display;
/**
 * 'ratings': { '2': '1', '3': '2', '4': '2', '5': '6' },
 *
 *
*/

let avgStarScores = (ratingsObj) => {
  let numberArr = Object.values(ratingsObj).map(ele => Number(ele));
  let totalCount = numberArr.reduce((a, b) => a + b );
  let accumScores = 0;
  for (let key in ratingsObj) {
    accumScores += Number(key) * Number(ratingsObj[key]);

  }

  return Number((accumScores / totalCount).toFixed(1)); //result round to 1 decimals


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

let ratingPercent = (rantingsObj) => {
  let result = {'5': 0, '4': 0, '3': 0, '2': 0, '1': 0}; //initial setting
  let numberArr = Object.values(ratingsObj).map(ele => Number(ele));
  let totalCount = numberArr.reduce((a, b) => a + b );
  for (let key in rantingsObj) {
    result[key] = Math.round((Number(rantingsObj[key]) / totalCount).toFixed(2) * 100);

  }
  return result;


};



module.exports = {
  avgStarScores,
  ratingPercent

};