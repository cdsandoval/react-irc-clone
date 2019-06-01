import cssVar from "../variables";

import { css } from "@emotion/core";
const home = css`
  .wrapper-app {
    max-width: 1200px;
    width: 90vw;
    height: 90vh;
    box-sizing: border-box;
    background-color: ${cssVar.background};
  }

  .channels {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 3px solid ${cssVar.black};
  }

  /* .send-message */
  .send-message {
    display: flex;
    overflow: hidden;
    font-size: ${cssVar.fsBig};
  }

  .send-message .input-text {
    flex: 1 1 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  .send-message .submit {
    flex: 0 0 96px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* chat */
  .chat {
    position: relative;
  }

  .chat .list-messages {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 88px;
    top: 16px;
    overflow: auto;
    padding-bottom: 16px;
  }

  .chat .send-message {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 16px;
  }

  /* list-channels */
  .list-channels .close {
    display: none;
    position: absolute;
    right: 0;
    top: 10px;
  }

  .list-channels .title {
    margin-bottom: 0.2em;
  }

  .list-channels .channel {
    padding: 0.3em 0.5em;
    transition: all 0.25s;
    background-color: transparent;
    cursor: pointer;
    border-radius: 4px;
  }

  .list-channels .channel:hover {
    background-color: ${cssVar.green};
  }

  .list-channels .new-channel {
    margin-top: 1em;
  }

  @media screen and (max-width: 768px) {
    .wrapper-app {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }
  }
  @media screen and (max-width: 480px) {
    .channels {
      position: absolute;
      background: ${cssVar.background};
      height: 100vh;
      left: -200px;
      width: 200px;
      z-index: 1;
      transition: all 0.25s;
      box-sizing: border-box;
    }

    .channels.-active {
      left: 0;
    }

    .list-channels .close {
      display: flex;
    }

    .chat .list-messages {
      left: 16px;
      right: 16px;
      bottom: 40px;
      top: 16px;
    }

    .chat .send-message {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      font-size: 1rem;
    }

    .send-message .submit,
    .send-message .input-text {
      border-radius: 0;
    }
  }
`;

export default home;
