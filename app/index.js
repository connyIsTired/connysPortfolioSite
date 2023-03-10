"use strict";
function greeting() {
    console.log('the greeting function worked');
}
function showPanel() {
    createPanel();
}
function createPanel() {
    const el = document.getElementById("projects");
    el === null || el === void 0 ? void 0 : el.addEventListener("click", () => {
        const sliderEl = document.getElementById("slider");
        if (sliderEl) {
            toggleOverlay(sliderEl.hidden);
            sliderEl.hidden = false;
        }
    });
}
function toggleOverlay(createOverlay) {
    if (createOverlay) {
        let overlayDiv = document.createElement("div");
        overlayDiv.className = "overlay";
        document.body.insertAdjacentElement('afterbegin', overlayDiv);
        overlayDiv.addEventListener("click", () => toggleOverlay(false));
    }
    else {
        document.getElementsByClassName("overlay")[0].remove();
        const sliderEl = document.getElementById("slider");
        if (sliderEl) {
            sliderEl.hidden = true;
        }
    }
}
function init() {
    createPanel();
}
