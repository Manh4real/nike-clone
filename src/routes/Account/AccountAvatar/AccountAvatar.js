import React, { useState } from "react";

function AccountAvatar() {
  const [image, setImage] = useState(
    JSON.parse(localStorage.getItem("avatar")) || ""
  );

  const handleClick = async () => {
    const res = await fetch(
      `https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/997fda2a-5e82-4058-99d5-70f7f5eb9805/air-force-1-sculpt-womens-shoes-GKwftK.png`
    );
    const url = res.url;
    setImage(url);
    console.log(url);
    localStorage.setItem("avatar", JSON.stringify(url));
  };

  return (
    <a
      href="/account"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <div className="profile__user-image bd-rd-50p overflow-hidden flex-center">
        <img src={image} alt="" className="w-100" />
      </div>
    </a>
  );
}

export default AccountAvatar;
