import Card from './shared/Card';

function PollItem({ item }) {
  const totalVotes = item.voteA + item.voteB;
  return (
    <Card>
      <div className='poll-item'>
        <h3>{item.question}</h3>
        <small>Total Votes: {totalVotes}</small>
        <div className='answer answer-a'>
          <span className='percent percent-a'></span>
          <span className='vote-a'></span>
          {item.answerA}
        </div>
        <div className='answer answer-b'>
          <span className='percent percent-b'></span>
          <span className='vote-b'></span>
          {item.answerB}
        </div>
      </div>
    </Card>
  );
}

export default PollItem;
