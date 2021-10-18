import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../Widgets/header';
import SideMenu from '../Widgets/sideMenu';
import './App.css';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <><SideMenu />
    <div className = {classes.appMain}> 
    <Header/>
    </div>
    
    </>
  );
}

export default App;
