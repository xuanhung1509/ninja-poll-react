import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
  const tabs = ['Current Polls', 'New Poll'];
  const [activeTab, setActiveTab] = useState('Current Polls');
  const [polls, setPolls] = useState([
    {
      id: 0,
      question: 'JavaScript or Python?',
      answerA: 'JavaScript',
      answerB: 'Python',
      voteA: 15,
      voteB: 7,
    },
  ]);

  const handleClick = (e) => {
    setActiveTab(e.target.textContent);
  };

  const addPoll = (formData) => {
    setPolls((prevState) => [...prevState, formData]);
    setActiveTab('Current Polls');
  };

  const handleVote = (id, option) => {
    let pollsCopy = [...polls];
    const targetIndex = pollsCopy.findIndex((poll) => poll.id === id);
    option === 'voteA'
      ? pollsCopy[targetIndex].voteA++
      : pollsCopy[targetIndex].voteB++;
    setPolls(pollsCopy);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      let pollsCopy = [...polls];
      pollsCopy = pollsCopy.filter((poll) => poll.id !== id);
      setPolls(pollsCopy);
      toast.success('Poll successfully removed!');
    }
  };

  return (
    <PollContext.Provider
      value={{
        tabs,
        activeTab,
        polls,
        handleClick,
        addPoll,
        handleVote,
        handleDelete,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};

export default PollContext;
