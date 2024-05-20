import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import { Toaster } from "sonner";
import Recipes from "./pages/recipes";
import RecipePage from "./pages/recipe-page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<RecipePage />} />
            </Routes>
            <Toaster richColors position="top-right" />
        </>
    );
}

export default App;
