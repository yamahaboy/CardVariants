import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Pages/Routes/appRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
