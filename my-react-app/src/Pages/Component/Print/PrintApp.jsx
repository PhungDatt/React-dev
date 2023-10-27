import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import Button from 'react-bootstrap/Button';

 function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      })
    }

    function handleAfterPrint() {
      setIsPrinting(false);
    }

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);

  return (
    <>
      <Button  onClick={() => window.print()} variant="light"  className="text-navbar" >XUẤT PDF</Button>{' '}
    
      
    </>
  );
}

export default PrintApp;