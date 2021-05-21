// import logo from './logo.svg';
// import './App.css';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './reducers/counter';

import Navbar from './components/Navbar';
import ImageWithText from './components/ImageWithText';
import NewOrderItem from './components/NewOrderItem';
import CurOrderItem from './components/CurOrderItem';
import ProgressBar from './components/ProgressBar';
import Notification from './components/Notification';
import SortBy from './components/SortBy';
import SearchBar from './components/SearchBar';

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
          <Notification position="bottom-right" size="h-6 w-6">
            <ImageWithText/>
          </Notification>
          <div className="m-4">
            <NewOrderItem/>
          </div>
        <div className="m-4">
          <CurOrderItem/>
        </div>
        <div className="m-4">
          <ProgressBar/>
        </div>
        <div className="flex justify-center">
          <SortBy options={["Received Date", "A-Z", "Due Date", "Customer", "Location"]}/>
        </div>
        <div className="flex justify-center m-4">
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
