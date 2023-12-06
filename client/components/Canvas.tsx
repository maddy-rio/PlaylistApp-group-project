import { useEffect, useRef } from 'react'

class Circle {
  x: number
  y: number
  radius: number
  dx: number
  dy: number
  color: string

  constructor(
    x: number,
    y: number,
    radius: number,
    dx: number,
    dy: number,
    color: string,
  ) {
    this.x = x
    this.y = y
    this.radius = radius
    this.dx = dx
    this.dy = dy
    this.color = color
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath() // Starts the path
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2) // Creates the circle
    context.fillStyle = this.color // Sets the color
    context.fill() // Draws the circle
    context.closePath() // Closes the path
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    const maxSpeed = 5 // Set the maximum speed
    if (Math.abs(this.dx) > maxSpeed) {
      this.dx = Math.sign(this.dx) * maxSpeed
    }
    if (Math.abs(this.dy) > maxSpeed) {
      this.dy = Math.sign(this.dy) * maxSpeed
    }

    this.x += this.dx
    this.y += this.dy
  }
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const circleArrayRef = useRef<Circle[]>([])
  const colors = ['#5f5dbd', '#5e87b8', '#83cee0', '#a4fbe3'] // The list of colors

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    // if (!canvas) {
    //   console.log('Not Canvas')
    //   return
    // }
    canvas.width = window.innerWidth // set width
    canvas.height = window.innerHeight // set height
    init()
  }

  const animate = () => {
    requestAnimationFrame(animate)
    const canvas = canvasRef.current
    // if (!canvas) {
    //   console.log('Not Canvas')
    //   return
    // }
    const context = canvas.getContext('2d')
    // if (!context) {
    //   console.log('No Context 2d')
    //   return
    // }
    context.clearRect(0, 0, window.innerWidth, window.innerHeight) // clear
    for (let i = 0; i < circleArrayRef.current.length; i++) {
      const circle = circleArrayRef.current[i]
      circle.update() // update
      circle.draw(context) // draw
    }
  }

  const init = () => {
    circleArrayRef.current = []
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 5 // set radius
      const x = Math.random() * (window.innerWidth - radius * 2) + radius // set position
      const y = Math.random() * (window.innerHeight - radius * 2) + radius
      const dx = (Math.random() - 0.5) * 0.5 // set speed
      const dy = (Math.random() - 0.5) * 0.5 // set speed
      const color = colors[Math.floor(Math.random() * colors.length)] // set color
      const circle = new Circle(x, y, radius, dx, dy, color) // create new circle
      circleArrayRef.current.push(circle) // push new circle
    }
  }

  useEffect(() => {
    resizeCanvas()

    window.addEventListener('DOMContentLoaded', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('DOMContentLoaded', resizeCanvas)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []) // Dont add any dependencies as that brakes stuff 

  useEffect(() => {
    const canvas = canvasRef.current
    // if (!canvas) {
    //   console.log('Not Canvas')
    //   return
    // }

    const context = canvas.getContext('2d')
    // if (!context) {
    //   console.log('No Context 2d')
    //   return
    // }

    animate()
  }, []) // Dont add any dependencies as that brakes stuff 

  return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas