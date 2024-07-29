import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      setTimeout(() => setShowModal(false), 300); // Duración de la animación de cierre
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      onClose();
    }, 300); // Duración de la animación de cierre
  };

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`} onClick={handleClose}>
      <div className={`bg-white p-10 rounded-lg w-3/4 relative ${isClosing ? 'animate-slide-out' : 'animate-slide-in'}`} onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-0 right-[0.7rem] text-gray-500 hover:text-gray-700 text-4xl"
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
