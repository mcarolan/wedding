import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, adamGuestId, idFor } from "./shared";

export function Song(props: FormComponentProps) {
    const guest = props.guest;

    const songValue = props.guest.id == adamGuestId ? "The entire back catalogue of Queen" : guest.song;
    const isDisabled = props.guest.id == adamGuestId;

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
            <div className="form-divider"></div>
            <label htmlFor={idFor("song", guest)}>What song would get you on the dance-floor?</label>
            <textarea onChange={onSongChange} disabled={isDisabled} value={songValue} id={idFor("song", guest)} rows={5} placeholder="Feel free to add a few 💃..." maxLength={500}></textarea>
        </>
    }
}