import React, { ChangeEvent } from "react";
import { FormComponentProps, idFor } from "./shared";
import { GuestInfo } from "../accessCodeEntry";

export function DietaryNeeds(props: FormComponentProps) {
    const guest = props.guest;

    function onDietaryNeedsChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const newGuest: GuestInfo = {
            ...guest,
            dietaryNeeds: e.target.value
        };
        props.onGuestInfoUpdated(newGuest);
    }

    return <>
        <div className="form-divider"></div>
        <label htmlFor={idFor("dietary-needs", guest)}>Dietary restrictions or allergens:</label>
        <textarea onChange={onDietaryNeedsChange} id={idFor("dietary-needs", guest)} rows={5} placeholder="Is there anything we should let the caterers know about?" value={props.guest.dietaryNeeds} maxLength={1000}></textarea>
    </>;
}