const URI_RECETAS= import.meta.env.VITE_API_RECETAS

console.log(URI_RECETAS)

/* GET - PETICION */

export const leerRecetasAPI = async ()=> {
    try {
        const respuesta = await fetch(URI_RECETAS)
        console.log(respuesta);
        const listaRecetas = await respuesta.json()
        return listaRecetas
    } catch (error) {
        console.log(error)
    }
}