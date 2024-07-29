// components/SideImage.tsx

import React from 'react';
import Image from 'next/image';
import side from '@/public/login/side.jpg';

const SideImage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="w-full flex  h-screen ">
      <div className="w-1/2 hidden md:flex bg-[#f5f5f5] items-center h-full justify-center">
        <Image
          src={side}
          width={400}
          height={800}
          className="hidden md:block"
          alt="side image"
        />
      </div>
      <>{children}</>
    </main>
  );
};

export default SideImage;
