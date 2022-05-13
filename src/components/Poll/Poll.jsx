import './Poll.scss';
import Button from '../shared/Button/Button';

function Poll({ poll, onVote, onDelete }) {
  let { id, answerA, answerB, voteA, voteB } = poll;
  const total = voteA + voteB;
  const widthA = (voteA / total) * 100;
  const widthB = (voteB / total) * 100;

  const handleVote = (option) => {
    onVote(id, option);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='poll-list-item'>
      <h3>{poll.question}</h3>
      <small>Total votes: {total}</small>
      <div className='answer' onClick={() => handleVote('voteA')}>
        <span>
          {answerA} ({voteA})
        </span>
        <div
          className='percent percent-a'
          style={{ width: `${widthA}%` }}
        ></div>
      </div>
      <div className='answer' onClick={() => handleVote('voteB')}>
        <span>
          {answerB} ({voteB})
        </span>
        <div
          className='percent percent-b'
          style={{ width: `${widthB}%` }}
        ></div>
      </div>
      <span onClick={handleDelete}>
        <Button>Delete</Button>
      </span>
    </div>
  );
}

export default Poll;
