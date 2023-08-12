import { GuestInfo } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface EveningFoodProps {
    guest: GuestInfo
}

export function EveningFood(props: EveningFoodProps) {
    const guest = props.guest;
    return <>
        <div class="radio-label" id={idFor("evening-food-label", guest)}>Evening food:</div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("evening-food-label", guest)}>
            <div>
                <input type="radio" name={idFor("evening-radio", guest)} value="A" id={idFor("evening-butties", guest)} />
                <label htmlFor={idFor("evening-butties", guest)}>I'm happy with either a Fish Finger Buttie 🐟 or a Halloumi Buttie 🧀</label>
            </div>
            <div>
                <input type="radio" name={idFor("evening-radio", guest)} value="NA" id={idFor("evening-na", guest)} />
                <label htmlFor={idFor("evening-na", guest)}>I'd like an alternative due to dietary requirements 🙅</label>
            </div>
        </div>
    </>;
}