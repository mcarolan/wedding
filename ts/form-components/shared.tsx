import { GuestInfo } from "../accessCodeEntry";

export function idFor(base: string, guestInfo: GuestInfo): string {
    return `${base}-${guestInfo.id}`;
}

export interface FormComponentProps {
    guest: GuestInfo,
    onGuestInfoUpdated: (GuestInfo) => void
}