// pages/register.tsx

'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('register submit');
  };

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('change', name, value);
  };

  return (
    <div className="w-full md:w-1/2 md:!max-h-full h-full flex flex-col pt-20 overflow-y-auto overscroll-contain">
      <div className="flex flex-col bg-white items-center md:justify-start md:pt-0 md:px-18 lg:px-32 rounded-t-[50px] px-8 pt-8 h-full">
        <h2 className="w-full px-4 pb-8 text-4xl text-primary font-bold max-w-lg mx-auto">
          Registro
        </h2>
        <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto grid gap-4">
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Nombre de usuario</label>
            <input
              type="text"
              name="user_name"
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Email</label>
            <input
              type="email"
              name="email"
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              onChange={handleChange}
              placeholder="mail@mail.com"
            />
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Fecha de nacimiento</label>
            <input
              type="date"
              name="birth_date"
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Nombre/s</label>
            <input
              type="text"
              name="name"
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              onChange={handleChange}
              placeholder="Juan"
            />
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Apellido/s</label>
            <input
              type="text"
              name="last_name"
              className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
              onChange={handleChange}
              placeholder="Perez"
            />
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
                onChange={handleChange}
                placeholder="******"
              />
            </div>
          </div>
          <div className="w-full mb-3 md:mb-0">
            <label className="block text-lg text-primary">Repetir contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="repeat_password"
                className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
                onChange={handleChange}
                placeholder="******"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-2"
            onClick={onPasswordClick}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          <div className="flex flex-wrap pt-4 text-center justify-center">
            <button
              className="capitalize font-normal text-lg shadow-lg rounded-btn bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-white border-opacity-[0.25] text-white w-full mb-3"
              type="submit"
            >
              Registrarse
            </button>
            <p className="pt-4">
              ¿Ya tienes una cuenta? <Link href="/login"><span className="text-green-700"> Inicia sesión aquí</span></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
