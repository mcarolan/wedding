import { GuestDetails, GuestInfo } from "./accessCodeEntry";
import { Attendance } from "./form-components/attendance";
import { Dessert } from "./form-components/dessert";
import { DietaryNeeds } from "./form-components/dietaryNeeds";
import { EveningFood } from "./form-components/eveningFood";
import { MainCourse } from "./form-components/mainCourse";
import { Song } from "./form-components/song";
import { Starter } from "./form-components/starter";
import React, { useState } from "react";
import {cloneDeep} from 'lodash';

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
        <div>Thanks! We found your invite.</div>
        <div>{guestInfos.map((guestInfo) =>
            <div className="form-section">
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
    </>;
}
