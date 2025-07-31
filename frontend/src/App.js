import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>Backend says: {data}</p>
    </div>
  );
}

export default App;
