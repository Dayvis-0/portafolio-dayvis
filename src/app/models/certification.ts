export interface Certification {
    icon: string,
    content: Content[]
}

export interface Content {
    name: string,
    issuer: string,
    date: Date,
    description: string,
    skills: Skill[]
}

export interface Skill {
    skill: string
}