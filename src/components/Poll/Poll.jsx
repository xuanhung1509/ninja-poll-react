import './Poll.scss';
import { useContext } from 'react';
import PollContext from '../../context/PollContext';
import Button from '../shared/Button/Button';

function Poll({ poll }) {
  const { handleVote, handleDelete } = useContext(PollContext);
  let { id, answerA, answerB, voteA, voteB } = poll;
  const total = voteA + voteB;
  const widthA = (voteA / total) * 100;
  const widthB = (voteB / total) * 100;

  return (
    <div className='poll-list-item'>
      <h3>{poll.question}</h3>
      <small>Total votes: {total}</small>
      <div className='answer' onClick={() => handleVote(id, 'voteA')}>
        <span>
          {answerA} ({voteA})
        </span>
        <div
          className='percent percent-a'
          style={{ width: `${widthA}%` }}
        ></div>
      </div>
      <div className='answer' onClick={() => handleVote(id, 'voteB')}>
        <span>
          {answerB} ({voteB})
        </span>
        <div
          className='percent percent-b'
          style={{ width: `${widthB}%` }}
        ></div>
      </div>
      <span onClick={() => handleDelete(id)}>
        <Button>Delete</Button>
      </span>
    </div>
  );
}

export default Poll;
