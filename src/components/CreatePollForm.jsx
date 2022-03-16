import Button from './shared/Button';

function CreatePollForm() {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='question'>Question: </label>
        <input type='text' id='question' />
      </div>
      <div className='form-group'>
        <label htmlFor='answer-a'>Answer A: </label>
        <input type='text' id='answer-a' />
      </div>
      <div className='form-group'>
        <label htmlFor='answer-b'>Answer B: </label>
        <input type='text' id='answer-b' />
      </div>
      <Button>Submit</Button>
    </form>
  );
}

export default CreatePollForm;
