const ps = document.querySelectorAll(".word");
let numpara = 0;
let numlett = 0;
let deadline = 55;
let times = 0;
let pourcentage = 0;
let numletter = 0;
let numtotal = 0;

for (let time = 120; time >= 0; time--) {
    setTimeout(function() {
        document.getElementById("tim").textContent = time;
        times = time;
        if (time == 0) {
            if (deadline == 55) {
                document.querySelector(".lines").classList.replace("lines", "lined");
                document.querySelector(".time").classList.replace("time", "timed");
                document.querySelector(".resulted").classList.replace("resulted", "result");
                deadline = numpara * 2;
                document.getElementById("wpm").textContent = deadline.toFixed(2) + " words in one minute";
                pourcentage = numletter / 149 * 100;
                document.getElementById("accur").textContent = pourcentage.toFixed(2) + " %";
                if (pourcentage < 80 || deadline < 5) {
                    document.getElementById("wtf").textContent = "You are beginner. You need to develop";
                    return;
                }
                if (pourcentage < 90 || deadline < 15) {
                    document.getElementById("wtf").textContent = "You are middle. You need to develop a little";
                    return;
                }
                if (pourcentage < 95 || deadline < 25) {
                    document.getElementById("wtf").textContent = "You are very good. Keep moving forward";
                    return;
                }
                if (pourcentage <= 100 || deadline <= 35) {
                    document.getElementById("wtf").textContent = "(-__-)";
                    return;
                }
            }
        }
    }, (120 - time) * 1000);
}

window.addEventListener("keydown", (e) => {
    if (numpara >= ps.length){
        document.querySelector(".lines").classList.replace("lines", "lined");
        document.querySelector(".time").classList.replace("time", "timed");
        document.querySelector(".resulted").classList.replace("resulted", "result");
        times = 120 - times;
        deadline = times;
        deadline = 60 / deadline;
        deadline = numpara * deadline;
        document.getElementById("wpm").textContent = deadline.toFixed(2) + " words in one minute";
        pourcentage = numletter / 149 * 100;
        document.getElementById("accur").textContent = pourcentage.toFixed(2) + " %";
        if (pourcentage < 80 || deadline < 5) {
            document.getElementById("wtf").textContent = "You are beginner. You need to develop";
            return;
        }
        if (pourcentage < 90 || deadline < 15) {
            document.getElementById("wtf").textContent = "You are middle. You need to develop a little";
            return;
        }
        if (pourcentage < 95 || deadline < 25) {
            document.getElementById("wtf").textContent = "You are very good. Keep moving forward";
            return;
        }
        if (pourcentage <= 100 || deadline <= 35) {
            document.getElementById("wtf").textContent = "(-__-)";
            return;
        }
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
        numletter++;
        numtotal++;
    } else {
        spanstyle.className = "error";
        numtotal++;
    }

    numlett++;

    if (numlett >= lett.length) {
        numpara++;
        numlett = 0;
    }
});