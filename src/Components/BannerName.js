import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Ola  bem vindo ao Burgs Dre {name},</h3>
      <p>
      Obtenha<span>{`${currency}${discount}`}</span> desconto para promoção do dia {" "}
      </p>
      <a href={more}>Saiba mais</a>
    </div>
  );
}

export default BannerName;
