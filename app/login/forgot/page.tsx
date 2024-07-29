'use client';

import React, { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';
import Modal from '@/app/components/Modal';

const Forgot: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailRef.current?.value) {
      const email = emailRef.current.value;
      console.log('register submit', email);
      setIsModalOpen(true);
    }
  };

  const sendAgain = () => {
    console.log('send again');
    if (emailRef.current) {
      const email = emailRef.current.value;
      console.log('register submit', email);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full md:w-1/2 md:!max-h-fit h-full flex flex-col pt-20 overflow-y-auto overscroll-contain">
      <div className="flex flex-col bg-white items-center md:justify-start md:pt-0 md:px-18 lg:px-32 rounded-t-[50px] px-8 pt-8 h-full">
        <h2 className="w-full pb-8 text-4xl text-primary font-bold max-w-lg mx-auto">
          Recuperar contraseña
        </h2>
        <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto grid gap-4">
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Ingrese el email de su cuenta</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              placeholder="mail@mail.com"
            />
          </div>
          <div className="flex flex-wrap pt-4 text-center justify-center">
            <button
              className="capitalize font-normal text-lg shadow-lg rounded-btn bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-white border-opacity-[0.25] text-white w-full mb-3"
              type="submit"
            >
              Enviar mail de recuperación
            </button>
            <p className="pt-4 mb-5">
              ¿Ya tienes una cuenta? <Link href="/login"><span className="text-green-700"> Inicia sesión aquí</span></Link>
            </p>
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-lg">Se ha enviado un correo electrónico a la dirección proporcionada con instrucciones para recuperar tu contraseña. Si no le ha llegado el mail, puede <button className='text-blue-500 hover:underline' onClick={sendAgain}>enviarlo de nuevo</button></p>
      </Modal>
    </div>
  );
};

export default Forgot;