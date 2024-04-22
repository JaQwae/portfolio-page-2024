const btns = document.getElementsByClassName("btns")
// const contactFromContainer = document.getElementById("connect-page-form")


export function disableElements(value) {
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.zIndex = value;
    }

    if (document.getElementById("connect-page")) {
        document.getElementById("connect-page-form").style.zIndex = value;
    }
}