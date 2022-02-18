import React, { useContext } from 'react';
import Context from '../context/context';
import FormsCard from './formsCard';

function cardList() {
  const { allFeed } = useContext(Context);

  return (
    allFeed.map((allFe) => (
      <div>
        <FormsCard
          name={allFe[0]}
          message={allFe[1]}
          image={allFe[2]}
        />
      </div>
    ))
  );
}

export default cardList;
