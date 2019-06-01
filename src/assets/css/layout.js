import cssVar from "./variables";

import { css } from "@emotion/core";
const layout = css`
  // footer
  .footer {
    font-size: ${cssVar.fsSmall};
    color: ${cssVar.black};
  }

  // form-new-channel

  .form-new-channel {
    background-color: ${cssVar.background};
  }

  .form-new-channel .title {
    height: 40px;
    border-bottom: 3px solid ${cssVar.black};
    background-color: ${cssVar.green};
    margin-bottom: 0;
  }

  .form-new-channel .actions {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .form-new-channel .name-channel {
    margin-bottom: 16px;
  }

  .form-new-channel .cancel {
    margin-right: 8px;
  }

  // grid
  .main-grid {
    display: grid;
    grid-template:
      "header header" 40px
      "channels tabs" 56px
      "channels chat" 1fr / 160px 1fr;
  }

  .header {
    grid-area: header;
  }
  .channels {
    grid-area: channels;
  }
  .tabs {
    grid-area: tabs;
  }
  .chat {
    grid-area: chat;
  }

  @media screen and (max-width: 480px) {
    .main-grid {
      grid-template:
        "header" 40px
        "tabs" 48px
        "chat" 1fr / 1fr;
    }
  }

  // header

  .header {
    position: relative;
    border-bottom: 3px solid ${cssVar.black};
    background-color: ${cssVar.green};
  }

  .header .title {
    margin: 0;
    font-size: 1em;
    font-family: ${cssVar.ffBold};
  }

  .header .hamburguer {
    position: absolute;
    display: none;
    left: 0px;
    top: 0px;
  }

  @media screen and (max-width: 480px) {
    .header .hamburguer {
      display: flex;
    }
  }
`;

export default layout;
