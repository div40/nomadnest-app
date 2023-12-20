import React from "react";

const PlaceImages = ({ place, index = 0 }) => {
  if (!place.photos?.length) {
    return "";
  }
  return (
    <>
      {place.photos.length > 0 && (
        <img
          className="object-cover"
          src={"http://localhost:4000/uploads/" + place.photos[index]}
          alt="place_photo"
        />
      )}
    </>
  );
};

export default PlaceImages;
