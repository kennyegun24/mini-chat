import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './chat';
import { useContext } from 'react';
import { AuthContext } from './context/context';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const {currentUser} = useContext(AuthContext)

  // const Protected = ({children}) => {
  //   console.log(currentUser)
  //   if(!currentUser) {
  //     return <Navigate to='/login' />;
  //   }
  // }
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
