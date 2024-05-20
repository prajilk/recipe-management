import { useEffect, useState } from "react";
import axios from "../config/axios";
import { toast } from "sonner";

export function useRecipeById(recipeId) {
    const [recipe, setRecipe] = useState({});

    async function getRecipeById() {
        try {
            const recipes = await axios.get(`/api/recipes/${recipeId}`);
            setRecipe(recipes.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        getRecipeById();
    }, []);

    return recipe;
}