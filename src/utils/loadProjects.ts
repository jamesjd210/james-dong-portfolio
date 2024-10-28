import fs from "fs";
import path from "path";
import { Project } from "@/types/Project"

const PROJECTS_DIRECTORY = "src/data/projectData"

export function loadProjects(): Project[] {
    const projectFiles = fs.readdirSync(PROJECTS_DIRECTORY);
    const projects: Project[] = projectFiles.map((file) => {
        const filePath = path.join(PROJECTS_DIRECTORY, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const projectData : Project = JSON.parse(fileContents);
        return projectData;
    });
    return projects;
}
