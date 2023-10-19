import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/Pages/Routes/appRouter";
import "./App.css";
import { LikedCardsProvider } from "./store/LikedCardsContext";

function App() {
  return (
    <div className="App">
      <LikedCardsProvider>
        <RouterProvider router={appRouter} />
      </LikedCardsProvider>
    </div>
  );
}

export default App;
