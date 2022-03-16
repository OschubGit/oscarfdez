import Aside from "../aside/Aside";
import Link from "next/link";

export default function Main() {
  return (
    <section className="section content-section">
      <div className="columns">
        <div className="column is-two-thirds">
          <h1 className="title is-3">Artículos</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                    <Link href={"/listpage"}>
                        <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                        />
                    </Link>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" aria-label="reply">
                      <span className="icon is-small">
                        <i className="fas fa-reply" aria-hidden="true" />
                      </span>
                    </a>
                    <a className="level-item" aria-label="retweet">
                      <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true" />
                      </span>
                    </a>
                    <a className="level-item" aria-label="like">
                      <span className="icon is-small">
                        <i className="fas fa-heart" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <Aside/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds">
          <h4 className="title is-4">Temas</h4>
          <div className="tags are-medium">
            <span className="tag">One</span>
            <span className="tag">Two</span>
            <span className="tag">Three</span>
            <span className="tag">Four</span>
            <span className="tag">Five</span>
            <span className="tag">Six</span>
          </div>
        </div>
        <div className="column" />
      </div>
      <div className="columns">
        <div className="column is-two-thirds">
          <h4 className="title is-4">Cursos</h4>
          <div className="tags are-medium">
            <span className="tag">One</span>
            <span className="tag">Two</span>
            <span className="tag">Three</span>
            <span className="tag">Four</span>
            <span className="tag">Five</span>
            <span className="tag">Six</span>
          </div>
        </div>
        <div className="column" />
      </div>
    </section>
  );
}
