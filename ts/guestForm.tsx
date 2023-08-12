import { GuestDetails } from "./accessCodeEntry";
import { Attendance } from "./form-components/attendance";
import { Dessert } from "./form-components/dessert";
import { DietaryNeeds } from "./form-components/dietaryNeeds";
import { EveningFood } from "./form-components/eveningFood";
import { Main } from "./form-components/main";
import { Song } from "./form-components/song";
import { Starter } from "./form-components/starter";

export interface GuestFormProps {
    guestDetails: GuestDetails
}


export function GuestForm(props: GuestFormProps) {
    return <>
        <div>Thanks! We found your invite.</div>
        <div>{props.guestDetails.guests.map((guestInfo) =>
            <div class="form-section">
                <h1>{ guestInfo.name }</h1>
                
                <Attendance guest={guestInfo} />

                <Starter guest={guestInfo} />

                <Main guest={guestInfo} />

                <Dessert guest={guestInfo} />

                <EveningFood guest={guestInfo} />

                <DietaryNeeds guest={guestInfo} />
                
                <Song guest={guestInfo} />
            </div>)
        }</div>
    </>;
}