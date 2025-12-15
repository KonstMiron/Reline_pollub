import "./InstagramSection.scss";
import phonesImg from "@/shared/assets/images/instagram-phones.png";

const InstagramSection = () => {
  return (
    <section className="instagram">
      <div className="container instagram__inner">
        <p className="instagram__kicker">Usuń przeszłość, podkreśl przyszłość.</p>
        <p className="instagram__lead">RE LINE – miejsce, gdzie zaczyna się nowe.</p>

        <h2 className="instagram__title">INSTAGRAM</h2>

        <div className="instagram__media">
          <img
            className="instagram__phones"
            src={phonesImg}
            alt="Podgląd Instagram RE LINE"
          />
        </div>

        <a
          className="instagram__btn"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Zobacz na Instagramie
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;