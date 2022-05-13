import './CurrentPolls.scss';
import Card from '../shared/Card/Card';
import Poll from '../Poll/Poll';

function CurrentPolls({ polls, onVote, onDelete }) {
  return (
    <div className='poll-list'>
      {polls.map((poll) => (
        <Card key={poll.id}>
          <Poll poll={poll} onVote={onVote} onDelete={onDelete} />
        </Card>
      ))}
    </div>
  );
}

export default CurrentPolls;
