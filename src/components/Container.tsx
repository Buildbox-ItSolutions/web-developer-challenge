import { Feed } from './Feed'
import React, { useState,useEffect } from 'react';

export function Container(props) {

  const {feeds} = props

      return (
  <div>
           {
            feeds.map( feed => (
              <Feed nome={feed.nome} msg={feed.msg}/>
            ) )
            
           }
  </div>
       
      )
  } 
   
  