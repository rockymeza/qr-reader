import * as React from "react";

interface Props {
  file: null | File;
  onChange(file: null | File): unknown;
}

export default function FileForm({ file, onChange }: Props) {
  return (
    <form>
      <div>
        <label>
          Click to select some files...
          <input
            style={{ display: "none" }}
            type="file"
            onChange={e => {
              onChange(e.target.files[0]);
            }}
          />
        </label>
        <button type="button" onClick={() => onChange(null)} disabled={!file}>
          clear
        </button>
      </div>
    </form>
  );
}
