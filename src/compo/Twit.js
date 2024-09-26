import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twit = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="swiggy_in"
        options={{ height: "650px" }}
      />
    </div>
  );
};

export default Twit;
