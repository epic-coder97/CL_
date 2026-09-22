import React, { useEffect, useState } from 'react';

interface PaperGrainProps {
  isDark?: boolean;
}

/**
 * Natural 1970s-80s technical documentation paper grain.
 * Dynamically synthesizes a fine, monochromatic paper tooth texture via Canvas
 * and tiles it seamlessly as a PNG, ensuring 100% browser rendering fidelity
 * without SVG filter compatibility issues.
 */
export function PaperGrain({ isDark = false }: PaperGrainProps) {
  const [patternUrl, setPatternUrl] = useState<string>('');

  useEffect(() => {
    try {
      const size = 180;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const imgData = ctx.createImageData(size, size);
      const data = imgData.data;

      // Natural technical rag paper tooth:
      // Mix of fine micro-grain plus subtle microscopic fiber variations
      for (let i = 0; i < data.length; i += 4) {
        // High-frequency fine random luminance
        const fine = Math.random() * 255;
        // Subtle organic fiber variance
        const fiber = (Math.random() - 0.5) * 40;
        const grain = Math.max(0, Math.min(255, Math.floor(fine + fiber)));

        data[i] = grain;     // R
        data[i + 1] = grain; // G
        data[i + 2] = grain; // B
        data[i + 3] = 255;   // Opaque pattern, blended via CSS opacity & mix-blend-mode
      }

      ctx.putImageData(imgData, 0, 0);
      setPatternUrl(canvas.toDataURL('image/png'));
    } catch (err) {
      console.warn('Could not initialize paper texture:', err);
    }
  }, []);

  if (isDark || !patternUrl) {
    return null;
  }

  return (
    <div
      id="retro-paper-grain"
      className="pointer-events-none fixed inset-0 z-1 bg-repeat"
      style={{
        backgroundImage: `url(${patternUrl})`,
        backgroundSize: '140px 140px',
        opacity: 0.075, // Tangible natural paper texture (~7.5% strength) visible across margins and negative space
        mixBlendMode: 'multiply',
      }}
      aria-hidden="true"
    />
  );
}
