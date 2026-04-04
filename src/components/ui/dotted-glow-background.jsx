import React from 'react';
import { cn } from '../../lib/utils';

export function DottedGlowBackground({
  children,
  className,
  containerClassName,
  dotColor = 'rgba(255, 255, 255, 0.16)',
}) {
  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at center, black 32%, transparent 88%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 32%, transparent 88%)',
          }}
        />
        <div
          className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 72%)',
          }}
        />
        <div
          className="absolute bottom-[12%] right-[12%] h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(139, 92, 246, 0.07) 42%, transparent 72%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5, 5, 5, 0.2) 0%, rgba(5, 5, 5, 0.05) 35%, rgba(5, 5, 5, 0.36) 100%)',
          }}
        />
      </div>

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
}

export default DottedGlowBackground;
