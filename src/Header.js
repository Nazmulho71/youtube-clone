import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <Link to="/">
          <img
            className="header__logo"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <IconButton>
          <VideoCall className="header__icon" />
        </IconButton>
        <IconButton>
          <Apps className="header__icon" />
        </IconButton>
        <IconButton>
          <Notifications className="header__icon" />
        </IconButton>
        <Avatar
          className="header__avatar"
          alt="Md. Nazmul Hossain"
          src="https://lh3.googleusercontent.com/-AhzX0v9xzT8/XuuatTkPT8I/AAAAAAAAAAw/ztGVV1EDTW8tiYFsve7Nqb1mdaPI-JiEgCEwYBhgLKtQDAL1OcqwWiRdeoJqESGiWYPbrbSxq5goRE3cUUDCgqk-6_EcYyzjRffhZA9D9ifvn2of0dB83jeK1_sT9wSSk1T2VXMa5P4ux_1c1UuOcsDwA9lqIhg8FTY9XebIQ5qY2wsnVr6DnBrlYbwPJh-7B3OzTq4iuRBDcpOfPpjtV5hPdMXBlHJ9BuDT4p9yYVu84aZi48GoTcRzgESn-nSSDHNlo_vVjcpCnuhhYwvYg1X7P_X2jOsmE2QXCfCqCO_6RDrGKk4zNkCkwnFEDil-P1pJ04l8fSPuK_Cb9G213TTuO7jnKBWsg6R8riCyUkSqgL5ab5RyJhQ_KMJL3VSNoW-Nvatlmzr8wFxMyfWQm1u-j0RFItQ9q2XGhktiCX0ot04VHDnl_KKv-lD3iFGKuQulG2TNziPc9UvI2F_z5BgpSlGnabza2dcgdQoLwUPMbmnIWXwgVTIEitteBQQDAfsEBF2Q-DPGVarJblDCp_KVi9_8N9BdGcgdXCCclIv1KHD_hNEUsInccRP2y_aI4y2lyZXyVWB3_pFrsDymaa81J2TAz-cwYTLt9DEhUMlm1G4WvQ2VbRanRcC1Svj6mfZANgLIp0aYPXS-vXJvPnGtaQpeRMPHv5v4F/w139-h140-p/IMG_22501.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
