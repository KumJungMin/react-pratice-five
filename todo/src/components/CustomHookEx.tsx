import {useInput} from '../hooks/useInput';


function CustomHookEx() {
  const {value, handleChange, reset} = useInput('안녕');
  const {value: value2, handleChange: handleChange2, reset: reset2} = useInput('안녕2');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submitted');
    reset();
    reset2();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <input value={value2} onChange={handleChange2} />
        
        <button type="submit">Submit</button>
      </form>
      <p>{value}</p>
    </div>
  )

}

export default CustomHookEx;