import { GuestDetails, GuestInfo } from "./accessCodeEntry";
import { Attendance } from "./form-components/attendance";
import { Dessert } from "./form-components/dessert";
import { DietaryNeeds } from "./form-components/dietaryNeeds";
import { EveningFood } from "./form-components/eveningFood";
import { MainCourse } from "./form-components/mainCourse";
import { Song } from "./form-components/song";
import { Starter } from "./form-components/starter";
import React, { useState } from "react";
import { cloneDeep } from 'lodash';

export interface GuestFormProps {
    guestDetails: GuestDetails
}

export function GuestForm(props: GuestFormProps) {
    const [guestInfos, setGuestInfos] = useState(cloneDeep(props.guestDetails.guests));

    function onGuestInfoUpdated(guestInfo: GuestInfo) {
        const guestIndex = guestInfos.findIndex((g) => g.id == guestInfo.id);
        if (guestIndex > -1) {
            const clone = cloneDeep(guestInfos);
            clone[guestIndex] = cloneDeep(guestInfo);
            setGuestInfos(clone);
        }
    }

    return <>
        <p>Thanks! We found your invite.</p>
        <p>Please provide us with an email address for your group. It'll only be used to convey important information.</p>

        <div className="inline-section">
            <label htmlFor="inline-address">
                Email address:
            </label>
            <input type="email" id="email-address" placeholder="email@provider.com" />
        </div>

        <div>{guestInfos.map((guestInfo) =>
            <div className="form-section" key={guestInfo.id}>
                <h1>{guestInfo.name}</h1>

                <Attendance guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                {guestInfo.attendance != true ? <></> : (<>
                    <Starter guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                    <MainCourse guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                    <Dessert guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                    <EveningFood guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                    <DietaryNeeds guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />

                    <Song guest={guestInfo} onGuestInfoUpdated={onGuestInfoUpdated} />
                </>)}
            </div>)
        }</div>
        <div id="submit-container">
            <div className="button-container">
                <div className="button" onTouchStart={(_) => { }}>
                    <input type="button" value="Submit" />
                </div>
            </div>
        </div>
    </>;
}
