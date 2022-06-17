import React, { useState, useEffect } from "react";

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
    <h1>Hi 👋🏻 I'm Vivian!
      <span> I'm a {title}</span>
    </h1>
  );
}