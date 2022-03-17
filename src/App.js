import { useState } from 'react';
import Tabs from './components/shared/Tabs';
import Header from './components/Header';
import PollList from './components/PollList';
import CreatePollForm from './components/CreatePollForm';
import { PollProvider } from './context/PollContext';

function App() {
  const items = ['Current Polls', 'Add Poll'];
  const [activeItem, setActiveItem] = useState('Current Polls');
  const handleTabChange = (item) => {
    setActiveItem(item);
  };

  // Switch back to Current Polls after add poll
  const handleAddPoll = () => {
    setActiveItem('Current Polls');
  };

  return (
    <PollProvider>
      <Header />
      <div className='container'>
        <Tabs
          items={items}
          activeItem={activeItem}
          handleTabChange={handleTabChange}
        />
        {activeItem === 'Current Polls' && <PollList />}
        {activeItem === 'Add Poll' && (
          <CreatePollForm handleAddPoll={handleAddPoll} />
        )}
      </div>
    </PollProvider>
  );
}

export default App;
