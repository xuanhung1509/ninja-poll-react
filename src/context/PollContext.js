import { createContext, useState } from 'react';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
  // Construct polls data
  const [polls, setPolls] = useState([
    {
      question: 'JavaScript or Python?',
      answerA: 'JavaScript',
      answerB: 'Python',
      voteA: 15,
      voteB: 12,
      id: 1,
    },
    {
      question: 'Your favorite framework?',
      answerA: 'React',
      answerB: 'Angular',
      voteA: 22,
      voteB: 17,
      id: 2,
    },
  ]);

  return (
    <PollContext.Provider value={{ polls }}>{children}</PollContext.Provider>
  );
};

export default PollContext;
