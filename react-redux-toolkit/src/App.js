import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./redux/slices/counterSlice";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  const listUsers = useSelector(state => state.user.listUsers);
  const isLoading = useSelector(state => state.user.isLoading);
  const isError = useSelector(state => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  if (isError === true && isLoading === false) {
    return (
      <div>Something wrongs</div>
    )
  }

  if (isError === false && isLoading === true) {
    return (
      <div>Loading data ...</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React Dao Manh Dung</h1>
        <div className='btn-action'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div> Count = {count}</div> */}
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr key={`table-redux-${index}`}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>

        </div>
      </header>
    </div>
  );
}

export default App;
