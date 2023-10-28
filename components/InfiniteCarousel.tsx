import React from 'react';
import SquareWithLogo from './SquareWithLogo';

const InfiniteCarousel = () => {
  return (
      <div className='relative w-64 h-[56rem] rounded-lg overflow-hidden'>
        <div className='relative w-64 h-full flex flex-col animate-float-up'>
          <div className="infinite-carousel">
            <SquareWithLogo logoSrc="bitcoin.png"/>
            <SquareWithLogo logoSrc="ethereum.png"/>
            <SquareWithLogo logoSrc="polygon.png"/>
            <SquareWithLogo logoSrc="python.png"/>
            <SquareWithLogo logoSrc="solana.png"/>
            <SquareWithLogo logoSrc="bitcoin.png"/>
            <SquareWithLogo logoSrc="ethereum.png"/>
            <SquareWithLogo logoSrc="polygon.png"/>
            <SquareWithLogo logoSrc="python.png"/>
            <SquareWithLogo logoSrc="solana.png"/>
            <SquareWithLogo logoSrc="bitcoin.png"/>
            <SquareWithLogo logoSrc="ethereum.png"/>
            <SquareWithLogo logoSrc="polygon.png"/>
            <SquareWithLogo logoSrc="python.png"/>
            <SquareWithLogo logoSrc="solana.png"/>
            <SquareWithLogo logoSrc="bitcoin.png"/>
            <SquareWithLogo logoSrc="ethereum.png"/>
            <SquareWithLogo logoSrc="polygon.png"/>
            <SquareWithLogo logoSrc="python.png"/>
            <SquareWithLogo logoSrc="solana.png"/>
            <SquareWithLogo logoSrc="bitcoin.png"/>
            <SquareWithLogo logoSrc="ethereum.png"/>
            <SquareWithLogo logoSrc="polygon.png"/>
            <SquareWithLogo logoSrc="python.png"/>
            <SquareWithLogo logoSrc="solana.png"/>
          </div>
        </div>
      </div>
  );
};

export default InfiniteCarousel;
