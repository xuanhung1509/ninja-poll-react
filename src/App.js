import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CurrentPolls from './components/CurrentPolls/CurrentPolls';
import NewPoll from './components/NewPoll/NewPoll';

function App() {
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
  const tabs = ['Current Polls', 'New Poll'];
  const [activeTab, setActiveTab] = useState('Current Polls');

  const handleClick = (e) => {
    setActiveTab(e.target.textContent);
  };

  const handleSubmit = (formData) => {
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
    <>
      <Header />
      <main>
        <div className='container'>
          <ul className='tab-list'>
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`tab-list-item ${activeTab === tab && 'active'}`}
                onClick={handleClick}
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className='content'>
            {activeTab === 'Current Polls' ? (
              <CurrentPolls
                polls={polls}
                onVote={handleVote}
                onDelete={handleDelete}
              />
            ) : (
              <NewPoll onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
