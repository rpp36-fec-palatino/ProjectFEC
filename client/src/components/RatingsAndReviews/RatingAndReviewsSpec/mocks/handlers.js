import { rest } from 'msw';
import {sampleReviews71698, sampleMetaReview71698} from '../../../../../../sampleData/sampleReviewData.js';


export const handlers = [

  rest.get('/reviews', (req, res, ctx) => {
    return res(
      ctx.json(sampleReviews71698)
    )
  }),
  rest.get('/products/:id/reviews/meta', (req, res, ctx) => {
    return res(
      ctx.json(sampleMetaReview71698)
    )
  }),
  rest.put('/reviews/:review_id/helpful', (req, res, ctx) => {
    return res(
      ctx.json('Voted helpful!')
    )
  })



]