import React from "react";
import { Link } from "react-router-dom";

import { CardDropdown } from "./CardDropDown";

// Redux-related
import { logOut, selectUserName } from "features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AccountMenu = () => {
  const userName = useSelector(selectUserName);
  const userDispatch = useDispatch();

  return (
    <div className="position-relative">
      <Link to="/account" className="hover-w-fade">
        Hi, {userName?.firstName}!
      </Link>
      <div className="hidden">
        <CardDropdown titleHref="/account" title="Account">
          <ul>
            {list.map((li, i) => {
              return (
                <li key={i}>
                  <a href={li.path}>{li.text}</a>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              const c = window.confirm("Are you sure you want to log out?");

              if (c) {
                userDispatch(logOut());
              }
            }}
          >
            Log Out
          </button>
        </CardDropdown>
      </div>
    </div>
  );
};

const list = [
  { path: "/account", text: "Profile" },
  { path: "/orders", text: "Orders" },
  { path: "/favorites", text: "Favorites" },
  { path: "/inbox", text: "Inbox" },
  { path: "/experiences", text: "Experiences" },
  { path: "/settings", text: "Account Settings" },
];

export default AccountMenu;
