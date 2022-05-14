import './CurrentPolls.scss';
import { useContext } from 'react';
import Card from '../shared/Card/Card';
import Poll from '../Poll/Poll';
import PollContext from '../../context/PollContext';

function CurrentPolls() {
  const { polls } = useContext(PollContext);

  return (
    <div className='poll-list'>
      {polls.map((poll) => (
        <Card key={poll.id}>
          <Poll poll={poll} />
        </Card>
      ))}
    </div>
  );
}

export default CurrentPolls;
