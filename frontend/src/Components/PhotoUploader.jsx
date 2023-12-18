import axios from "axios";
import React, { useState } from "react";

const PhotoUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.set("photos", files[i]);
    }

    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const { data: filenames } = res;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  return (
    <>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Add using a link..."
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-400 w-[150px] h-[50px] py-2 px-2 text-white rounded-full"
        >
          Add Photo
        </button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex" key={link}>
              <img
                className="rounded 2xl w-full object-cover"
                src={"http://127.0.0.1:4000/uploads/" + link}
                alt="image"
              />
            </div>
          ))}
        <label className="w-[300px] bg-gray-200 border-2 border-gray-400 h-[300px] flex items-center rounded-md justify-center text-5xl text-gray-500 cursor-pointer">
          <input type="file" className="hidden" onChange={uploadPhoto} />+
        </label>
      </div>
    </>
  );
};

export default PhotoUploader;
