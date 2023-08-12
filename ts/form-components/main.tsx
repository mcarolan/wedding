import { GuestInfo, GuestType } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface MainProps {
    guest: GuestInfo
}

export function Main(props: MainProps) {
    switch (props.guest.guestType) {
        case GuestType.AllDay:
            return pie(props.guest);
        case GuestType.Child:
            return childMain(props.guest);
        case GuestType.EveningOnly:
            return <></>;
    }
}

function mainNotApplicable(guest: GuestInfo) {
    return <><div>
        <input type="radio" name={idFor("main-radio", guest)} value="NA" id={idFor("main-na", guest)} />
        <label htmlFor={idFor("main-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
    </div></>;
}

function pie(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("pie-label", guest)}>
            Pie:
            <span class="servedwith">Served with a Red Wine Gravy, Mustard Mash, Mac &amp; Cheese and Vegetables</span>
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("pie-label", guest)}>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="A" id={idFor("pie-chicken", guest)} />
                <label htmlFor={idFor("pie-chicken", guest)}>Chicken &amp; Leek 🐔</label>
            </div>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="B" id={idFor("pie-beef", guest)} />
                <label htmlFor={idFor("pie-beef", guest)}>Steak &amp; Merlot 🐮 🍷</label>
            </div>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="C" id={idFor("pie-cheese", guest)} />
                <label htmlFor={idFor("pie-cheese", guest)}>Cheese &amp; Onion 🧀 🧅</label>
            </div>
            {mainNotApplicable(guest)}
        </div>
    </>;
}

function childMain(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("main-label", guest)}>
            Main:
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("main-label", guest)}>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="A" id={idFor("main-fish", guest)} />
                <label htmlFor={idFor("main-fish", guest)}>Fish Goujons 🐟
                    <span class="servedwith">Served with Chunky Chips and Mushy Peas</span>
                </label>
            </div>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="B" id={idFor("main-sausages", guest)} />
                <label htmlFor={idFor("main-sausages", guest)}>Pork Sausages with Creamy Buttered Mash
                    <span class="servedwith">Served with Peas and Gravy</span>
                </label>
            </div>
            <div>
                <input type="radio" name={idFor("main-radio", guest)} value="C" id={idFor("main-burger", guest)} />
                <label htmlFor={idFor("main-burger", guest)}>Bean Burger
                    <span class="servedwith">Served with Sweet Potato Wedges and Baked Beans</span>
                </label>
            </div>
            {mainNotApplicable(guest)}
        </div>
    </>;
}