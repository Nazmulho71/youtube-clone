import React from "react";
import SidebarRow from "./SidebarRow";
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAlt,
  ExpandMoreOutlined,
  SportsEsports,
  WifiTethering,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch later" />
      <SidebarRow Icon={ThumbUpAlt} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
      <SidebarRow Icon={SportsEsports} title="Gaming" />
      <SidebarRow Icon={WifiTethering} title="Live" />
      <hr />
      <SidebarRow Icon={Settings} title="Settings" />
      <SidebarRow Icon={Flag} title="Report history" />
      <SidebarRow Icon={Help} title="Help" />
      <SidebarRow Icon={Feedback} title="Send feedback" />
      <hr />
    </div>
  );
}

export default Sidebar;
