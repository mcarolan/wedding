import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, idFor } from "./shared";

export function Dessert(props: FormComponentProps) {
    switch (props.guest.guestType) {
        case GuestType.AllDay:
            return allDayDessert(props);
        case GuestType.Child:
            return childDessert(props);
        case GuestType.EveningOnly:
            return <></>;
    }
}

function changeDessert(props: FormComponentProps) {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const newGuest: GuestInfo = {
            ...props.guest,
            dessert: event.target.value
        };
        props.onGuestInfoUpdated(newGuest);
    }
}

function dessertNotApplicable(props: FormComponentProps) {
    return <><div>
        <input type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "NA"} name={idFor("dessert-radio", props.guest)} value="NA" id={idFor("dessert-na", props.guest)} />
        <label htmlFor={idFor("dessert-na", props.guest)}>I'd like an alternative due to dietary requirements 🙅</label>
    </div></>;
}

function allDayDessert(props: FormComponentProps) {
    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("dessert-label", props.guest)}>
            Dessert:
            <span className="servedwith">Served with fresh cream</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", props.guest)}>
            <div>
                <input type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "A"} name={idFor("dessert-radio", props.guest)} value="A" id={idFor("dessert-tart", props.guest)} />
                <label htmlFor={idFor("dessert-tart", props.guest)}>
                    Traditional Tart Au Citron with Kirsch Marinated Black Cherries 🍋 🍒
                </label>
            </div>
            {dessertNotApplicable(props)}
        </div>
    </>;
}

function childDessert(props: FormComponentProps) {
    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("dessert-label", props.guest)}>
            Dessert:
            <span className="servedwith">Served with sauces 🤷‍♂️</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", props.guest)}>
            <div>
                <input type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "A"} name={idFor("dessert-radio", props.guest)} value="A" id={idFor("dessert-ice-cream", props.guest)} />
                <label htmlFor={idFor("dessert-ice-cream", props.guest)}>
                    Ice Cream Surprise 🍨🤔
                </label>
            </div>
            {dessertNotApplicable(props)}
        </div>
    </>;
}