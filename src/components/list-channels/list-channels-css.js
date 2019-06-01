import { css } from '@emotion/core';
import Listchannels from './list-channels';

const listchannelsCss = css`
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 3px solid var(--c-black);
  }

  & {
    grid-area: channels;
  }
`;

export default listchannelsCss;
