function readFile (file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function ({ target }) {
      if (target?.readyState === FileReader.DONE && typeof target.result === 'string') {
        resolve(target.result)
      }
    }
  });
}

function loadImage(dataUrl: string) {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image()
    img.src = dataUrl;
    img.onload = () => {
      resolve(img);
    };
  });
}

export default async function getImageData(file: File): Promise<null | ImageData> {
  console.log('getImageData')
  const dataUrl = await readFile(file);
  console.log({ dataUrl })
  const img = await loadImage(dataUrl);
  console.log({ img })

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;

  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const imageData = context.getImageData(0, 0, img.width, img.height);

  return imageData;
}
