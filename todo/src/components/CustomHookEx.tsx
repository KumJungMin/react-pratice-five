import {useInput} from '../hooks/useInput';

function displayMessage(message: string) {
  alert(message);
}


function CustomHookEx() {
  const {value, handleChange, handleSubmit} = useInput({value: '안녕', submitAction: displayMessage});
  
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