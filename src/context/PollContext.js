import { createContext, useState } from 'react';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
  // Construct poll data
  const [poll, setPoll] = useState([
    {
      question: 'JavaScript or Python?',
      answerA: 'JavaScript',
      answerB: 'Python',
      voteA: 15,
      voteB: 12,
      id: 1,
    },
    {
      question: 'What is your favorite Front-End framework?',
      answerA: 'React',
      answerB: 'Angular',
      voteA: 22,
      voteB: 17,
      id: 2,
    },
  ]);

  return (
    <PollContext.Provider value={{ poll }}>{children}</PollContext.Provider>
  );
};

export default PollContext;
