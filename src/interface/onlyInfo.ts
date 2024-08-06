import type { Course } from "./Cursos";


export interface OnlyInfoCourse {
    data: Omit<Course, 'cursos'>[];
}