function removeCookie() {
    const popWrap = document.querySelector(".pop-up");

    popWrap.classList.add('hide');
    setTimout(function () {
        popWrap.classList.remove('hide');
    }, 5000)
}
function removeCookieBox() {
    const cookies = document.querySelector(".ciastka");

    cookies.classList.add('hide');
    setTimeout(function () {
        cookies.classList.remove('hide');
    }, 5000)
}
