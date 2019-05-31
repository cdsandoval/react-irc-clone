/** @jsx jsx */
import React from 'react';
import { render } from 'react-dom';
import Listchannels from './components/listchannels';
import { jsx } from '@emotion/core';

function Codeable() {
  return (
    <>
      <Listchannels />
      <h1>Codeable</h1>
    </>
  );
}

const $root = document.getElementById('root');
render(<Codeable />, $root);
