import {useState, useEffect} from 'react';
import {useOutletContext} from "react-router-dom";
import {myProfile} from '../utils/API';
import { useNavigate } from 'react-router-dom';

const Profile =(token) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
        navigate('/Login');
    }
  }, [token, navigate])

}

export default Profile;