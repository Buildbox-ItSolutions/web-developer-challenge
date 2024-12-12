import React, { useContext } from 'react';
import Context from '../context/context';
import FormsCard from './formsCard';
import { DivFeedAll } from '../style/feedStyle';

function cardList() {
  const { allFeed } = useContext(Context);

  return (
    allFeed.map((allFe) => (
      <DivFeedAll>
        <FormsCard
          name={allFe[0]}
          message={allFe[1]}
          image={allFe[2]}
        />
      </DivFeedAll>
    ))
  );
}

export default cardList;
