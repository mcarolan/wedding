function hideNav() {
    const navCheck = document.getElementById("nav-check") as HTMLInputElement;
    if (navCheck) {
        navCheck.removeAttribute("checked");
        navCheck.checked = false;
    }
    return true;
}