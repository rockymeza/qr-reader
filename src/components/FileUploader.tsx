import * as React from "react";
import { useRecoilState } from "recoil";
import { fileState } from "../state";
import FileForm from "./FileForm";

export default function FileUploader() {
  const [file, setFile] = useRecoilState(fileState);

  return (
    <>
      <FileForm file={file} onChange={setFile} />
      {file && <button onClick={() => setFile(null)}>Clear</button>}
    </>
  );
}
