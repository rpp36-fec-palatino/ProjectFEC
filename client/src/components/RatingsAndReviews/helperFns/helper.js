//helper function to calculate average rating scores for star rating display;
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

  return Number((accumScores / totalCount).toFixed(1)); //result round to 2 decimals


};



module.exports = {
  avgStarScores

};