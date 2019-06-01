/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "@emotion/core";
import { formatAMPM, formatdate } from "./helpers/formatDate";
import cssVar from "../../assets/css/variables";

function ListMessages({ message }) {
  const [day, setDay] = React.useState(null);

  function showSeparator(date) {
    setDay(date.getDate());
    return (
      <span
        css={{
          backgroundColor: cssVar.gray,
          padding: "0.5em 0",
          fontSize: cssVar.fsSmall,
          borderRadius: "8px",
          margin: "4px 0",
          color: cssVar.grayText,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {formatdate(date)}
      </span>
    );
  }

  return (
    <div
      css={{
        position: "relative"
      }}
    >
      <ul
        css={{
          position: "absolute",
          left: "24px",
          right: "24px",
          bottom: "88px",
          top: "16px",
          // overflow: "auto",
          paddingBottom: "16px",
          listStyle: "none"
        }}
      >
        {message.map(value => {
          return (
            <>
              {value.date.getDate() !== day ? showSeparator(value.date) : null}
              <li
                key={value.key}
                css={{ marginBottom: "4px", opacity: "0.55" }}
              >
                [{formatAMPM(value.date)}]
                <span
                  css={{
                    backgroundColor: "#D9EFFF",
                    padding: "2px 4px",
                    display: "inline-block",
                    borderRadius: "4px"
                  }}
                >
                  @{value.Author}
                </span>
                {value.text}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default ListMessages;
