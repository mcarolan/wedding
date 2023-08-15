import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, idFor } from "./shared";

export function Song(props: FormComponentProps) {
    const guest = props.guest;

    if (guest.guestType == GuestType.Child) {
        return <></>;
    }
    else {
        function onSongChange(e: ChangeEvent<HTMLTextAreaElement>) {
            const newGuest: GuestInfo = {
                ...guest,
                song: e.target.value
            };
            props.onGuestInfoUpdated(newGuest);
        }
        
        return <>
            <label htmlFor={idFor("song", guest)}>What song would get you on the dance-floor?</label>
            <textarea onChange={onSongChange} value={guest.song} id={idFor("song", guest)} rows={5} placeholder="Feel free to add a few 💃..."></textarea>
        </>
    }
}