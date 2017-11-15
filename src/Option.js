import React from 'react';

export const OptionVal = (props) => (
  <li>
    <span>{ props.text }</span>
    &nbsp;
    <button onClick={(e)=>props.deleteHandler(props.text)}>Delete</button>
  </li>
);
