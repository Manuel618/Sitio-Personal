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
              <p className="tagline">Estudiante de ING DESARROLLO EN GESTIÓN DE SOFTWARE</p>
            </div>
          </div>
          <nav>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#pasatiempos">Pasatiempos</a>
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
            Hola, soy <strong>Jesús Manuel</strong>. Estudio <strong>ING DESARROLLO EN GESTIÓN DE SOFTWARE</strong> y
            me gusta aprender haciendo: construyo cosas pequeñas, pruebo ideas, me equivoco y vuelvo a intentarlo.
            Soy organizado y me gusta dejar todo claro y limpio, desde el código hasta mis apuntes.
          </p>
          <p>
            Me considero alguien curioso y perseverante. Disfruto resolver problemas con soluciones simples,
            bien documentadas y fáciles de mantener. Cuando algo no me sale a la primera, tomo notas,
            reviso qué puedo mejorar y preparo una segunda versión más ordenada.
          </p>
          <p>
            Ahora mismo estoy reforzando <strong>React</strong>, <strong>HTML/CSS</strong> y <strong>JavaScript</strong>,
            además de bases de datos con <strong>SQL/PostgreSQL</strong>. También practico control de versiones con
            <strong> Git y GitHub</strong>, y procuro cuidar detalles como accesibilidad, responsividad y buenas
            prácticas (nombres claros, componentes reutilizables y commits entendibles).
          </p>
          <ul>
            <li><strong>Frontend:</strong> Componentes, estado, props, enrutado básico y estilos.</li>
            <li><strong>Backend/BD:</strong> Consultas SQL, modelos sencillos y conexión a BD.</li>
            <li><strong>Flujo de trabajo:</strong> Git, ramas, issues y organización de tareas.</li>
            <li><strong>Objetivo cercano:</strong> aplicar lo aprendido en proyectos reales y seguir mejorando paso a paso.</li>
          </ul>
          {/* En esta sección no muestro foto adicional */}
        </section>

        <section id="pasatiempos" className="card">
          <h2>Pasatiempos</h2>
          <div className="grid hobbies">
            <article className="hobby">
              <div className="icon" aria-hidden="true">🍳</div>
              <h3>Cocina</h3>
              <p>
                Cocinar me relaja y me organiza. Planeo recetas sencillas, cuido tiempos y presentación,
                y anoto ajustes para repetir lo que sale bien. Me gusta preparar algo rico para mi familia sin complicarme.
              </p>
            </article>

            <article className="hobby">
              <div className="icon" aria-hidden="true">🎮</div>
              <h3>Juegos</h3>
              <p>
                Juego para convivir y despejarme. Prefiero lo cooperativo y de estrategia porque exige coordinar,
                comunicar y decidir rápido. Me gusta analizar cada partida para aprender y mejorar.
              </p>
            </article>

            <article className="hobby">
              <div className="icon" aria-hidden="true">📺</div>
              <h3>Ver series</h3>
              <p>
                Me encantan las series de ciencia ficción y misterio. Disfruto fijarme en detalles y teorías; a veces
                maratoneo y otras veo un episodio con calma para comentarlo después.
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
