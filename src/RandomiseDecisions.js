import React from 'React';
/**
 * RandomiseDecisions Component
 * This button will randomly select the decisions for the user.
 * @returns {JSX}
 */
export const RandomiseDecisions = props => {
  return <button onClick={props.randomClickHandler}>Randomise!</button>;
};
