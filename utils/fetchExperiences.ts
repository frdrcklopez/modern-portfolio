import { Experience } from "../typing"

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`)
    
    const data = await res.json()
    const experience: Experience[] = data.experiences

    return experience
}