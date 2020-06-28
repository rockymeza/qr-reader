import * as React from "react";
import { useRecoilValue } from "recoil";
import isUrl from "is-url";
import { qrCodeQuery } from "../state";

export default function QRValue() {
  const code = useRecoilValue(qrCodeQuery);

  let content = null;
  if (code) {
    if (isUrl(code.data)) {
      content = (
        <a href={code.data} target="_blank" rel="noopener noreferrer">
          {code.data}
        </a>
      );
    } else {
      content = <pre>{JSON.stringify(code.data, null, 2)}</pre>;
    }
  }

  return <div className="text-center">{content}</div>;
}
