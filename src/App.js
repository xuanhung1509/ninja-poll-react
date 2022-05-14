import { useContext } from 'react';
import PollContext from './context/PollContext';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CurrentPolls from './components/CurrentPolls/CurrentPolls';
import NewPoll from './components/NewPoll/NewPoll';
import { ToastContainer } from 'react-toastify';

function App() {
  const { tabs, activeTab, handleClick } = useContext(PollContext);

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
            {activeTab === 'Current Polls' ? <CurrentPolls /> : <NewPoll />}
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
