// import logo from './logo.svg';
// import './App.css';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import {increaseCounter, decreaseCounter } from './reducers/counter';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
    <div style={{textAlign: "center"}}>
      <div><h1>HELLO</h1></div>
      
      <div>
        <button onClick={moveToSignin} className="red">move to sign in</button>
        <button onClick={moveToSignin} className="green">same but green</button>
      </div>
      
      
      <br/>
      
      {cnt}
      
      <div onClick={_increaseCounter}> +1 </div>
      <div onClick={_decreaseCounter}> -1 </div>
      
    </div>
  );
}

export default App;
