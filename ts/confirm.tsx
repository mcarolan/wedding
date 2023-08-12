import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AccessCodeEntry, GuestDetails } from './accessCodeEntry';
import { GuestForm } from './guestForm';

function App() {

  const [guestDetails, setGuestDetails] = useState(undefined);
  
  function onAccessCodeSuccess(guestDetails: GuestDetails): void {
    setGuestDetails(guestDetails);
  }

  return (
    <>
      { guestDetails ? (<GuestForm guestDetails={guestDetails} />) : (<AccessCodeEntry onSuccess={onAccessCodeSuccess} />) }
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
