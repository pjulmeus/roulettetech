import { React } from "react";
import './App.css';
import Image from 'react-bootstrap/Image';
import nbaLogo from './img/nba-6.svg'

function Header() {
  return (
    <>
    <div className="titleFormat">
    <Image src={nbaLogo} className="nbaImg" rounded thumbnail /> 
    <h1> NBA TEAM AND ATHLETE SEARCH </h1>
    </div>
    </>
  );
}

export default Header;