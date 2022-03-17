import { useContext } from 'react';
import PollItem from './PollItem';
import PollContext from '../context/PollContext';

function PollList() {
  const { polls } = useContext(PollContext);

  return (
    <ul className='poll-list'>
      {polls.map((item) => {
        return (
          <li key={item.id}>
            <PollItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default PollList;
