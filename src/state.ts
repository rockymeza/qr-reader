import { atom, selector } from "recoil";
import jsQr, { QRCode } from "jsqr";
import getImageData from "./utils/getImageData";

export const fileState = atom<null | File>({
  key: "fileState",
  default: null
});

export const qrCodeQuery = selector<null | QRCode>({
  key: "qrCodequery",
  async get({ get }) {
    const file = get(fileState);
    console.log({ file });
    if (!file) return null;

    const imageData = await getImageData(file);
    console.log({ imageData });
    if (!imageData) return null;

    const qrCode = jsQr(imageData.data, imageData.width, imageData.height);
    console.log({ qrCode });
    return qrCode;
  }
});
