import { GuestInfo, GuestType } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface SongProps {
    guest: GuestInfo
}

export function Song(props: SongProps) {
    const guest = props.guest;

    if (guest.guestType == GuestType.Child) {
        return <></>;
    }
    else {
        return <>
            <label htmlFor={idFor("song", guest)}>What song would get you on the dance-floor?</label>
            <textarea id={idFor("song", guest)} rows="5" placeholder="Feel free to add a few 💃..."></textarea>
        </>
    }
}