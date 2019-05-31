/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function ListMessages({ message }) {
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
            <li key={value.key} css={{ marginBottom: "4px", opacity: "0.55" }}>
              {value.date}
              <span
                css={{
                  backgroundColor: "#D9EFFF",
                  padding: "2px 4px",
                  display: "inline-block",
                  borderRadius: "4px"
                }}
              >
                {value.Author}
              </span>
              {value.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListMessages;
