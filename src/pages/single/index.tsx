import React from 'react'
import { useLocation } from 'react-router-dom';


export function Single() {
  const { state } = useLocation();
  console.log(state);
  
  return (
    <div>Single</div>
  )
}
