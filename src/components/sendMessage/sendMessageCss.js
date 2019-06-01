/** @jsx jsx */
import { css } from "@emotion/core";

const sendMessageCss = css`
  & {
    display: flex;
    overflow: hidden;
    font-size: var(--fs-big);
  }

  & .input-text {
    flex: 1 1 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  & .submit {
    flex: 0 0 96px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default sendMessageCss;

// Por implementar:

/* .chat .send-message {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    font-size: 1rem;
  } */

/* .chat .send-message {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 16px;
} */

/* .send-message .submit,
  .send-message .input-text {
    border-radius: 0;
  } */
