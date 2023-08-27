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
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-A"} name={idFor("dessert-radio", props.guest)} value="VEGAN-A" id={idFor("dessert-tart", props.guest)} />
                <label htmlFor={idFor("dessert-tart", props.guest)}>
                    Brownie &amp; Ice Cream 🍨
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-B"} name={idFor("dessert-radio", props.guest)} value="VEGAN-B" id={idFor("dessert-b", props.guest)} />
                <label htmlFor={idFor("dessert-b", props.guest)}>
                    Deconstructed Passion Fruit Cheesecake 🤔
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-C"} name={idFor("dessert-radio", props.guest)} value="VEGAN-C" id={idFor("dessert-c", props.guest)} />
                <label htmlFor={idFor("dessert-c", props.guest)}>
                    Apple &amp; Blackberry Crumble with Soya Custard 🍮
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-D"} name={idFor("dessert-radio", props.guest)} value="VEGAN-D" id={idFor("dessert-d", props.guest)} />
                <label htmlFor={idFor("dessert-d", props.guest)}>
                    Apple &amp; Rhubarb Crumble with Soya Custard 🍮
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-E"} name={idFor("dessert-radio", props.guest)} value="VEGAN-E" id={idFor("dessert-e", props.guest)} />
                <label htmlFor={idFor("dessert-e", props.guest)}>
                   Passion Fruit Sorbet with Chargrilled Pineapple &amp; Malibu Syrup 🍍
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-F"} name={idFor("dessert-radio", props.guest)} value="VEGAN-F" id={idFor("dessert-f", props.guest)} />
                <label htmlFor={idFor("dessert-f", props.guest)}>
                    Soya Crème Brûlée 🔥
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-G"} name={idFor("dessert-radio", props.guest)} value="VEGAN-G" id={idFor("dessert-g", props.guest)} />
                <label htmlFor={idFor("dessert-g", props.guest)}>
                    Soya Raspberry Crème Brûlée 🔥🍓
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-H"} name={idFor("dessert-radio", props.guest)} value="VEGAN-H" id={idFor("dessert-h", props.guest)} />
                <label htmlFor={idFor("dessert-h", props.guest)}>
                    Fresh Fruit Salad 🥝
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-I"} name={idFor("dessert-radio", props.guest)} value="VEGAN-I" id={idFor("dessert-i", props.guest)} />
                <label htmlFor={idFor("dessert-i", props.guest)}>
                    Poached Pear 🍐
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-J"} name={idFor("dessert-radio", props.guest)} value="VEGAN-J" id={idFor("dessert-j", props.guest)} />
                <label htmlFor={idFor("dessert-j", props.guest)}>
                    Chocolate Orange Tart with Dairy Free Ice Cream 🟠
                    <span className="dietary">Vegan</span>
                </label>
            </div>
            <div>
                <input {...register(`guests.${props.guest.id}.dessert`, { required: errorMessage })} type="radio" onChange={changeDessert(props)} checked={props.guest.dessert == "VEGAN-K"} name={idFor("dessert-radio", props.guest)} value="VEGAN-K" id={idFor("dessert-k", props.guest)} />
                <label htmlFor={idFor("dessert-k", props.guest)}>
                    Fallen Apple 🔞🍏
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