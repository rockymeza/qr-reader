import * as React from "react";
import FileUploader from "../components/FileUploader";
import QRValue from "../components/QRValue";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div>
        <FileUploader />
      </div>
      <div>
        <React.Suspense fallback={"Loading..."}>
          <QRValue />
        </React.Suspense>
      </div>
    </div>
  );
}
