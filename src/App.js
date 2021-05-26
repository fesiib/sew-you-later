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
import SizeBar from './components/SizeBar';
import ImageSearchTopBar from './components/ImageSearchTopBar';
import DiscussionSearchPage from './pages/DiscussionSearchPage';
import NewOrdersPage from './pages/NewOrdersPage';
import ReportBrief from './components/ReportBrief';
import ImageNotes from './components/ImageNotes';
import ReportMessage from './components/ReportMessage';
import ReportImages from './components/ReportImages';
import Sidebar from './components/Sidebar';
import FAQButton from './components/FAQButton';
import OrderDetails from './components/OrderDetails';
import OrderProgress from './components/OrderProgress';
import OrderNextStep from './components/OrderNextStep';
import MeasurementMessage from './components/MeasurementMessage';
import MeasurementTags from './components/MeasurementTags';
import MeasurementBody from './components/MeasurementBody';
import CurrentOrderspage from './pages/CurrentOrdersPage';
import ConfirmCard from './components/ConfirmCard';
import { Redirect } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {

  return (<Redirect to={"/new-orders"}/>);
  
}

export default App;
