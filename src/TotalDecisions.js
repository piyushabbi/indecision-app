import React from 'react';

/**
 * TotalDecisions Component
 * This will render the total number of decisions for the user.
 * @param {Obj} props 
 */
export const TotalDecisons = (props) => (
  <h3>
    You have <b>{ props.total }</b> {(props.total === 1 || props.total === 0) ? 'decision' : 'decisions'} to be taken.
  </h3>
);
