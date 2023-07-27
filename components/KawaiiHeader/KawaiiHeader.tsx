import React, { useState, useEffect } from 'react';
import { Confirm } from 'semantic-ui-react';

import  AnimatedHeaderProps from './AnimatedHeader';
import ColoredHeaderProps from './ColoredHeader';
import ModalHeaderContent from './ModalHeaderContent';

const KawaiiHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const closeModal = () => setModalOpen(false);
  const toggleVisible = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    if (count === 4) {
      setModalOpen(true);
    }
  }, [count]);

  return (
    <div className="container">
      
      {count >= 4 ? (
        <ColoredHeaderProps onClick={() => {}} onComplete={() => { 
          setCount(0);
        }} />
      ) : (
        <AnimatedHeaderProps onClick={toggleVisible} onComplete={toggleVisible} />
      )}

      <Confirm
        open={modalOpen}
        content={ModalHeaderContent}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
      />

      <style jsx>
        {`
          .container {
            margin: 2rem 0;
          }
          .container :global(.header) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default KawaiiHeader;
