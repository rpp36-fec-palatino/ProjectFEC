import { rest } from 'msw';
import {sampleReviews71698, sampleMetaReview71698, emptyReviewsData, emptyReviewsMetaData} from '../../../../../../sampleData/sampleReviewData.js';


export const handlers = [

  rest.get('/reviews', (req, res, ctx) => {
    return res(
      ctx.json(sampleReviews71698)
    );
  }),
  rest.get('/products/:id/reviews/meta', (req, res, ctx) => {
    if (req.params.id === '71698') {
      return res(
        ctx.json(sampleMetaReview71698)
      );

    } else {
      return res(
        ctx.json(emptyReviewsMetaData)
      );
    }

  }),
  rest.put('/reviews/:review_id/helpful', (req, res, ctx) => {
    return res(
      ctx.status(201).json('Voted helpful!')
    );
  }),

  rest.post('/interactions', (req, res, ctx) => {
    return res(
      ctx.status(201).json('Created')
    );
  }),

  // rest.post('/reviews', (req, res, ctx) => {
  //   return res(
  //     ctx.status(201).json('Posted')
  //   );
  // }),

  // rest.post('/upload/images', (req, res, ctx) => {
  //   return res(
  //     ctx.status(201).json('https://i.ibb.co/gtFcyWv/98af460dec39.jpg')
  //   );
  // }),


];