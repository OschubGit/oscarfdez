export default function Aside() {
  return (
    <aside>
      <h2 className="title is-4">Recomendaciones</h2>
      <p className="subtitle is-6">
        My first website with <strong>Bulma</strong>!
      </p>
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary">
            <p className="title">Vertical...</p>
            <p className="subtitle">Top tile</p>
          </article>
        </div>
      </div>
    </aside>
  );
}
