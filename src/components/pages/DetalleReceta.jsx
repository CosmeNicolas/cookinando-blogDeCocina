const DetalleReceta = () => {


  return (
    <>
      <h1 className="text-center">Detalle de la receta </h1>
      <div className="container-fluid">
        <hr />
      </div>
      <section className=" main mt-3 ">
        <article className="p-lg-5">
          <div className="d-flex container-fluid  justify-content-evenly align-content-center contenedor-detalle contenedor-img-detalle">
            <img
              className=" rounded-2 my-3 img-fluid img-detalle "
              /* src={receta.imagen} */
              src="🍝"
              alt="receta-cafeteria"
            />
            <div className="ms-2">
              <h2 className="display-6 mt-2 text-md-center text-sm-center">
                nombre receta
              </h2>
              <hr />
              <p className="p-lg-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, alias? Veniam, at cum. Quos fugiat aperiam rem ratione aspernatur sed deserunt ullam sequi. Nemo, beatae odit. Architecto numquam enim similique!</p>
              <ul className="list-unstyled p-lg-5">
                <li>
                  <strong className="color">Categoria:</strong>{" "}
                 dulces
                </li>
                <li>
                  <strong className="color">Precio:</strong> $100
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetalleReceta;

