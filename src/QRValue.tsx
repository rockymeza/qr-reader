import * as React from "react";
import jsQR, { QRCode } from "jsqr";
import isUrl from 'is-url'

const readFile = (file: File) => {
  return new Promise<ArrayBuffer>((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (evt) {
      if (evt?.target?.readyState === FileReader.DONE) {
        resolve(evt.target.result)
      }
    }
  });
}

function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}

// https://stackoverflow.com/a/23105310
function drawImageScaled(img: Image, ctx: CanvasRenderingContext2D) {
  var canvas = ctx.canvas ;
  var hRatio = canvas.width  / img.width    ;
  var vRatio =  canvas.height / img.height  ;
  var ratio  = Math.min ( hRatio, vRatio );
  var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
  var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(img, 0,0, img.width, img.height,
                     centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
}

interface Props {
  file: File;
}

export default function QRValue({ file }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [code, setCode] = React.useState<null | QRCode>(null);
  React.useEffect(() => {
    readFile(file)
      .then((data) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const img = new Image()
        img.src = data;
        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          const context = canvas.getContext('2d');
          drawImageScaled(img, context)
          const imageData = context.getImageData(0, 0, img.width, img.height)
          setCode(jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          }))
        }
      })

    return () => {
      setCode(null)
    }
  }, [file]);

  let content = null;
  if (code) {
    if (isUrl(code.data)) {
      content = <a href={code.data} target="_blank" rel="nofollow noreferrer">{code.data}</a>
    } else {
      content = <pre>{JSON.stringify(code.data, null, 2)}</pre>
    }
  }

  return (
    <>
      {content}
      <canvas style={{ width: 800, height: 1000 }} ref={canvasRef} />
    </>
  );
}
