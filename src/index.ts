class Project implements Iproject {
    description: string;
    url: string;
    title: string;

    constructor(title: string, description: string, url: string){
        this.title = title;
        this.description = description;
        this.url = url;
    } 
}

class Projects implements Iprojects {
    projects: Project[];

    constructor(projects: Project[]){
        this.projects = projects;
    }
}

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

const projectList: Projects = new Projects([
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
            addPanelDetails();
            sliderEl.hidden = false;
        }
    })
}

function addPanelDetails(){
    const titleEle = document.getElementById("slider-title");
    const descEle = document.getElementById("slider-description");
    const urlEle = document.getElementById("slider-url");

    const projects = projectList.projects;

    if (projects && titleEle && descEle && urlEle) {
       titleEle.innerHTML = projects[0].title;
       descEle.innerHTML = projects[0].description;
       urlEle.innerHTML = projects[0].url;
    }
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