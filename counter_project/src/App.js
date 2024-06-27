import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  const handleSubmitValue = () => {
    if (count <= 19) {
      count = setCount(count + 1);
      console.log("clicked")
    } else if (count > 19) {
      alert("Your Limit is Exceed...!");
    }
  }
  const handleSubmitRemove = () => {
    if (count > 0) {
      count = setCount(count - 1)
    }
  }
  return (
    <>
      <div className='container p-5'>
        <div class="alert alert-primary" role="alert">
          You Can Count Number Between 01 to 20
        </div>
        <h2>Counter Value: {count}</h2>
        <button onClick={handleSubmitValue} className='btn btn-primary m-2 '>Add Value</button>
        <button onClick={handleSubmitRemove} className='btn btn-danger m-2'>Remove Value</button>
      </div>
    </>
  );
}

export default App;
