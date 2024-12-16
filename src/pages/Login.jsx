import React from 'react'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export const Login = () => {

  const navigate = useNavigate()
  
  const login = () => {
    localStorage.setItem("isUserLogged", true)
    navigate("/")
  };

  return (
    <>
    You're not online. <Button onClick={login}>Login</Button>
    </>
  )
}
