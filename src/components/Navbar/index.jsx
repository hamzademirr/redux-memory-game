import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Selectscore, suffled } from '../../redux/memoryCardSlice';
import './style.scss';

function Navbar() {
  const score = useSelector(Selectscore);
  const dispatch = useDispatch();
  return (
    <navbar>
      <div className='navbar-container'>
        <h1>Memory Game</h1>
        <h3>Score: {score}</h3>
        <button onClick={() => dispatch(suffled())}>Restart</button>
      </div>
    </navbar>
  )
}

export default Navbar
