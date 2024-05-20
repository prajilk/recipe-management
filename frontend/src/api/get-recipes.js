import { useEffect, useState } from "react";
import axios from "../config/axios";
import { toast } from "sonner";

export function useRecipes() {
    const [recipes, setRecipes] = useState([]);

    async function getRecipes() {
        try {
            const recipes = await axios.get("/api/recipes");
            setRecipes(recipes.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return recipes;
}