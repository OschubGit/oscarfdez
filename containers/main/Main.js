import { useState, useEffect } from "react";
import Box from "../../components/box";
import Tags from "../../components/tags";
import Aside from "../aside/Aside";

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then(setPosts);

      fetch("http://localhost:3000/api/tags")
      .then((res) => res.json())
      .then(setTags);

      fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then(setCourses);
  }, []);

  return (
    <section className="section content-section">
      <div className="columns">
        <div className="column is-two-thirds">
          <h1 className="title is-3">Artículos</h1>
          <p className="subtitle">
            Último artículos publicados en <strong>oscar</strong>fdez
          </p>
          {posts.map((p, index) => (
            <Box key={index} p={p} />
          ))}
        </div>
        <div className="column">
          <Aside />
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds">
          <h4 className="title is-4">Temas</h4>
          <div className="tags are-medium">
            {tags.map((t) => (
              <Tags key={t.id} medium tagName={t.tag} />
            ))}
          </div>
        </div>
        <div className="column" />
      </div>
      <div className="columns">
        <div className="column is-two-thirds">
          <h4 className="title is-4">Cursos</h4>
          <div className="tags are-medium">
            {courses.map((c) => (
              <Tags key={c.id} medium tagName={c.course} />
            ))}
          </div>
        </div>
        <div className="column" />
      </div>
    </section>
  );
}
