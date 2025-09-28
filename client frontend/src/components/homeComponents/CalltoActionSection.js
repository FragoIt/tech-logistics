import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>¡Ofertas Exclusivas!</h2>
              <p>Suscríbete para recibir descuentos especiales y las últimas tendencias en calzado.</p>
              <form className="form-section">
                <input placeholder="Tu email..." name="email" type="email" />
                <input value="¡Suscribirme!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
