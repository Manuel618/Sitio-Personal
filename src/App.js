import React, { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/foto.jpg";

export default function App() {
  const [light, setLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <div className="App">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="avatar">
              <img src={profile} alt="Fotografía de perfil" />
            </span>
            <div>
              <h1>Jesús Manuel Meraz Marrufo</h1>
              <p className="tagline">Estudiante de ING Desarrollo En Gestion De Software</p>
            </div>
          </div>
          <nav>
            <button
              className="button ghost"
              onClick={() => setLight(!light)}
              aria-label="Cambiar tema"
            >
              🌓
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="sobre-mi" className="card">
          <h2>¿Quién soy?</h2>
          <p>
           Soy estudiante de Ingeniería en Desarrollo y Gestión de Software. Me considero organizado, 
           responsable y constante. Tengo más experiencia en desarrollo web con React, HTML/CSS y JavaScript, 
           y trabajo con bases de datos relacionales (SQL y PostgreSQL). Me motiva aprender tecnologías que 
           mejoren la experiencia del usuario y convertir ideas en interfaces claras y eficientes. Fuera del 
           código, disfruto la música —especialmente la ópera— y soy fan de las series de detectives. 
           También me encanta la comida, en especial la china. Además, colecciono figuras de anime, artículos 
           de mis series favoritas y audífonos.
          </p>
        </section>

        <section id="pasatiempos" className="card">
          <h2>Pasatiempos</h2>
          <div className="grid hobbies">
            <article className="hobby">
              <div className="icon" aria-hidden="true">🍳</div>
              <h3>Cocina</h3>
              <p>
                Cocinar me relaja y me organiza. Planeo recetas sencillas, cuido tiempos y presentación,
                y anoto ajustes para repetir lo que sale bien. Me gusta prepararlo para mi familia sin complicarme.
              </p>
            </article>

            <article className="hobby">
              <div className="icon" aria-hidden="true">🎮</div>
              <h3>Juegos</h3>
              <p>
                Juego para despejarme; prefiero las experiencias cooperativas y de estrategia. No tengo un título favorito: 
                disfruto probar casi cualquier juego y aprender nuevas mecánicas.
              </p>
            </article>

            <article className="hobby">
              <div className="icon" aria-hidden="true">📺</div>
              <h3>Ver series</h3>
              <p>
              Soy fan de las series de detectives me gusta como los detectives encuentran las pistas par 
              encontral al culpable. A veces hago maratón; otras, prefiero ver un episodio con calma.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>
            © {new Date().getFullYear()} Jesús Manuel Meraz Marrufo. Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}
