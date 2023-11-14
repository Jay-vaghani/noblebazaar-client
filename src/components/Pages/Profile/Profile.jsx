import axios from "axios";
import React, { useEffect } from "react";

function Profile() {
  useEffect(() => {
    const detail = async () => {
      const data = await fetch(
        "https://noblebazaar.onrender.com/user/details",
        {
          credentials: "include",
        }
      );

      const res = await data.json();

      console.log(res);
    };

    detail();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <h1>Profile</h1>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
