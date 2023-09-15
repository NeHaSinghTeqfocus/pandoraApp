import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

export default function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };
  return (
    <div>
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    <Box>

    </Box>
    </div>
    )
};