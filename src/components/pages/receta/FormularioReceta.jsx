import { Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { crearRecetaAPI } from "../../../helpers/queries";
import Swal from 'sweetalert2'

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const recetaValidada = async(receta) => {
    console.log(receta);
    //logica par crear producto
    const respuesta = await crearRecetaAPI(receta)
    if(respuesta.status === 201){
      Swal.fire({
        title: "Receta Creada!",
        text: "Receta creada con Exito",
        icon: "success"
      });
      reset();
    }else{
      Swal.fire({
        title: "Ocurrio un Error!",
        text: "Intente crear la receta en unos minutos",
        icon: "error"
      });
    }
  };

  return (
    <>
      <Container className="main p-2">
        <h1 className="titulo-inicio mt-3 py-2">Nueva Receta</h1>
        <hr />
        {/* manejo de formulario */}
        <Form
          className="p-3 my-2 formulario"
          onSubmit={handleSubmit(recetaValidada)}
        >
          {/*receta  */}
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

          {/* Ingrediente1 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrediente 1**</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Azucar"
              name="ingrediente"
              {...register("ingrediente1", {
                required: "Debe ingresar un ingrediente",
                minLength: {
                  value: 2,
                  message: "El ingrediente debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Supera la cantidad de 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingrediente1?.message}
            </Form.Text>
          </Form.Group>

          {/* Ingrediente 2 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrediente 2**</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Azucar"
              name="ingrediente"
              {...register("ingrediente2", {
                required: "Debe ingresar un ingrediente",
                minLength: {
                  value: 2,
                  message: "El ingrediente debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Supera la cantidad de 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingrediente1?.message}
            </Form.Text>
          </Form.Group>

          {/* Ingrediente 3 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrediente 3**</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Azucar"
              name="ingrediente"
              {...register("ingrediente3", {
                required: "Debe ingresar un ingrediente",
                minLength: {
                  value: 2,
                  message: "El ingrediente debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Supera la cantidad de 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingrediente1?.message}
            </Form.Text>
          </Form.Group>

          {/* Ingrediente 4 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrediente 4**</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Azucar"
              name="ingrediente"
              {...register("ingrediente4", {
                required: "Debe ingresar un ingrediente",
                minLength: {
                  value: 2,
                  message: "El ingrediente debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Supera la cantidad de 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingrediente1?.message}
            </Form.Text>
          </Form.Group>

          {/* Ingrediente 2 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrediente 5**</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Azucar"
              name="ingrediente"
              {...register("ingrediente4", {
                required: "Debe ingresar un ingrediente",
                minLength: {
                  value: 2,
                  message: "El ingrediente debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Supera la cantidad de 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingrediente1?.message}
            </Form.Text>
          </Form.Group>

          {/* Nuevo Ingrediente */}

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
                  value: 1000,
                  message: "La descripcion supera los caracteres validos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.preparacion?.message}
            </Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button
              className="botonColorCrear mb-2 py-2"
              variant="dark"
              type="submit"
            >
              Guardar <FontAwesomeIcon icon={faUtensils} />
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormularioReceta;
