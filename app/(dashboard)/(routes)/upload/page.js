"use client";
import React from "react";
import Uploadform from "./_components/Uploadform";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../../../firebaseConfig";
const Upload = () => {
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const spaceRef = ref(storage, `file-upload/${file.name}`);

    const uploadTask = uploadBytesResumable(spaceRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    });
  };
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> File and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      <Uploadform uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
};

export default Upload;
