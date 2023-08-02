import React, { useState } from 'react';
import { Header, Transition, Confirm } from 'semantic-ui-react'
import { CSymbol } from '@components/SVGIcons';

type AnimatedHeaderProps = {
  onClick: () => void;
  onComplete: () => void;
};

const AnimatedHeader = ({ onClick, onComplete }: AnimatedHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHeaderClick = () => {
    setIsVisible(!isVisible);
    onClick();
  };

  const handleTransitionComplete = () => {
    if (!isVisible) {
      onComplete();
    }
  };

  return (


<div className='collapse h-0 sm:visible sm:h-fit'>

    <Header size="huge" as="h1" onClick={handleHeaderClick} className="header-container flex flex-col ">
    <div className="upper-text">
      Art by Christian Mora
    </div>
    <div className="csymbol-container">
      <Transition
        animation="jiggle"
        visible={isVisible}
        duration={900}
        onComplete={handleTransitionComplete}
      >
        <CSymbol size="48px" />
      </Transition>
    </div>
    <div className="lower-text">
      Art
    </div>


  </Header>
  
</div>
  );
};

export default AnimatedHeader;
