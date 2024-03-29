import { useState, useEffect } from 'react';

export default function Counter(props) {
    const [count, setCount ] = useState(props.defaultStart ?? 0)

  

  // useEffect(() => {
  //   setTimeout(() => {
  //   setCount(count + 1)
  // }, 1000)
  // }, [count])

    let name = props['name'] ?? "Default Counter"

    console.log('componenet running')
  
    function increment(incrementer) {
      setCount(count + incrementer)
      // count++
    }
  
    return (
      <div className="Counter">
        <h2>{ name }</h2>
        Count: { count }
        <button onClick={ () => increment(1) }>Increment</button>
        <button onClick={ () => increment(2) }>Increment by 2</button>
        { 
          (count > 0) ? 
          // Output if condition is met
        <button onClick={ () => increment(-1) }>Decrement</button> :
        // Output if condition is not met
        <></>
  }
  {
          (count > 1) ?
        <button onClick={ () => increment(-2) }>Decrement by 2</button> :
        <></>
  
        }
      </div>
    );
  }
