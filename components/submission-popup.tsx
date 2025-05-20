'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface SubmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const SubmissionPopup: React.FC<SubmissionPopupProps> = ({ 
  isOpen,
  onClose,
  title,
  message
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative bg-white/10 border border-white/20 rounded-2xl shadow-xl shadow-blue-500/20 w-full max-w-md p-6 md:p-8 text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0033FF]/80 to-[#4361EE]/80">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm md:text-base text-white/70">
              {message}
            </p>
            
            <button
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center text-sm font-medium transition-all w-full max-w-xs mx-auto cursor-pointer"
            >
                <div className="relative flex flex-col py-2.5 px-6 w-full h-fit rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200">
                    <div className="relative font-medium text-base leading-tight text-white/80">
                        Schließen
                    </div>
                </div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 