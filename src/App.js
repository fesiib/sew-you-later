import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increaseCounter, decreaseCounter } from './reducers/counter';

function App() {
  const dispatch = useDispatch();

  const cnt = useSelector(state => state.counter.cnt);
  
  const _increaseCounter = () => {
    dispatch(increaseCounter());
  };

  const _decreaseCounter = () => {
    dispatch(decreaseCounter());
  };

  const moveToSignin = () => {
    console.log("here");
    window.location = "/signin";
  };

  return (
    <div className="App">
      <div>HELLO</div>
      
      <button onClick={moveToSignin} class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> move to signin </button>
      
      <br/>
      
      {cnt}
      
      <div onClick={_increaseCounter}> +1 </div>
      <div onClick={_decreaseCounter}> -1 </div>
      
    </div>
  );
}

export default App;
