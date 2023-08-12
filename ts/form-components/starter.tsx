import { GuestInfo, GuestType } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface StarterProps {
    guest: GuestInfo
}

export function Starter(props: StarterProps) {
    switch (props.guest.guestType) {
        case GuestType.AllDay: 
            return allDayStarter(props.guest);
        case GuestType.Child:
            return childStarter(props.guest);
        case GuestType.EveningOnly:
            return <></>;
    }
}   

function starterNotApplicable(guest: GuestInfo) {
    return <><div>
        <input type="radio" name={idFor("starter-radio", guest)} value="NA" id={idFor("starter-na", guest)} />
        <label htmlFor={idFor("starter-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
    </div></>;
}

function allDayStarter(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("starter-label", guest)}>Starter:
            <span class="servedwith">Served with Bread Rolls and Butter</span>
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("starter-label", guest)}>
            <div>
                <input type="radio" name={idFor("starter-radio", guest)} value="A" id={idFor("starter-soup", guest)} />
                <label htmlFor={idFor("starter-soup", guest)}>
                    Leek and Potato Soup garnished with Deep Fried Leeks 🥔
                    <span class="dietary">Egg Free, Gluten Free, Nut Trace Free</span>
                </label>
            </div>
            {starterNotApplicable(guest)}
        </div>
    </>;
}

function childStarter(guest: GuestInfo) {
    return <>
        <div class="radio-label" id={idFor("starter-label", guest)}>Starter:
        </div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("starter-label", guest)}>
            <div>
                <input type="radio" name={idFor("starter-radio", guest)} value="A" id={idFor("starter-maccheese", guest)} />
                <label htmlFor={idFor("starter-maccheese", guest)}>Mini Mac &amp; Cheese 🧀</label>
            </div>
            {starterNotApplicable(guest)}
        </div>
    </>;
}

