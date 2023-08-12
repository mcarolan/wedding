import { GuestInfo, GuestType } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface DessertProps {
    guest: GuestInfo
}

export function Dessert(props: DessertProps) {
    switch (props.guest.guestType) {
        case GuestType.AllDay:
            return allDayDessert(props.guest);
        case GuestType.Child:
            return childDessert(props.guest);
        case GuestType.EveningOnly:
            return <></>;
    }
}

function dessertNotApplicable(guest: GuestInfo) {
    return <><div>
        <input type="radio" name={idFor("dessert-radio", guest)} value="NA" id={idFor("dessert-na", guest)} />
        <label htmlFor={idFor("dessert-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
    </div></>;
}

function allDayDessert(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("dessert-label", guest)}>
            Dessert:
            <span class="servedwith">Served with fresh cream</span>
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", guest)}>
            <div>
                <input type="radio" name={idFor("dessert-radio", guest)} value="A" id={idFor("dessert-tart", guest)} />
                <label htmlFor={idFor("dessert-tart", guest)}>
                    Traditional Tart Au Citron with Kirsch Marinated Black Cherries 🍋 🍒
                    <span class="dietary">Gluten Free?</span>
                </label>
            </div>
            {dessertNotApplicable(guest)}
        </div>
    </>;
}

function childDessert(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("dessert-label", guest)}>
            Dessert:
            <span class="servedwith">Served with sauces 🤷‍♂️</span>
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("dessert-label", guest)}>
            <div>
                <input type="radio" name={idFor("dessert-radio", guest)} value="A" id={idFor("dessert-ice-cream", guest)} />
                <label htmlFor={idFor("dessert-ice-cream", guest)}>
                    Ice Cream Surprise 🍨🤔
                </label>
            </div>
            {dessertNotApplicable(guest)}
        </div>
    </>;
}