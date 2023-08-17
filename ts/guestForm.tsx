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
import { FormProvider, useForm } from "react-hook-form";
import { Errors } from "./form-components/errors";

export interface GuestFormProps {
    guestDetails: GuestDetails
}

export function GuestForm(props: GuestFormProps) {
    const [guestInfos, setGuestInfos] = useState(cloneDeep(props.guestDetails.guests));
    const methods = useForm({
        shouldFocusError: false
    });

    function onGuestInfoUpdated(guestInfo: GuestInfo) {
        const guestIndex = guestInfos.findIndex((g) => g.id == guestInfo.id);
        if (guestIndex > -1) {
            const clone = cloneDeep(guestInfos);
            clone[guestIndex] = cloneDeep(guestInfo);
            setGuestInfos(clone);
        }
    }

    function onSubmit() {
        console.log(`submitting ${guestInfos}`);
    }

    function err(errors): boolean {
        console.log(errors);
        return true;
    }

    return <>
        <p>Thanks! We found your invite.</p>
        <p>Please provide us with an email address for your group. It'll only be used to send important information.</p>

        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="inline-section">
                    <label htmlFor="inline-address">
                        Email address:
                    </label>
                    <input type="email" id="email-address" placeholder="email@provider.com" {
                        ...methods.register("email", {
                            required: "Please provide email address for your group",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address for your group"
                            }
                        })
                    } />
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
                <Errors errors={methods.formState.errors} />
                <div id="submit-container">
                    <div className="button-container">
                        <div className="button" onTouchStart={(_) => { }}>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    </>;
}