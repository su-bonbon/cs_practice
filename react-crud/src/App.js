import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h5>React CRUD operation using PHP API and mySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List User</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
