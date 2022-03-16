import Extract from "../extractText";
import TitleName from "../titleName";

export default function Box({p}) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={p.image} alt="image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <TitleName
                user={p.user}
                username={p.username}
            />
            <Extract
                content={p.content}
            />
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
    )
}
