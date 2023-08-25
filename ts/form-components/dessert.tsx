import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, chrisGuestId, idFor } from "./shared";
import { useFormContext } from "react-hook-form";

export function Dessert(props: FormComponentProps) {
    if (props.guest.id == chrisGuestId) {
        return veganDessert(props);
    }
    else {
        switch (props.guest.guestType) {
            case GuestType.AllDay:
                return allDayDessert(props);
            case GuestType.Child:
                return childDessert(props);
            case GuestType.EveningOnly:
                return <></>;
        }
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

function veganDessert(props: FormComponentProps) {
    const errorMessage = `Provide dessert option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("dessert-label", props.guest)}>
            Dessert:
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", props.guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN"} name={idFor("dessert-radio", props.guest)} value="VEGAN" id={idFor("dessert-tart", props.guest)} />
                <label htmlFor={idFor("dessert-tart", props.guest)}>
                    Some form of dessert 🤷‍♂️
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "NA"} name={idFor("dessert-radio", props.guest)} value="NA" id={idFor("dessert-na", props.guest)} />
                <label htmlFor={idFor("dessert-na", props.guest)}>
                    I'd like an alternative due to dietary requirements 🙅
                </label>
            </div>
        </div>
    </>;

}

function allDayDessert(props: FormComponentProps) {
    const errorMessage = `Provide dessert option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("dessert-label", props.guest)}>
            Dessert:
            <span className="servedwith">Served with fresh cream</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", props.guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "A"} name={idFor("dessert-radio", props.guest)} value="A" id={idFor("dessert-tart", props.guest)} />
                <label htmlFor={idFor("dessert-tart", props.guest)}>
                    Traditional Tart Au Citron with Kirsch Marinated Black Cherries 🍋 🍒
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "NA"} name={idFor("dessert-radio", props.guest)} value="NA" id={idFor("dessert-na", props.guest)} />
                <label htmlFor={idFor("dessert-na", props.guest)}>
                    I'd like an alternative due to dietary requirements 🙅
                </label>
            </div>
        </div>
    </>;
}

function childDessert(props: FormComponentProps) {
    const errorMessage = `Provide dessert option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("dessert-label", props.guest)}>
            Dessert:
            <span className="servedwith">Served with sauces 🤷‍♂️</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", props.guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "A"} name={idFor("dessert-radio", props.guest)} value="A" id={idFor("dessert-ice-cream", props.guest)} />
                <label htmlFor={idFor("dessert-ice-cream", props.guest)}>
                    Ice Cream Surprise 🍨🤔
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "NA"} name={idFor("dessert-radio", props.guest)} value="NA" id={idFor("dessert-na", props.guest)} />
                <label htmlFor={idFor("dessert-na", props.guest)}>
                    I'd like an alternative due to dietary requirements 🙅
                </label>
            </div>
        </div>
    </>;
}