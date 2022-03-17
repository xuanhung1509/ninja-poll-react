import { useState, useContext } from 'react';
import Button from './shared/Button';
import PollContext from '../context/PollContext';

function CreatePollForm({ handleAddPoll }) {
  const { polls } = useContext(PollContext);

  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');

  const [questionError, setQuestionError] = useState('');
  const [answerError, setAnswerError] = useState('');

  let valid = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate question
    if (question.trim().length < 5) {
      valid = false;
      setQuestionError('Question must be at least 5 characters.');
    } else {
      setQuestionError('');
    }

    // Validate answer a
    if (answerA.trim().length < 1) {
      valid = false;
      setAnswerError('This field is required.');
    } else {
      setAnswerError('');
    }

    // Validate answer b
    if (answerB.trim().length < 1) {
      valid = false;
      setAnswerError('This field is required.');
    } else {
      setAnswerError('');
    }

    // Create new poll (if valid)
    if (valid) {
      const newPoll = {
        question,
        answerA,
        answerB,
        voteA: 0,
        voteB: 0,
        id: Math.random(),
      };

      polls.push(newPoll);

      handleAddPoll();
    }

    // Clear inputs
    setQuestion('');
    setAnswerA('');
    setAnswerB('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='question'>Question: </label>
        <input
          type='text'
          id='question'
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <small className='error'>{questionError}</small>
      </div>
      <div className='form-group'>
        <label htmlFor='answer-a'>Answer A: </label>
        <input
          type='text'
          id='answer-a'
          value={answerA}
          onChange={(e) => {
            setAnswerA(e.target.value);
          }}
        />
        <small className='error'>{answerError}</small>
      </div>
      <div className='form-group'>
        <label htmlFor='answer-b'>Answer B: </label>
        <input
          type='text'
          id='answer-b'
          value={answerB}
          onChange={(e) => {
            setAnswerB(e.target.value);
          }}
        />
        <small className='error'>{answerError}</small>
      </div>
      <Button type='submit' version='secondary'>
        Submit
      </Button>
    </form>
  );
}

export default CreatePollForm;
