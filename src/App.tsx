import * as React from "react";
import FileForm from "./FileForm";
import QRValue from "./QRValue";

export default function App() {
  const [file, setFile] = React.useState<File | null>(null);

  console.log(file);

  return (
    <div className="App">
      <FileForm file={file} onChange={file => setFile(file)} />
      {file && <QRValue file={file} />}
    </div>
  );
}
