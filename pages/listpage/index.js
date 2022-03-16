export default function Listpage () {
    return (
      <section className="section contetn-section">
        <div className="columns">
          <div className="column" />
          <div className="column is-three-quarters">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into{" "}
              <strong>sections</strong>, like the one currently reading.
            </h2>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
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
          <div className="column" />
        </div>
      </section>
    );
}