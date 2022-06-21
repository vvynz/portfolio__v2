import React, { useState, useEffect } from "react";

import "../Styles/Header.scss";

const intro = "front-end developer.";

export default function Header() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle(intro.slice(0, title.length + 1))
    }, 100)

    return () => clearTimeout(timeout);
  }, [title])

  return (
    <header>
      <h1>Hi 👋🏻 I'm Vivian! I'm a
      <span className="intro_title"> {title}</span>
      </h1>
    </header>
  );
}