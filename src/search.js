import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Weather in..." className="search" />
        <button type="button" className="btn btn-search">
          🔍
        </button>
        <button type="button" className="btn btn-my-location">
          🧭
        </button>
      </form>
    </div>
  );
}
