import { useState } from "react";

function App() {
  return <></>;
}

export default App;
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
