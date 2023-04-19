import { useEffect } from 'react';

export const Modal = ({ imageLarge, onClose }) => {
  // useEffect(() => { function that will execute }, [ condition on which the function will execute ])
  useEffect(() => {
    // console.log('Mounting phase');
    window.addEventListener('mousedown', handleClose);
    window.addEventListener('keydown', handleClose);

    return () => {
      // console.log('Unmounting phase');
      window.removeEventListener('mousedown', handleClose);
      window.removeEventListener('keydown', handleClose);
    };
  });

  const handleClose = event => {
    if (event.code === 'Escape' || 'click') {
      return onClose();
    }
  };

  // const { imageLarge } = this.props;
  return (
    <div className="Overlay" onClose={onClose}>
      <div className="Modal">
        <img src={imageLarge} alt="MagnifiedImage" />
      </div>
    </div>
  );
};
