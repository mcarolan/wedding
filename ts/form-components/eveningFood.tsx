import React, { ChangeEvent } from "react";
import { FormComponentProps, idFor } from "./shared";
import { GuestInfo } from "../accessCodeEntry";

export function EveningFood(props: FormComponentProps) {
    const guest = props.guest;

    function onChangeEveningFood(e: ChangeEvent<HTMLInputElement>) {
        const newGuest: GuestInfo = {
            ...guest,
            eveningFood: e.target.value
        };
        props.onGuestInfoUpdated(newGuest);
    }

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("evening-food-label", guest)}>Evening food:</div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("evening-food-label", guest)}>
            <div>
                <input type="radio" onChange={onChangeEveningFood} checked={props.guest.eveningFood == "A"} name={idFor("evening-radio", guest)} value="A" id={idFor("evening-butties", guest)} />
                <label htmlFor={idFor("evening-butties", guest)}>I'm happy with either a Fish Finger Buttie 🐟 or a Halloumi Buttie 🧀</label>
            </div>
            <div>
                <input type="radio" onChange={onChangeEveningFood} checked={props.guest.eveningFood == "NA"} name={idFor("evening-radio", guest)} value="NA" id={idFor("evening-na", guest)} />
                <label htmlFor={idFor("evening-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}