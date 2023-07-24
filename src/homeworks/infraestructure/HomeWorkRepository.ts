import { HomeWork } from "../domain/HomeWork";
import { HomeWorkData, HomeWorkRepository, HomeWorkUpdateData } from "../domain/HomeWorkRepository";
import { pool } from "../../database/db";


export class HomeWorkRepositoryr implements HomeWorkRepository<HomeWork>{
    async create(homework: HomeWorkData): Promise<number | HomeWork> {
        const client = await pool.connect();
        try{
            const query ="INSERT INTO homework (id_tarea, id_profile, status_tarea, intentos, stars) VALUES ($1, $2, $3, $4, $5)";
            const result = await client.query(query, [homework.id_tarea, homework.id_profile, homework.status_tarea, homework.intentos, homework.stars])
            if(result.rowCount > 0){
                return 1;
            }else{
                return 2;
            }
        }catch(error){
            console.log(error);
            return 2;
        }finally {
            client.release(); // Libera la conexión cuando la consulta haya terminado
          }
        
    
    }

    async getHomeworks(idp: number): Promise<number | HomeWork[]> {
        const client = await pool.connect();
        try{
            const query = "SELECT * FROM homework WHERE id_profile = $1";
            const result = await client.query(query, [idp]);
            if(result.rowCount > 0){
                
                return result.rows;
            }else{
                return 2;
            }
            
        }catch(error){
            console.log(error);
            return 2;
        }finally {
            client.release(); // Libera la conexión cuando la consulta haya terminado
          }
        
    }
    async updateHomeWork(homework: HomeWorkUpdateData): Promise<number> {
        const client = await pool.connect();
        try{
            const status = homework.status_tarea;
            const intentos = homework.intentos;
            const id = homework.id;
            const stars = homework.stars;
            
            const query = "UPDATE homework SET status_tarea = $1, intentos = $2, stars = $3 WHERE id = $4";
            const result = await client.query(query,[status, intentos, stars, id]);
            if(result.rowCount > 0){
                return 1;
            }else{
                return 2;
            }
        }catch(error){
            console.log(error);
            return 2;
        }finally {
            client.release(); // Libera la conexión cuando la consulta haya terminado
          }
    }

    
}