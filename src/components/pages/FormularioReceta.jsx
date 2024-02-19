import { Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioReceta = () => {
  const [inputs, setInputs] = useState([]);
  const [nuevoIngrediente, setNuevoIngrediente] =useState('')

  const agregarIngrediente = ()=>{
    setInputs([...inputs, nuevoIngrediente]);
    setNuevoIngrediente('')
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
    reset()
  };

  return (
    <>
      <Container className="main p-2">
        <h1 className="titulo-inicio mt-3 py-2">Nueva Receta</h1>
        <hr />
        {/* manejo de formulario */}
        <Form
          className="p-3 my-2 formulario"
          onSubmit={handleSubmit(productoValidado)}
        >
          {/*Producto  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Lemon Pie"
              name="producto"
              {...register("nombreReceta", {
                required: "El nombre de la receta es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como minimo dos caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>


          {/* Ingrediente */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredientes**</Form.Label>
            <Button onClick={agregarIngrediente}>
              Agregar Ingrediente
            </Button>
            {
              inputs.map((input, index)=>(
                
                (<Form.Control
                  key={index}
                  type="text"
                  placeholder="Ej: 100grs de Harina"
                  name="ingrediente"
                  value={input}
                  onChange={(e) => setNuevoIngrediente(e.target.value)}
                  {...register("ingrediente", {
                    required: "Debe ingresar un ingrediente",
                    minLength: {
                      value: 2,
                      message: "El ingrediente debe tener como minimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "Supera la cantidad de 5 caracteres",
                    },
                  })}
                />)
                ))
            }

            <Form.Text className="text-danger">
              {errors.ingrediente?.message}
            </Form.Text>
          </Form.Group>



          {/* Imagen url */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              name="imagen"
              placeholder="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg"
              {...register("imagen", {
                required: "Debe ingresar una URL de imagen en formato png",
                pattern: {
                  value: /\.(jpg|jpeg|png|gif)$/i, // Asegura que la URL termine en ".jpg", ".jpeg", ".png" o ".gif"
                  message:
                    "La URL debe ser una imagen en formato JPG, JPEG, PNG o GIF",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          {/* Categoria */}
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Receta*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una Opción</option>
              <option value="saludables">🥗Saludables</option>
              <option value="carne">🥩Carne</option>
              <option value="cerdo">🐖Cerdo</option>
              <option value="pollo">🐓Pollo</option>
              <option value="pastas">🍝Pastas</option>
              <option value="dulce">🍭Dulce</option>
              <option value="salado">🧂Salado</option>
              <option value="bebidas">🍹Bebidas y Cocktails</option>
              <option value="pescadoYmariscos">🦐Pescados y Mariscos</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          {/* Descripción */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Preparacion*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Ej: 1- Verter el contenido en un recipiente"
              name="preparacion"
              {...register("preparacion", {
                required: "Debe ingresar una descripcion detallada",
                minLength: {
                  value: 3,
                  message: "La descripcion debe tener como minimo 3 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "La descripcion supera los caracteres validos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.preparacion?.message}
            </Form.Text>
          </Form.Group>
         
          <div className="text-center">
            <Button className="botonColorCrear mb-2 py-2" variant="dark" type="submit">
              Guardar <FontAwesomeIcon icon={faUtensils} /> 
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormularioReceta