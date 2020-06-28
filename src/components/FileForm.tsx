import * as React from "react";

interface Props {
  file: null | File;
  onChange(file: null | File): unknown;
}

export default function FileForm({ file, onChange }: Props) {
  const handleChange = ({
    currentTarget
  }: React.SyntheticEvent<HTMLInputElement>) => {
    if (currentTarget.files && currentTarget.files.length > 0) {
      onChange(currentTarget.files[0]);
    }
  };

  return (
    <label>
      Click to select some files...
      <input style={{ display: "none" }} type="file" onChange={handleChange} />
    </label>
  );
}
