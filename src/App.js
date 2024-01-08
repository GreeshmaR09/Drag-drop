import * as React from 'react'
import ReactDOM from "react-dom";
import { Dropzone, FileMosaic } from "@files-ui/react";

function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
  );
}

export default App