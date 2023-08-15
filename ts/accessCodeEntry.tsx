import React, { MouseEvent } from "react";
import { useState, ChangeEvent, FormEvent } from 'react';

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
    onSuccess: (GuestDetails) => void;
}

export function AccessCodeEntry(props: AccessCodeEntryProps) {
    const [accessCode, setAccessCode] = useState('');

    function handleAccessCodeChange(event: ChangeEvent<HTMLInputElement>) {
      setAccessCode(event.target.value);
    }
  
    function handleCheckAccessCode(event: MouseEvent) {
      event.preventDefault();

      const guest1: GuestInfo = {
          id: "1",
          name: 'Laura',
          guestType: GuestType.AllDay,
          attendance: undefined,
          starter: undefined,
          main: undefined,
          dessert: undefined,
          eveningFood: undefined,
          dietaryNeeds: undefined,
          song: undefined
      };

      const guest2: GuestInfo = {
          id: "2",
          name: 'Martin',
          guestType: GuestType.AllDay,
          attendance: undefined,
          starter: undefined,
          main: undefined,
          dessert: undefined,
          eveningFood: undefined,
          dietaryNeeds: undefined,
          song: undefined
      };

      const childGuest: GuestInfo = {
        id: "3",
        name: 'Ruby',
        guestType: GuestType.Child,
        attendance: undefined,
        starter: undefined,
        main: undefined,
        dessert: undefined,
        eveningFood: undefined,
        dietaryNeeds: undefined,
        song: undefined
      };

      const eveningGuest: GuestInfo = {
        id: "4",
        name: 'ITV Person',
        guestType: GuestType.EveningOnly,
        attendance: undefined,
        starter: undefined,
        main: undefined,
        dessert: undefined,
        eveningFood: undefined,
        dietaryNeeds: undefined,
        song: undefined
      };


      const response: GuestDetails = {
          emailAddress: "foo@bar.com",
          guests: [
            guest1,
            guest2,
            childGuest,
            eveningGuest
          ]
      };
  
      props.onSuccess(response);
    }
  
    return (
      <>
          <p>Thanks for getting back to us.</p>
          <p>To begin, please enter the access code from your invite:</p>
          <label htmlFor="accessCode">Access Code: </label>
          <div><input type="text" id="accessCode" onChange={handleAccessCodeChange} /></div>
          <div><input type="button" onClick={handleCheckAccessCode} value="Check" /></div>
      </>
    );
}