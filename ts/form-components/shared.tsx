import { FieldValues, UseFormRegister } from "react-hook-form";
import { GuestInfo } from "../accessCodeEntry";

export function idFor(base: string, guestInfo: GuestInfo): string {
    return `${base}-${guestInfo.id}`;
}

export interface FormComponentProps {
    guest: GuestInfo,
    onGuestInfoUpdated: (GuestInfo) => void
}

export const chrisGuestId: string = "chris";
export const adamGuestId: string = "adam";