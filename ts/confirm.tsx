import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AccessCodeEntry, GuestDetails } from './accessCodeEntry';
import { GuestForm } from './guestForm';

function App() {

  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [accessCode, setAccessCode] = useState<string>();
  const [guestDetails, setGuestDetails] = useState<GuestDetails>();

  function onAccessCodeSuccess(accessCode: string, guestDetails: GuestDetails): void {
    setGuestDetails(guestDetails);
    setAccessCode(accessCode);
  }

  function onSubmissionComplete() {
    setSubmissionComplete(true);
  }

  function needToSubmitView() {
    return <>{guestDetails && accessCode ? (<GuestForm onSubmissionComplete={onSubmissionComplete} accessCode={accessCode} guestDetails={guestDetails} />) : (<AccessCodeEntry onSuccess={onAccessCodeSuccess} />)}</>;
  }

  function submissionCompleteView() {
    return <>
      <p>Thanks for letting us know! 😃</p>
      <p>Please feel free to come back before 15th January 2024 to update any information.</p>
      <p>We will get in contact with you if you've indicated any special dietary needs.</p>
    </>;
  }

  return (
    <>
      {submissionComplete ? submissionCompleteView() : needToSubmitView() }
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}