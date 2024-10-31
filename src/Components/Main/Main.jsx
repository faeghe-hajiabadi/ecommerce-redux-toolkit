import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import React from 'react'
import NavigateButtons from '../NavigateButtons/NavigateButtons';

function Main() {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigateButtons></NavigateButtons>
    </div>
  )
}

export default Main