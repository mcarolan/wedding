window.hideNav = () => {
    const navCheck = document.getElementById("nav-check") as HTMLInputElement;
    if (navCheck) {
        navCheck.checked = false;
    }
    return true;
}