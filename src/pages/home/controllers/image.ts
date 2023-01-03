
export const removeBackground = (imageSRC: string) => {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement,
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D


  let img = new Image()
  img.onload = function (e: any) {
    ctx.drawImage(img, 0, 0)
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    let data = imageData.data
    for (let idx = 0; idx < data.length; idx++) {
      let pixel = {} as any
      pixel.r = data[idx]
      pixel.g = data[idx + 1]
      pixel.b = data[idx + 2]
      pixel.a = data[idx + 3]
      
      // if (pixel.r == 255 && pixel.g == 255 && pixel.b == 255)
      // Them pixel.a = 0

      // imageData.data = data
      // ctx.putImageData(imageData, 0, 0)
    }
  }
  img.src = imageSRC
}

export const loadImage = (prevId: string, e: any) => {

  document.getElementById(prevId)
    ?.classList.remove('loading')
}