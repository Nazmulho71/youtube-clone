import React from "react";
import { Tune } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <Tune />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnglVjQeNSAVO9GgKkrjIbCO_y0rOx7Yxx-2bv9r_A=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="thenewboston"
        verified
        subs="2.5M"
        noOfVideos={(4, 372)}
        description="Tons of sweet computer related tutorials and some other awesome videos too!"
      />
      <hr />
      <VideoRow
        views="12K views"
        subs="2.5M"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="Streamed 2 days ago"
        channel="thenewboston"
        title="Working on thenewboston - 12/13/20 - Part 2"
        image="https://i.ytimg.com/vi/0VUFKTmgCGA/maxresdefault.jpg"
      />
      <VideoRow
        views="18K views"
        subs="2.5M"
        description="Website - https://thenewboston.com/ GitHub -
        https://github.com/thenewboston-developers Reddit ..."
        timestamp="Streamed 3 days ago"
        channel="thenewboston"
        title="Live Stream 12/13/20 - Steam testing that became Q&A"
        image="data:image/jpeg;base64,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"
      />
      <VideoRow
        views="6.5K views"
        subs="2.5M"
        description="Website - https://thenewboston.com/ Discord - https://discord.gg/cQ5KxF4pCH Slack ..."
        timestamp="5 days ago"
        channel="thenewboston"
        title="Digital Currency - Tutorial 9 - Digital Signatures"
        image="https://i.ytimg.com/vi/-PLUDnmvXME/maxresdefault.jpg"
      />
      <VideoRow
        views="9.8K views"
        subs="2.5M"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="2 weeks ago"
        channel="thenewboston"
        title="How to Deploy a Confirmation Validator (Digital Currency Deep Dive)"
        image="https://i.ytimg.com/vi/ICqbShKku2k/maxresdefault.jpg"
      />
      <VideoRow
        views="5.2K views"
        subs="2.5M"
        description="Franchyze923 - https://www.youtube.com/channel/UCgaEcHjTM9OLE3I8zVDSM2Q Website - https://thenewboston.com/ GitHub ..."
        timestamp="3 weeks ago"
        channel="thenewboston"
        title="Node Deployment - Tutorial 8 - Outro"
        image="https://i.ytimg.com/vi/w3AnULh_LMo/maxresdefault.jpg"
      />
      <VideoRow
        views="176K views"
        subs="2.5M"
        description="Website - https://thenewboston.com/
        GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="1 month ago"
        channel="thenewboston"
        title="Hello, World."
        image="https://i.ytimg.com/vi/D-3i1g5YFik/maxresdefault.jpg"
      />
      <VideoRow
        views="1M views"
        subs="2.5M"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="4 years ago"
        channel="thenewboston"
        title="Angular 2 for Beginners - Tutorial 1 - Getting Started"
        image="https://i.ytimg.com/vi/hXfigUyeHaY/maxresdefault.jpg"
      />
      <VideoRow
        views="309K views"
        subs="1.2M views"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="4 years ago"
        channel="thenewboston"
        title="React JS / Redux Tutorial - 1 - What is Redux?"
        image="https://i.ytimg.com/vi/DiLVAXlVYR0/maxresdefault.jpg"
      />
      <VideoRow
        views="544K views"
        subs="1.2M views"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="4 years ago"
        channel="thenewboston"
        title="React JS Tutorials for Beginners - 1 - Getting Started"
        image="https://i.ytimg.com/vi/-AbaV3nrw6E/maxresdefault.jpg"
      />
      <VideoRow
        views="5.2K views"
        subs="1.2M views"
        description="Website - https://thenewboston.com/ GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="4 years ago"
        channel="thenewboston"
        title="Django Tutorial for Beginners - 1 - Installing Django"
        image="https://i.ytimg.com/vi/qgGIqRFvFFk/maxresdefault.jpg"
      />
      <VideoRow
        views="16K views"
        subs="1.2M views"
        description="Website - https://thenewboston.com/
        GitHub - https://github.com/thenewboston-developers Reddit ..."
        timestamp="10 years ago"
        channel="thenewboston"
        title="thenewboston UPDATE - 1/18/2010"
        image="https://i.ytimg.com/vi/wa4HODAMxCM/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
