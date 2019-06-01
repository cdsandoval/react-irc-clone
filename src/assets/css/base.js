import JaldiRegularWoff2 from "../fonts/jaldi-regular-webfont.woff2";
import JaldiRegularWoff from "../fonts/jaldi-regular-webfont.woff";
import JaldiBoldWoff2 from "../fonts/jaldi-bold-webfont.woff2";
import JaldiBoldWoff from "../fonts/jaldi-bold-webfont.woff";
import cssVar from "./variables";

import { css } from "@emotion/core";
const base = css`
@font-face {
  font-family: "jaldibold";
  src: url("${JaldiBoldWoff2}") format("woff2"),
    url("${JaldiBoldWoff}") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "jaldiregular";
  src: url("${JaldiRegularWoff2}")
      format("woff2"),
    url("${JaldiRegularWoff}") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
  font-family: ${cssVar.ffRegular};
  font-size: 18px;
  line-height: 1.2;
  background-color: ${cssVar.gray};
  margin: 0
}

ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: ${cssVar.ffRegular};
  margin: 0;
  font-weight: normal;
}

select:focus,
input:focus {
  outline: 0;
}     

::selection {
  background-color: ${cssVar.black};
  color: white;
}

a {
  color: ${cssVar.link};
}

input[type="text"] {
  border: 3px solid ${cssVar.black};
  box-sizing: border-box;
  border-radius: 0.5em;
  height: 2.8em;
  padding: 0 1em;
  width: 100%;
  font-size: ${cssVar.ffRegular};
}

// headings

.heading-1{
  font-family: ${cssVar.ffBold};
  font-size: ${cssVar.fsBigger};
  margin-bottom: 0.5em;
}

.heading-2{
  font-family: ${cssVar.ffBold};
  font-size: ${cssVar.fsBig};
  margin-bottom: 0.5em;
}
.heading-3{
  font-size: ${cssVar.fsRegular};
  font-family: ${cssVar.ffBold};
  margin-bottom: 0.5em;
}

/* Helpers */
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.none{
  display: none;
}

.relative {
  position: relative;
}

/* security-space */
.padding16{
  padding: 16px
}
.padding24{
  padding: 24px
}
.padding48{
  padding: 48px
}

@media screen and (max-width:480px) {
  .padding48{
    padding: 24px;
  }
  .padding24{
    padding: 16px;
  }
}
`;

export default base;
