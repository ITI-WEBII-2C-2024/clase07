import {Router} from "express"
import productos from "./productos";
import categoria from "./categorias";

const routes= Router();

routes.use("/Productos", productos )
routes.use("/Categoria", categoria )

export default routes;

