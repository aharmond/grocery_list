import React from 'react';
import Cart from './Cart';

const List = ({ groceries, name, groceryClick, emptyClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { groceries.map( grocery => <Cart key={grocery.id} {...grocery} groceryClick={groceryClick} /> )}
    </ul>
    <button onClick={ () => emptyClick(groceries)}>Empty</button>
  </div>
)

export default List;