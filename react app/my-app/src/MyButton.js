import React, { useRef } from 'react';
import Button from '@mui/material/Button';

function MyButton() {
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    // ... other button click logic
    buttonRef.current.focusVisible(); // Manually trigger focusVisible styles
  };

  return (
    <Button
      ref={buttonRef}
      variant="contained"
      onClick={handleButtonClick}
      focusVisibleClassName="my-custom-focus-class"
    >
      Click Me
    </Button>
  );
}