function greeting() {
    console.log('the greeting function worked');
}

function showPanel() {
    createPanel();
}

function createPanel() {
    const el = document.getElementById("projects");
    console.log(el)
    el?.addEventListener("click", () => {
        const sliderEl = document.getElementById("slider");
        console.log(sliderEl)
        if (sliderEl) {
            console.log(sliderEl.hidden);
            sliderEl.hidden = sliderEl.hidden === true ? false : true;
        }
    })
}

function init() {
    createPanel();
}