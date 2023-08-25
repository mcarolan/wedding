import React, { MouseEvent } from "react";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { LoadingSpinner } from "./loadingSpinner";

export enum GuestType {
  AllDay = "AD",
  EveningOnly = "EO",
  Child = "C"
}

export interface GuestInfo {
  id: string,
  name: string,
  guestType: GuestType,
  attendance: boolean | undefined,
  starter: string | undefined,
  main: string | undefined,
  dessert: string | undefined,
  eveningFood: string | undefined,
  dietaryNeeds: string | undefined,
  song: string | undefined
}

interface CheckAccessCodeResponse {
  accessCodeValid: boolean,
  emailAddress: string | undefined,
  guests: GuestInfo[]
}

export interface GuestDetails {
  emailAddress: string | undefined,
  guests: GuestInfo[]
}

export interface AccessCodeEntryProps {
  onSuccess: (string, GuestDetails) => void;
}

export function AccessCodeEntry(props: AccessCodeEntryProps) {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState<string>();
  const [requestInProgress, setRequestInProgress] = useState(false);

  function handleAccessCodeChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setAccessCode(event.target.value);
  }

  async function handleCheckAccessCode(event: MouseEvent<HTMLInputElement>) {
    event.preventDefault();

    const sanitisedAccessCode = accessCode.trim().toUpperCase();

    try {
      setRequestInProgress(true);
      const response = await axios.get("https://script.google.com/macros/s/AKfycbwI68QJKsrTaC5GL3zNbBqAjjYFAEQai2ttU-VpQxpJvjAhKi4TTeO4lZxMW76xyeHvYQ/exec", {
        params: { accessCode: sanitisedAccessCode },
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' //hack to stop a preflight request
        }
      });

      const body = response.data as CheckAccessCodeResponse;

      if (body.accessCodeValid) {
        const guestDetails: GuestDetails = {
          emailAddress: body.emailAddress,
          guests: body.guests
        };
        props.onSuccess(sanitisedAccessCode, guestDetails);
      }
      else {
        setAccessCode("");
        setError((_) => "We don't recognise that access code. Please check it and try again. Get in contact with us if you need help.");
      }

    }
    catch (e) {
      console.error("web service error");
      console.error(e);
      setError((_) => "We're having a bit of trouble at the moment. Please try again later, and let us know if this problem persists.");
    }
    finally {
      setRequestInProgress(false);
    }
  }

  return (
    <>
      <LoadingSpinner isLoading={requestInProgress} />
      <p>Thanks for getting back to us.</p>
      <p>To begin, please enter the access code from your invite:</p>
      <form>
        <div className="inline-section">
          <label htmlFor="accessCode">Access Code: </label>
          <input className="accessCode" autoComplete="off" type="text" id="accessCode" value={accessCode} onChange={handleAccessCodeChange} />
        </div>
        {error && <div className="errors">
          {error}
        </div>}
        <div id="submit-container">
          <div className="button-container">
            <div className="button" onTouchStart={(_) => { }}>
              <input type="submit" disabled={requestInProgress} value="Check" onClick={handleCheckAccessCode} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}