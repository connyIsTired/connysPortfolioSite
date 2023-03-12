import { Iproject, Project, Projects } from "./models/Iproject.model";

const hockeyTracker: Project = new Project(
    "Hockey Shot Tracker",
    "An app that tracks shots",
    "urltoapp.com"
)

const portfolioSite: Project = new Project(
    "Portfolio site",
    "a site to show stuff I made",
    "youarealreadyhere.com"
)

const haskellQaTool: Project = new Project(
    "Haskell QA Automation Tool",
    "A QA automation tool built with Haskell",
    "githubrepo.com"
)

const projects: Projects = new Projects([
    hockeyTracker,
    portfolioSite,
    haskellQaTool
])

function greeting() {
    console.log('the greeting function worked');
}

function showPanel() {
    createPanel();
}

function createPanel() {
    const el = document.getElementById("projects");
    el?.addEventListener("click", () => {
        const sliderEl = document.getElementById("slider");
        if (sliderEl) {
            toggleOverlay(sliderEl.hidden);
            sliderEl.hidden = false;
        }
    })
}

function toggleOverlay(createOverlay: boolean) {
    if (createOverlay){
        let overlayDiv = document.createElement("div")
        overlayDiv.className = "overlay";
        document.body.insertAdjacentElement('afterbegin', overlayDiv);
        overlayDiv.addEventListener("click", () => toggleOverlay(false));
    } else {
        document.getElementsByClassName("overlay")[0].remove();

        const sliderEl = document.getElementById("slider");
        if (sliderEl){
            sliderEl.hidden = true;
        }
    }
}

function init() {
    createPanel();
}