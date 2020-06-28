import * as React from "react";
import { useRecoilState } from "recoil";
import { fileState } from "../state";
import FileForm from "./FileForm";

export default function FileUploader() {
  const [file, setFile] = useRecoilState(fileState);

  return (
    <div className="text-center">
      <div className="mb-4">
        <FileForm file={file} onChange={setFile} />
      </div>

      {file && (
        <button
          onClick={() => setFile(null)}
          className="top-0 right-0 bg-white hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      )}
    </div>
  );
}
