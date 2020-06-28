import * as React from "react";
import FileUploader from "../components/FileUploader";
import QRValue from "../components/QRValue";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="text-center text-3xl mb-4">QR Reader</h1>
      <FileUploader />
      <div className="mt-4">
        <React.Suspense fallback={"Loading..."}>
          <QRValue />
        </React.Suspense>
      </div>
    </div>
  );
}
