import {loginUser} from '../utils/API';
import {useState, useEffect} from 'react';
import {useOutletContext, useNavigate} from 'react-router-dom';

const Login =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useOutletContext();
    console.log(setToken);
    const navigate = useNavigate();

    useEffect(() => {
      if(token){
          navigate('/Posts');
      }
    }, [token, navigate])

    async function submitLogin(e){
      e.preventDefault();
      if (!username || !password){
          setErrorMessage("Incorrect username/password");
      }
      else{
          setErrorMessage("");
          const user = {
              user: {
                  username,   //same as username; username
                  password    //same as password; password
              }
          }
        const response = await loginUser(user); 
        if(response.error){
            setErrorMessage(response.error.message);
        }
        else{
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            console.log(response.data.token);
        }
    }
}
    return(
        <section>
        <h1>Login Page</h1>
        <form onSubmit={submitLogin}>
            <label>Username</label>
            <input
                type="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input 
                type= "password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>     
            <p>{errorMessage}</p>
        </form>
    </section>
    );
}
export default Login;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const Login = ({ setAuthToken, BASE_URL }) => {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [loginResponse, setLoginResponse] = useState('');

//     const handleUsername = (e) => {
//         setUsername(e.target.value);
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//     }

//     const handleSubmit= async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${BASE_URL}users/login`, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     user: {
//                         username: username,
//                         password: password
//                     }
//                 })
//             })
//             const json = await response.json()
//             const data = await json.data
//             if(json.success) {
//                 setAuthToken(data.token)
//                 window.localStorage.setItem('st-token', data.token)
//                 setLoginResponse(data.message)
//                 navigate('/profile')
//             } else {
//                 setLoginResponse(json.error.message);
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//     }

//     return (
//       <div>
//         <div className='content'>
//             <h2>Login</h2>

//             <Box
//                 component="form"
//                 sx={{
//                     '& .MuiTextField-root': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//                 className='reg-form'
//                 onSubmit={handleSubmit}
//             >            
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     className='reg-form-elem'
//                     value={username}
//                     onChange={handleUsername}
//                 />
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Password"
//                     className='reg-form-elem'
//                     value={password}
//                     onChange={handlePassword}
//                 />
//                 <Button className='reg-form-elem' type='submit' variant="contained" >Log in</Button>
//                 <h4>{loginResponse ? loginResponse : ''}</h4>
//             </Box>
//         </div>
//       </div>
//     );
//   }
  
// export default Login;