import { FieldValues, UseFormRegister } from "react-hook-form";
import { GuestInfo } from "../accessCodeEntry";

export function idFor(base: string, guestInfo: GuestInfo): string {
    return `${base}-${guestInfo.id}`;
}

export interface FormComponentProps {
    guest: GuestInfo,
    onGuestInfoUpdated: (GuestInfo) => void
}

export const chrisGuestId: string = "1b14fe5d-79e4-4e26-9441-f8d76e23d584";
export const adamGuestId: string = "ad2bade5-6ede-401a-846b-3a94fce3776c";