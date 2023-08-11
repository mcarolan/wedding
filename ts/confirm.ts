const SERVICE_URL = "https://script.google.com/macros/s/AKfycbwI68QJKsrTaC5GL3zNbBqAjjYFAEQai2ttU-VpQxpJvjAhKi4TTeO4lZxMW76xyeHvYQ/exec";

enum GuestType {
    AllDay = "AD",
    EveningOnly = "EO",
    Child = "C"
}

interface GuestInfo {
    name: string,
    guestType: GuestType
}

interface CheckAccessCodeResponse {
    accessCodeValid: boolean,
    guests: GuestInfo[]
}

async function checkAccessCode(accessCode: string) {
    const url = SERVICE_URL + "?" + new URLSearchParams({ accessCode });
    const request = new Request(url);
    const response = await request.json();

    console.log(response);
    // console.log(response);
}

document.addEventListener("DOMContentLoaded", () => {
    const checkButton = document.getElementById("checkButton") as HTMLButtonElement;
    const accessCodeInput = document.getElementById("accessCode") as HTMLTextAreaElement;

    checkButton.addEventListener("click", function () {
        checkAccessCode(accessCodeInput.value);
    });
});
