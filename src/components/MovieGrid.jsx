import React, { useEffect, useState } from "react";

const TMDB_BASE = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // ← usa sua chave do .env
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieGrid() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`${TMDB_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        const data = await res.json();
        setItems(data.results || []);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", padding: "20px" }}>
      {items.length > 0 ? (
        items.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center", color: "#fff" }}>
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      ) : (
        <p style={{ color: "#fff" }}>Carregando filmes...</p>
      )}
    </div>
  );
}