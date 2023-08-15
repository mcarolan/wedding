import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AccessCodeEntry, GuestDetails } from './accessCodeEntry';
import { GuestForm } from './guestForm';

function App() {

  const [guestDetails, setGuestDetails] = useState<GuestDetails>();

  function onAccessCodeSuccess(guestDetails: GuestDetails): void {
    setGuestDetails(guestDetails);
  }

  return (
    <>
      {guestDetails ? (<GuestForm guestDetails={guestDetails} />) : (<AccessCodeEntry onSuccess={onAccessCodeSuccess} />)}
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}