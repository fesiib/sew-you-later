// import logo from './logo.svg';
// import './App.css';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './reducers/counter';

import Navbar from './components/Navbar';
import ImageWithText from './components/ImageWithText';
import Sidebar from './components/Sidebar';
import FAQ from './components/FAQ';
import QandA from './components/QandA';

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
      <FAQ />
      <div className="w-32">
        <Sidebar />
      </div>
      <div className="ml-36 mt-8">
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

        <QandA />
        <div onClick={_increaseCounter}> +1 </div>
        <div onClick={_decreaseCounter}> -1 </div>

        <img className="w-36 h-36 thumbnail" src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt="example image" />

        <ImageWithText />

      </div>
    </div>
  );
}

export default App;
