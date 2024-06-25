import React from 'react';
import { HiOutlineRefresh, HiOutlineHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styles from './RefreshHome.module.css'

const Refresh = () => {
  return (
    <>
      <HiOutlineRefresh className = {styles.refresh} onClick = {() => window.location.reload()} />
    </>
  );
}

const Home = () => {
  const navigate = useNavigate();
  
  const deleteLocalStorage = async()=>{
    localStorage.removeItem("requestData");
  }

  return (
    <>
      <HiOutlineHome className = {styles.home} onClick = {() => {deleteLocalStorage(); navigate('/');}} />
    </>
  );
}

export { Refresh, Home };
