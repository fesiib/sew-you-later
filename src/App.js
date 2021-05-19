// import logo from './logo.svg';
// import './App.css';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './reducers/counter';

import Navbar from './components/Navbar'

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
    <div>
      <Navbar />
      <div>
        <div><h1>This is H1. Most probably one line.</h1></div>

        <div>
          <button onClick={moveToSignin} className="red">move to sign in</button>
          <button onClick={moveToSignin} className="green">same but green</button>
        </div>

        <form>
          <label>
            Name:
          <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <br />

        {cnt}

        <div onClick={_increaseCounter}> +1 </div>
        <div onClick={_decreaseCounter}> -1 </div>

        <img className="w-36 h-36 thumbnail" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="example image"/>
        
        <div className="relative inline-block"> {/* Image box with over text */}
          <img className="w-36 h-36 filter brightness-50 thumbnail" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="example image"/>
          <h3 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1+</h3>
        </div> 

      </div>
    </div>
  );
}

export default App;
