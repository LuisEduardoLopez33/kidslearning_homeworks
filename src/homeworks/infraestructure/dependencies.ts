import { CreateHomeWorkUseCase } from "../application/CreateHomeWorkUseCase";
import { HomeWorkRepositoryr } from "./HomeWorkRepository";
import { HomeWorkController } from "./controller/HomeWorkController";
import { ObtenerHomeWorkUseCase } from "../application/ObtenerHomeWorksUseCase";
import { ActualizarHomeWorkUseCase } from "../application/ActualizarHomeWork";
import { DeleteHomeWorkUseCase } from "../application/DeleteHomeWork";

const createHomeWorkRepository = new HomeWorkRepositoryr();

export const createHomework = new CreateHomeWorkUseCase(createHomeWorkRepository);
export const obtenerHomeWorks = new ObtenerHomeWorkUseCase(createHomeWorkRepository);
export const actualizarHomeWorks = new ActualizarHomeWorkUseCase(createHomeWorkRepository);
export const deleteHomeWorks = new DeleteHomeWorkUseCase(createHomeWorkRepository);

export const HomeworkController = new HomeWorkController(createHomework, obtenerHomeWorks,actualizarHomeWorks, deleteHomeWorks);