import "./ServicesSection.scss";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services__header">
        <p className="services__subtitle">
          Zmieńmy przyszłość
        </p>
        <h2 className="services__title">
          Pozwól sobie na nowy rozdział piękna.
        </h2>
        <p className="services__desc">
          Pozwól nam zadbać o Ciebie
        </p>
      </div>

      <div className="services__list container">
        <article className="services__card">
          <img src="/src/shared/assets/images/service-1.jpg" alt="Laserowe usuwanie tatuażu" />
          <h3>Laserowe usuwanie tatuażu</h3>
          <p>
            Usuń tatuaż laserem pikosekundowym z chłodzeniem Cryo –
            bez bólu i bez ryzyka.
          </p>
          <button className="btn-more">ZOBACZ WIĘCEJ!</button>
        </article>

        <article className="services__card">
          <img src="/src/shared/assets/images/service-2.jpg" alt="Laserowe usuwanie makijażu permanentnego" />
          <h3>Laserowe usuwanie makijażu permanentnego</h3>
          <p>
            Profesjonalne usuwanie makijażu permanentnego przy użyciu
            lasera pikosekundowego.
          </p>
          <button className="btn-more">ZOBACZ WIĘCEJ!</button>
        </article>

        <article className="services__card">
          <img src="/src/shared/assets/images/service-3.jpg" alt="Usuwanie removerem" />
          <h3>Usuwanie makijażu permanentnego removerem</h3>
          <p>
            Delikatna i skuteczna metoda eliminacji pigmentu z brwi, ust i oczu.
          </p>
          <button className="btn-more">ZOBACZ WIĘCEJ!</button>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;