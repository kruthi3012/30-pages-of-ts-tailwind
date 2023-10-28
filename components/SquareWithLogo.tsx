import React from 'react';

interface SquareWithLogoProps {
  logoSrc: string; // Source URL of the logo image
}

const SquareWithLogo: React.FC<SquareWithLogoProps> = ({ logoSrc }) => {
  return (
    <div className="bg-blue-500 rounded-lg w-64 h-64 flex items-center p-8 justify-center mt-2">
      <img src={logoSrc} alt="Logo" className="w-36 h-36" />
    </div>
  );
};

export default SquareWithLogo;
