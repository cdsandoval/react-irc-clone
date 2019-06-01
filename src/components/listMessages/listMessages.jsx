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
<<<<<<< HEAD
          return (
            <>
              {value.date.getDate() !== day ? showSeparator(value.date) : null}
=======
          let date = new Date(value.date);
          return (
            <>
              {date.getDate() !== day ? showSeparator(date) : null}
>>>>>>> f2c290c5d2b956d68d7609893f22e2571d4b084a
              <li
                key={value.key}
                css={{ marginBottom: "4px", opacity: "0.55" }}
              >
<<<<<<< HEAD
                [{formatAMPM(value.date)}]
=======
                [{formatAMPM(date)}]
>>>>>>> f2c290c5d2b956d68d7609893f22e2571d4b084a
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
