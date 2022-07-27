import React, {useState, useEffect} from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';
import style from './styles/AnswerPhoto.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

const Answer = (props) => {
  var photos = props.answer.photos;
  var answerDate = new Date(props.answer.date)
    .toLocaleDateString({}, {timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric'});
  const helpfulUrl = '/qa/answers/' + props.answer.id + '/helpful';
  const reportUrl = '/qa/answers/' + props.answer.id + '/report';
  const [reportVote, setReportVote] = useState('Report');
  const [helpfulVote, setHelpfulVote] = useState(false);
  const [helpfulNumber, setHelpfulNumber] = useState(props.answer.helpfulness);

  if (props.answer.answerer_name === 'Seller') {
    return (
      <div className='answer' id="answer">
        <p>A: {props.answer.body}</p>
        <div className={style.row}>
          {photos.map((item, index) => {
            return (
              <AnswerPhoto key={index} link={item}/>
            );
          })}
        </div>
        <p>by <b>{props.answer.answerer_name}</b>, {answerDate}  | Helpful? <a href="#0" onClick={() => { if (!helpfulVote) { props.helpful(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a>({helpfulNumber})
        | <a href="#0" id="answerReportButton" onClick={() => { if (reportVote === 'Report') { props.helpful(reportUrl); setReportVote('Reported'); } }}>{reportVote}</a></p>
      </div>
    );
  }
  return (
    <div className='answer' id="answer">
      <p>A: {props.answer.body}</p>
      <div className={style.row}>
        {photos.map((item, index) => {
          return (
            <AnswerPhoto key={index} link={item}/>
          );
        })}
      </div>
      <p>by {props.answer.answerer_name}, {answerDate}  | Helpful? <a href="#0" onClick={() => { if (!helpfulVote) { props.helpful(helpfulUrl); setHelpfulNumber(helpfulNumber + 1); setHelpfulVote(current => !current); } }}>Yes</a>({helpfulNumber})
      | <a href="#0" id="answerReportButton" onClick={() => { if (reportVote === 'Report') { props.helpful(reportUrl); setReportVote('Reported'); } }}>{reportVote}</a></p>
    </div>
  );
};

export default Answer;