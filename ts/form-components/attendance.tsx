import React from "react";
import { GuestInfo } from "../accessCodeEntry";
import { FormComponentProps, idFor } from "./shared";
import { ChangeEvent } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

export function Attendance(props: FormComponentProps) {
    const guest = props.guest;

    function changeAttendance(event: ChangeEvent<HTMLInputElement>) {
        const newGuest: GuestInfo = {
            ...guest,
            attendance: event.target.value == "true"
        };
        props.onGuestInfoUpdated(newGuest);
    }

    const errorMessage = `Provide attendance for ${guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="radio-label" id={idFor("attendance-label", guest)}>Attendance:</div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("attendance-label", guest)}>
            <div>
                <input {...register(`guests.${guest.id}.attendance`, { required: errorMessage })} type="radio" checked={guest.attendance == true} onChange={changeAttendance} name={idFor("attendance-radio", guest)} value="true" id={idFor("able-to-attend", guest)} />
                <label htmlFor={idFor("able-to-attend", guest)}>I'd be delighted to attend ✅</label>
            </div>
            <div>
                <input  {...register(`guests.${guest.id}.attendance`, { required: errorMessage })} type="radio" checked={guest.attendance == false} onChange={changeAttendance} name={idFor("attendance-radio", guest)} value="false" id={idFor("unable-to-attend", guest)} />
                <label htmlFor={idFor("unable-to-attend", guest)}>Regretfully, I'm unable to attend ❎</label>
            </div>
        </div>
    </>;
}