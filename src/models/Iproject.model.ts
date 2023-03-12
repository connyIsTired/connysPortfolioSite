export interface Iproject {
    title: string;
    description: string;
    url: string;
}

export interface Iprojects {
    projects: Iproject[];
}

export class Project implements Iproject {
    description: string;
    url: string;
    title: string;

    constructor(title: string, description: string, url: string){
        this.title = title;
        this.description = description;
        this.url = url;
    } 
}

export class Projects implements Iprojects {
    projects: Project[];

    constructor(projects: Project[]){
        this.projects = projects;
    }
}