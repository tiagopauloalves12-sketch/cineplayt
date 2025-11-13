import React from "react";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "20px" }}>
        <MovieGrid />
      </main>

      <WhatsAppButton />
    </div>
  );
}