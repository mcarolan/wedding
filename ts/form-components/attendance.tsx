import { GuestDetails, GuestInfo } from "../accessCodeEntry";
import { idFor } from "./shared";

export interface AttendanceProps {
    guest: GuestInfo
}

export function Attendance(props: AttendanceProps) {
    const guest = props.guest;
    return <>
        <div class="radio-label" id={idFor("attendance-label", guest)}>Attendance:</div>
        <div class="radio-group" role="radiogroup" aria-labelledby={idFor("attendance-label", guest)}>
            <div>
                <input type="radio" name={idFor("attendance-radio", guest)} value="true" id={idFor("able-to-attend", guest)} />
                <label htmlFor={idFor("able-to-attend", guest)}>I'd be delighted to attend ✅</label>
            </div>
            <div>
                <input type="radio" name={idFor("attendance-radio", guest)} value="false" id={idFor("unable-to-attend", guest)} />
                <label htmlFor={idFor("unable-to-attend", guest)}>Regretfully, I'm unable to attend ❎</label>
            </div>
        </div>
    </>;
}