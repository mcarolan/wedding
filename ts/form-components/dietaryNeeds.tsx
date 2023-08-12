import { GuestInfo } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface DietaryNeedsProps {
    guest: GuestInfo
}

export function DietaryNeeds(props: DietaryNeedsProps) {
    const guest = props.guest;
    return <>
        <label htmlFor={idFor("dietary-needs", guest)}>Additional dietary needs or allergens:</label>
        <textarea id={idFor("dietary-needs", guest)} rows="5" placeholder="Is there anything we should let the caterers know about?"></textarea>
    </>;
}