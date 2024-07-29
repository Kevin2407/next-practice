// pages/login.tsx

'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit');
  };

  const onPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('change', name, value);
  };

  return (

    <div className="w-full md:w-1/2 flex flex-col pt-20 " style={{ boxShadow: '0 0 10px 3px #888'}}>
        <div className="flex flex-col bg-white items-center md:justify-start md:pt-0 md:px-24 lg:px-32 rounded-t-[50px] px-8 pt-8 h-full">
          <h2 className="w-full px-4 pb-8 text-4xl text-primary font-bold max-w-lg mx-auto">
            Ingreso
          </h2>
          <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto px-4">
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
            <div className="w-full mb-3 pt-4 md:mb-0">
              <label className="block text-lg text-primary">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="text-black outline-none border-b border-b-gray-400 rounded-none w-full"
                  onChange={handleChange}
                  placeholder="******"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-2 mr-2"
                  onClick={onPasswordClick}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="flex flex-col pt-4 text-center justify-center">
              <button
                className="capitalize font-normal text-lg shadow-lg rounded-btn bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-white border-opacity-[0.25] text-white w-full mb-3"
                type="submit"
              >
                Ingresar
              </button>
              Si no tenés una cuenta <Link href="/login/register"><span className="text-green-700 pt-4"> registrate acá</span></Link>
                <Link href="/login/forgot"><span className="text-green-700 mt-2">¿Olvidaste tu contraseña?</span></Link>
            </div>
          </form>
        </div>
      </div>

  );
};

export default Login;




// import LoginForm from '@/app/ui/login-form';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Login',
// };

// export default function LoginPage() {
//   return (
//     <main className="flex items-center justify-center md:h-screen mx-auto">
//       <LoginForm />
//     </main>
//   );
// }