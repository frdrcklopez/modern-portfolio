import { Project } from "../typing"

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`)

    const data = await res.json()
    const projects: Project[] =data.projects

    return projects
}