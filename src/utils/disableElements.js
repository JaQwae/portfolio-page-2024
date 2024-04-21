const btns = document.getElementsByClassName("btns")

export function disableBtn(value) {
    // console.log(btns);

    for(var i = 0; i < btns.length; i++)
{
    btns[i].style.zIndex = value;
}
}