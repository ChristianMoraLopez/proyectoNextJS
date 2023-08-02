import React, { useState } from 'react';
import { Header, Transition } from 'semantic-ui-react';
import { PosMeColoreo } from '@components/SVGIcons';

type ColoredHeaderProps = {
  onClick: () => void;
  onComplete: () => void;
};

const ColoredHeader = ({ onClick , }: ColoredHeaderProps) => 
{
  const [isVisible, setIsVisible] = useState(true);

  const handleHeaderClick = () => {
    setIsVisible(!isVisible);
    onClick();
  };

  return (
    <div className='collapse h-0 sm:visible sm:h-fit'>
    <Header size="huge" as="h1" onClick={handleHeaderClick} className="flex flex-col">
      <div className="upper-text">Art by Christian Mora</div>
      <div className="csymbol-container">
        <Transition
          animation="pulse"
          visible={isVisible}
          duration={900}
        >
          <PosMeColoreo size="48px" />
        </Transition>
      </div>
      <div className="lower-text">Art</div>
    </Header>

      </div>
  );
};

export default ColoredHeader;
