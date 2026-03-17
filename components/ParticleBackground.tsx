import React, { useRef, useEffect } from 'react';

interface ParticleBackgroundProps {
  className?: string;
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = 'rgba(52, 211, 153, 0.5)'; // emerald-400 with opacity
  }

  update(w: number, h: number) {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > w || this.x < 0) this.speedX *= -1;
    if (this.y > h || this.y < 0) this.speedY *= -1;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  }
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const init = () => {
      const w = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
      const h = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);
      particles = [];
      const numberOfParticles = (w * h) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const connect = () => {
      const w = canvas.width;
      const h = canvas.height;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = 
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);
          
          if (distance < (w / 7) * (h / 7)) {
            const opacity = 1 - distance / ((w / 7) * (h / 7) * 0.8);
            if (opacity > 0) {
              ctx.strokeStyle = `rgba(52, 211, 153, ${opacity * 0.2})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(w, h);
        particles[i].draw(ctx);
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} />;
};

export default ParticleBackground;
