// @ts-nocheck
import { handleFileUpload } from "@/utils/helper_functions";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";

const uploader = Uploader({ apiKey: "free" });

// https://www.bytescale.com/docs/upload-widget#configuration
const uploaderOptions = {
  maxFileCount: 5,

  // When `showFinishButton: false` (default) combined with `multi: false` (default) or `maxFileCount: 1`:
  // - Modals will close immediately after the upload completes.
  // - Dropzones will allow the user to keep removing/re-uploading the file.
  //   Use `onUpdate` for dropzones to handle each upload, and to close the dropzone if required.
  showFinishButton: true,
  styles: {
    colors: {
      primary: "#A9B5FD ",
    },
    innerHeight: "20px",
  },
};

// Create a dropzone...

const MyDropzone = ({ setFiles }: any) => (
  <Box
    sx={{
      padding: "20px 5px 20px 15px",
      height: "150px",
      width: "1150px",
      backgroundColor: "white",
    }}
  >
    <input
      type={"file"}
      accept={".csv"}
      onChange={(e) => handleFileUpload(e)}
    />
    <UploadDropzone
      uploader={uploader}
      options={uploaderOptions}
      onUpdate={(files) =>
        console.log(`Files: ${files.map((x) => x.fileUrl).join("\n")}`)
      }
      onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
      width="1300px"
      minWidth="250px"
      height="140px"
      className=""
    />
  </Box>
);

const MyUploadedFiles = ({ files }: any) =>
  files.map((file) => {
    // Tip: save 'filePath' to your DB (not 'fileUrl').
    const filePath = file.filePath;
    // "raw" for un-transformed file.
    const fileUrl = uploader.url(filePath, "thumbnail");
    return (
      <p key={fileUrl}>
        <a href={fileUrl} target="_blank">
          {fileUrl}
        </a>
      </p>
    );
  });

const MyApp = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <Box>
        {files.length ? (
          <MyUploadedFiles files={files} />
        ) : (
          <MyDropzone setFiles={setFiles} />
        )}
      </Box>
    </>
  );
};

export default MyApp;
