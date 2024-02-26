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

//POST - CREAR 
export const crearRecetaAPI = async(recetaNueva)=>{
    try {
        const respuesta = await fetch(URI_RECETAS,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recetaNueva)
        });
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

//BORRAR - DELETE

export const eliminarRecetaAPI = async(id)=>{
    try {
        const respuesta = await fetch(`${URI_RECETAS}/${id}`,{
        method: "DELETE",
        });
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

//GET - PETICION de un 1(un) producto por medio de :id
export const obtenerRecetaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_RECETAS}/${id}`);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

// PUT - Editar - Reemplazar 
export const editarRecetaAPI = async (id, receta)=>{
    try {
        const respuesta = await fetch(`${URI_RECETAS}/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta)
        })
    } catch (error) {
        console.log(error)
    }
}