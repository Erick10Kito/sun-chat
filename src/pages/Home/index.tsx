import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button>
        <Link to="/mensagens">Go to the next page</Link>
      </button>
    </div>
  );
}
