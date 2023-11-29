import React, { useState } from "react";

export default function LattoRadian() {
  const [latitude, setLatitude] = useState(72.97295987594052);
  const [longitude, setLongitude] = useState("");

  const pi = Math.PI;
  const lat_rad = latitude * (pi / 180);
  console.log(lat_rad);
  return (
    <>
      <iframe
        className="m-auto"
        src="https://trinket.io/embed/python/2cde629cda"
        width="80%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
      ></iframe>
    </>
  );
}
