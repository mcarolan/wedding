import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, chrisGuestId, idFor } from "./shared";
import { useFormContext } from "react-hook-form";

export function Starter(props: FormComponentProps) {
    if (props.guest.id == chrisGuestId) {
        return veganStarter(props);
    }
    else {
        switch (props.guest.guestType) {
            case GuestType.AllDay:
                return allDayStarter(props);
            case GuestType.Child:
                return childStarter(props);
            case GuestType.EveningOnly:
                return <></>;
        }
    }
}

function onStarterChange(props: FormComponentProps) {
    return (e: ChangeEvent<HTMLInputElement>) => {
        const newGuest: GuestInfo = {
            ...props.guest,
            starter: e.target.value
        };
        props.onGuestInfoUpdated(newGuest);
    };
}

function veganStarter(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide starter option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("starter-label", guest)}>Starter:
            <span className="servedwith">Served with Bread Rolls and Butter</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("starter-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "VEGAN"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="VEGAN" id={idFor("starter-soup-veg", guest)} />
                <label htmlFor={idFor("starter-soup-veg", guest)}>
                    Spiced Butternut Squash Soup
                    <span className="dietary">Vegan, Nut Trace Free</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "NA"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="NA" id={idFor("starter-na", guest)} />
                <label htmlFor={idFor("starter-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}

function allDayStarter(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide starter option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("starter-label", guest)}>Starter:
            <span className="servedwith">Served with Bread Rolls and Butter</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("starter-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "A"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="A" id={idFor("starter-soup", guest)} />
                <label htmlFor={idFor("starter-soup", guest)}>
                    Spiced Butternut Squash Soup with Smoky Chorizo 🐷
                    <span className="dietary">Egg Free, Gluten Free, Nut Trace Free</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "B"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="B" id={idFor("starter-soup-veg", guest)} />
                <label htmlFor={idFor("starter-soup-veg", guest)}>
                    Spiced Butternut Squash Soup
                    <span className="dietary">Vegetarian, Egg Free, Gluten Free, Nut Trace Free</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "NA"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="NA" id={idFor("starter-na", guest)} />
                <label htmlFor={idFor("starter-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}

function childStarter(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide starter option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("starter-label", guest)}>Starter:
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("starter-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "A"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="A" id={idFor("starter-maccheese", guest)} />
                <label htmlFor={idFor("starter-maccheese", guest)}>Mini Mac &amp; Cheese 🧀</label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.start`, { required: errorMessage })} checked={guest.starter == "NA"} onChange={onStarterChange(props)} type="radio" name={idFor("starter-radio", guest)} value="NA" id={idFor("starter-na", guest)} />
                <label htmlFor={idFor("starter-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}

