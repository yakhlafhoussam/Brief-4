const ps = document.querySelectorAll(".word");
let numpara = 0;
let numlett = 0;
let time = 0;


window.addEventListener("keydown", (e) => {
    if (numpara >= ps.length){
        return;
    }

    const lett = ps[numpara].querySelectorAll("span");
    if (numlett >= lett.length){
        return;
    }

    const spanstyle = lett[numlett];
    const keypress = e.key;

    if (keypress.toLowerCase() === spanstyle.textContent.toLowerCase()) {
        spanstyle.className = "done";
    } else {
        spanstyle.className = "error";
    }

    numlett++;

    if (numlett >= lett.length) {
        numpara++;
        numlett = 0;
    }
});