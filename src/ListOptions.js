import React from 'react';

import { OptionVal } from "./Option.js";

export const ListOptions = (props) => (
  <ol>
    {
      props.options.map(option => <OptionVal key={ option } text={ option } deleteHandler={props.deleteHandler}/>)
    }
  </ol>
);
