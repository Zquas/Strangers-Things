import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Logout, NewPost, Posts, Profile, Register } from './routes'
import Nav from './Nav'

function App() {
  const BASE_URL = 'https://strangers-things.herokuapp.com/api/emilymerritt/'
  const [authToken, setAuthToken] = useState(window.localStorage.getItem('st-token'));
  const [userID, setUserID] = useState(window.localStorage.getItem('st-user-id'));

  return (
    <div>
        <Nav authToken={authToken}/>
        <Routes>
          <Route index element={<Posts BASE_URL={BASE_URL} userID={userID} authToken={authToken} />} />
          <Route path="new-post" element={<NewPost authToken={authToken} BASE_URL={BASE_URL}/>} />
          <Route path="login" element={<Login authToken={authToken} setAuthToken={setAuthToken} BASE_URL={BASE_URL} />} />
          <Route path="logout" element={<Logout authToken={authToken} setAuthToken={setAuthToken} setUserID={setUserID} />}/>
          <Route path="profile" element={<Profile authToken={authToken} BASE_URL={BASE_URL} setUserID={setUserID} />} />
          <Route path="register" element={<Register authToken={authToken} setAuthToken={setAuthToken} BASE_URL={BASE_URL} />} />
      </Routes>
    </div>
  );
}

export default App;
