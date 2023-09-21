import { HomeWork } from "./HomeWork";

export interface HomeWorkRepository<T> {
    create(homework: HomeWorkData): Promise<HomeWork | number>
    getHomeworks(idp: number): Promise<HomeWork[] | number>
    updateHomeWork(homework: HomeWorkUpdateData): Promise<number>
    deltehomwork(idh: number): Promise<number>
}

export interface HomeWorkData {
    id_tarea: number;
    id_profile: number;
    status_tarea: string;
    intentos: string;
    stars: string;
}

export interface HomeWorkUpdateData {
    id: number;
    id_tarea: number;
    id_profile: number;
    status_tarea: string;
    intentos: string;
    stars: string;
}