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

  const moveToSingin = () => {
    console.log("here");
    window.location = "/signin";
  };

  return (
    <div className="App">
      HELLO  
      
      <div onClick = {moveToSingin}> move to signin </div>
      
      <br/>
      
      {cnt}
      
      <div onClick = {_increaseCounter}> +1 </div>
      <div onClick = {_decreaseCounter}> -1 </div>
      
    </div>
  );
}

export default App;
