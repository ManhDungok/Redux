import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './action/actions';
import { useSelector, useDispatch } from 'react-redux';

import Home from './components/Home';

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter1.count
  });

  //event handle
  const handleIncrease = () => {
    dispatch(increaseCounter())
  }



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and {props.abc}</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

//hàm này lấy ra dc gtri của redux store
// const mapStateToProps = state => {
//   return {
//     //đây là state của redux
//     count: state.counter123.count,
//     abc: state.counter123.name,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;