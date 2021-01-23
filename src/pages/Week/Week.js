import React from 'react';
import Day from './Day';

function Week() {
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  return (
    <div>
        <h1>Week schedule</h1>
        <div>
            {days.map(day => <Day name={day}/>)}
        </div>
    </div>
  );
}

export default Week;