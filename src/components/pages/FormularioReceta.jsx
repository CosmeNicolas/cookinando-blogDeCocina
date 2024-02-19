import { Form, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
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
                required: "El nombre del producto es obligatorio",
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
          {/* Precio */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredientes**</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: $100"
              name="precio"
              {...register("precio", {
                required: "Debe ingresar un monto",
                min: {
                  value: 50,
                  message: "Debe ingresar un valor entre 50 y 99999",
                },
                max: {
                  value: 99999,
                  message: "No debe superar el monto de 99999",
                },
                minLength: {
                  value: 2,
                  message: "El monto debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 5,
                  message: "Supera la cantidad de 5 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
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
            <Form.Label>Tipo de Producto*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una Opción</option>
              <option value="infusiones">Infusiones</option>
              <option value="batidos">Batidos</option>
              <option value="cafeComun">Café Común</option>
              <option value="cafeEspecialidad">Café de especialidad</option>
              <option value="materiaPrima">Materia prima</option>
              <option value="panaderiaDulce">Panaderia Dulce</option>
              <option value="panaderiasalado">Panaderia Salado</option>
              <option value="bocadillos">Bocadillos</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          {/* Descripción */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Un producto con un toque personal, asi , como en casa"
              name="descripcion_breve"
              {...register("descripcion_breve", {
                required: "Debe ingresar una descripcion",
                minLength: {
                  value: 3,
                  message: "La descripcion debe tener como minimo 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "La descripcion supera los caracteres validos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>
          {/* Descripción Amplia*/}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción Amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Espresso robusto con notas intensas de cacao y toques de avellana. Aromas potentes y cuerpo pleno, equilibrado con una sutil acidez. Ideal para quienes buscan una experiencia audaz y rica en cada sorbo."
              name="descripcion_amplia"
              {...register("descripcion_breve", {
                required: "Debe ingresar una descripcion",
                minLength: {
                  value: 3,
                  message: "La descripcion debe tener como minimo 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "La descripcion supera los caracteres validos",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_amplia?.message}
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