import React from "react";
import { createRoot } from "react-dom/client";

interface JsonData {
  hello: "world";
  mode: "DEV" | "PROD";
}

const AjaxContent = function () {
  const [data, setData] = React.useState<JsonData | null>(null);
  React.useEffect(() => {
    (async function () {
      const res = await fetch("/api/json", { method: "GET" });
      const data: JsonData = await res.json();
      setData(data);
    })();
  }, []);

  return (
    <div
      className="alert alert-secondary shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      role="alert"
    >
      {data === null ? (
        "Loading"
      ) : (
        <p className="font-monospace">{JSON.stringify(data)}</p>
      )}
    </div>
  );
};

const App = function () {
  return (
    <>
      <div
        className="alert alert-secondary shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        role="alert"
      >
        <blockquote className="blockquote">
          <p>Nel mezzo del cammin di nostra vita</p>
          <p>mi ritrovai per una selva oscura,</p>
          <p>ché la diritta via era smarrita.</p>
        </blockquote>
      </div>
      <AjaxContent />
    </>
  );
};

createRoot(document.getElementById("app")!).render(<App />);
