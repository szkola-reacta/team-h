import React from 'react';
import {
    Link
  } from 'react-router-dom';

function Day({ name }) {
  return (
    <div>
        <h2><Link to="/week/day">{name}</Link></h2>
        <div>
            <h3>Sniadanie</h3>
            <ul>
              <li>jajecznica</li>  
            </ul>

            <h3>Obiad</h3>
            <ul>
              <li>jajecznica</li>  
            </ul>

            <h3>Kolacja</h3>
            <ul>
              <li>jajecznica</li>  
            </ul>
        </div>
    </div>
  );
}

export default Day;