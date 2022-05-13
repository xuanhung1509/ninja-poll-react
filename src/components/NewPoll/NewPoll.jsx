import './NewPoll.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Button from '../shared/Button/Button';

function NewPoll({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    question: '',
    answerA: '',
    answerB: '',
    voteA: 0,
    voteB: 0,
  });
  const [error, setError] = useState({
    question: '',
    answerA: '',
    answerB: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { question, answerA, answerB } = formData;

    if (
      question.trim().length < 5 ||
      answerA.trim().length < 1 ||
      answerB.trim().length < 1
    )
      return;

    if (error.question !== '' && error.answerA !== '' && error.answerB !== '')
      return;

    onSubmit(formData);
    setFormData({
      id: uuidv4(),
      question: '',
      answerA: '',
      answerB: '',
      voteA: 0,
      voteB: 0,
    });
    toast.success('Poll successfully created!');
  };

  const validateInput = (e) => {
    const { id, value } = e.target;

    if (id === 'question') {
      if (value.trim().length < 5) {
        setError((prevState) => ({
          ...prevState,
          question: 'Question must be at least 5 characters.',
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          question: '',
        }));
      }
    }

    if (id === 'answerA') {
      if (value.trim().length < 1) {
        setError((prevState) => ({
          ...prevState,
          answerA: 'This field is required.',
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          answerA: '',
        }));
      }
    }

    if (id === 'answerB') {
      if (value.trim().length < 1) {
        setError((prevState) => ({
          ...prevState,
          answerB: 'This field is required.',
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          answerB: '',
        }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='question'>Question</label>
        <input
          type='text'
          id='question'
          value={formData.question}
          onChange={handleChange}
          onBlur={validateInput}
        />
        <small className='error'>{error.question}</small>
      </div>
      <div className='input-group'>
        <label htmlFor='answerA'>Answer A</label>
        <input
          type='text'
          id='answerA'
          value={formData.answerA}
          onChange={handleChange}
          onBlur={validateInput}
        />
        <small className='error'>{error.answerA}</small>
      </div>
      <div className='input-group'>
        <label htmlFor='answerB'>Answer B</label>
        <input
          type='text'
          id='answerB'
          value={formData.answerB}
          onChange={handleChange}
          onBlur={validateInput}
        />
        <small className='error'>{error.answerB}</small>
      </div>
      <Button type='submit' variant='secondary'>
        Submit
      </Button>
    </form>
  );
}

export default NewPoll;
