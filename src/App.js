import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './chat';
import { useContext } from 'react';
import { AuthContext } from './context/context';
import { BrowserRouter } from 'react-router-dom';
function App() {

  // CALL THE USECONTEXT HOOK AND PASS AUTHCONTEXT FROM CONTEXT.JS STORE AS A PARAMETER TO CHECK FOR USER STATUS
  const {currentUser} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={currentUser ? <Chat /> : <Login />}
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
