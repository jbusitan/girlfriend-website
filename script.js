function showMessage() {

    const message =
        document.getElementById("secretMessage");

    message.innerHTML =
        "I love you more than words can explain. ❤️";

}


/* Floating Hearts */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);


/* QR CODE */

/*
After you publish your website,
replace this with your real website URL.
*/

const websiteURL =
    "https://yourwebsite.com";

const qrCode =
    document.getElementById("qrCode");

qrCode.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
    + encodeURIComponent(websiteURL);