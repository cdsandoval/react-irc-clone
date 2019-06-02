/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import listchannelsCss from "./list-channels-css";

function Channel(props) {
  return (
    <li data-name={props.name} class="channel irc">
      {props.name}
    </li>
  );
}

function ButtonAddChannel(props) {
  function handleChange(event) {
    let channels = props.channels;
    channels = channels.concat("General1");
    props.newchannel(channels);
  }

  return (
    <span
      id="js-open-lb"
      className="button -dark new-channel"
      onClick={handleChange}
    >
      New channel
    </span>
  );
}

function CreatedChannels(props) {
  return props.channels.map(channelName => {
    return <Channel name={channelName} />;
  });
}

function Listchannels() {
  const [createdChannels, setCreatedChannels] = React.useState(["General"]);

  return (
    <section
      css={listchannelsCss}
      id="channel-list"
      className="channels padding16 relative"
    >
      <div className="list-channels">
        <div id="js-close-channels" className="button-icon close">
          <svg width="16" height="16" viewBox="0 0 348.333 348.334">
            <path
              d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
            />
          </svg>
        </div>

        <div id="js-open-menu" className="hamburguer" />
        <h3 className="heading-2 title">Channels</h3>
        <ul id="irc-channels">
          <CreatedChannels channels={createdChannels} />
        </ul>

        <ButtonAddChannel
          newchannel={setCreatedChannels}
          channels={createdChannels}
        />
      </div>
    </section>
  );
}

export default Listchannels;
