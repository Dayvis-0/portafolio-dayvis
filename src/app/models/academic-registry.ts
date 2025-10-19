export interface Course {
    name: string,
    status: string,
    credits: number,
}

export interface Cycle {
    title: string,
    course: Course[],
}