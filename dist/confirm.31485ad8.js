const SERVICE_URL = "https://script.google.com/macros/s/AKfycbwI68QJKsrTaC5GL3zNbBqAjjYFAEQai2ttU-VpQxpJvjAhKi4TTeO4lZxMW76xyeHvYQ/exec";
var GuestType;
(function(GuestType) {
    GuestType["AllDay"] = "AD";
    GuestType["EveningOnly"] = "EO";
    GuestType["Child"] = "C";
})(GuestType || (GuestType = {}));
async function checkAccessCode(accessCode) {
    const url = SERVICE_URL + "?" + new URLSearchParams({
        accessCode
    });
    const request = new Request(url);
    const response = await request.json();
    console.log(response);
// console.log(response);
}
document.addEventListener("DOMContentLoaded", ()=>{
    const checkButton = document.getElementById("checkButton");
    const accessCodeInput = document.getElementById("accessCode");
    checkButton.addEventListener("click", function() {
        checkAccessCode(accessCodeInput.value);
    });
});

//# sourceMappingURL=confirm.31485ad8.js.map
