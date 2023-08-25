import React, { ChangeEvent } from "react";
import { GuestInfo, GuestType } from "../accessCodeEntry";
import { FormComponentProps, chrisGuestId, idFor } from "./shared";
import { useFormContext } from "react-hook-form";

export function MainCourse(props: FormComponentProps) {
    if (props.guest.id == chrisGuestId) {
        return veganPie(props)
    }
    else {
        switch (props.guest.guestType) {
            case GuestType.AllDay:
                return pie(props);
            case GuestType.Child:
                return childMain(props);
            case GuestType.EveningOnly:
                return <></>;
        }
    }
}

function onMainCourseChange(props: FormComponentProps) {
    return (e: ChangeEvent<HTMLInputElement>) => {
        const newGuest: GuestInfo = {
            ...props.guest,
            main: e.target.value
        };
        props.onGuestInfoUpdated(newGuest);
    };
}


function veganPie(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide pie option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("pie-label", guest)}>
            Pie:
            <span className="servedwith">Served with a Red Wine Gravy, Mustard Mash and Vegetables</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("pie-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "VEGAN-A"} type="radio" name={idFor("main-radio", guest)} value="VEGAN-A" id={idFor("pie-leek", guest)} />
                <label htmlFor={idFor("pie-leek", guest)}>Leek &amp; Potato Pie 🥔</label>
                <span className="dietary">Vegan</span>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "VEGAN-B"} type="radio" name={idFor("main-radio", guest)} value="VEGAN-B" id={idFor("pie-veg", guest)} />
                <label htmlFor={idFor("pie-veg", guest)}>Vegetable Pie 🥕</label>
                <span className="dietary">Vegan</span>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "NA"} type="radio" name={idFor("main-radio", guest)} value="NA" id={idFor("main-na", guest)} />
                <label htmlFor={idFor("main-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}

function pie(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide pie option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("pie-label", guest)}>
            Pie:
            <span className="servedwith">Served with a Red Wine Gravy, Mustard Mash, Mac &amp; Cheese and Vegetables</span>
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("pie-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "A"} type="radio" name={idFor("main-radio", guest)} value="A" id={idFor("pie-chicken", guest)} />
                <label htmlFor={idFor("pie-chicken", guest)}>Chicken &amp; Leek 🐔</label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "B"} type="radio" name={idFor("main-radio", guest)} value="B" id={idFor("pie-beef", guest)} />
                <label htmlFor={idFor("pie-beef", guest)}>Steak &amp; Merlot 🐮 🍷</label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "C"} type="radio" name={idFor("main-radio", guest)} value="C" id={idFor("pie-cheese", guest)} />
                <label htmlFor={idFor("pie-cheese", guest)}>Cheese &amp; Onion 🧀 🧅</label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "NA"} type="radio" name={idFor("main-radio", guest)} value="NA" id={idFor("main-na", guest)} />
                <label htmlFor={idFor("main-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}

function childMain(props: FormComponentProps) {
    const guest = props.guest;
    const errorMessage = `Provide main course option for ${props.guest.name}`;
    const { register } = useFormContext();

    return <>
        <div className="form-divider"></div>
        <div className="radio-label" id={idFor("main-label", guest)}>
            Main:
        </div>
        <div className="radio-group" role="radiogroup" aria-labelledby={idFor("main-label", guest)}>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "A"} type="radio" name={idFor("main-radio", guest)} value="A" id={idFor("main-fish", guest)} />
                <label htmlFor={idFor("main-fish", guest)}>Fish Goujons 🐟
                    <span className="servedwith">Served with Chunky Chips and Mushy Peas</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "B"} type="radio" name={idFor("main-radio", guest)} value="B" id={idFor("main-sausages", guest)} />
                <label htmlFor={idFor("main-sausages", guest)}>Pork Sausages with Creamy Buttered Mash
                    <span className="servedwith">Served with Peas and Gravy</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "C"} type="radio" name={idFor("main-radio", guest)} value="C" id={idFor("main-burger", guest)} />
                <label htmlFor={idFor("main-burger", guest)}>Bean Burger
                    <span className="servedwith">Served with Sweet Potato Wedges and Baked Beans</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.main`, { required: errorMessage })} onChange={onMainCourseChange(props)} checked={guest.main == "NA"} type="radio" name={idFor("main-radio", guest)} value="NA" id={idFor("main-na", guest)} />
                <label htmlFor={idFor("main-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}