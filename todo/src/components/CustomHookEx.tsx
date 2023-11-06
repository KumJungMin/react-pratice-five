import  { useState } from 'react';

function CustomHookEx() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submitted');
    setValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{value}</p>
    </div>
  )

}

export default CustomHookEx;