'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface Props {
  title: string;
  details: string;
  isFlipped: boolean;
  onClick: () => void;
  peekPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function ExperienceCard({
  title,
  details,
  isFlipped,
  onClick,
  peekPosition = 'bottom-right',
}: Props) {
  const peekClass = {
    'top-left': '-top-4 -left-4',
    'top-right': '-top-4 -right-4',
    'bottom-left': '-bottom-4 -left-4',
    'bottom-right': '-bottom-4 -right-4',
  };

  return (
    <motion.div
      onClick={onClick}
      className={clsx(
        'relative cursor-pointer w-full h-48 perspective-[1000px]',
        'group'
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Peek Card */}
      <div
        className={clsx(
          'absolute w-full h-full rounded-[60px] border-2 border-dashed border-white',
          'opacity-30 pointer-events-none',
          'z-0',
          peekClass[peekPosition]
        )}
        style={{ transform: 'scale(0.98)' }}
      />

      {/* Main Card */}
      <div
        className={clsx(
          'relative w-full h-full rounded-[60px] transition-transform duration-700',
          'transform-style-preserve-3d',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front */}
        <div
          className={clsx(
            'absolute inset-0 bg-white text-center p-6 flex items-center justify-center rounded-[60px]',
            'backface-hidden shadow-xl'
          )}
        >
          <h3 className="text-xl font-semibold text-[#0F1C3F]">{title}</h3>
        </div>

        {/* Back */}
        <div
          className={clsx(
            'absolute inset-0 bg-white p-6 rounded-[60px] flex items-center justify-center text-center text-sm text-gray-700',
            '[transform:rotateY(180deg)] backface-hidden shadow-xl'
          )}
        >
          <p>{details}</p>
        </div>
      </div>
    </motion.div>
  );
}