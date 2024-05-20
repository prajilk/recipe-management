const axios = require("../config/axios")

module.exports = {
    getRecipes: async (req, res) => {
        try {
            const result = await axios.get('/recipes');
            res.status(200).json(result.data.recipes)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong" })
        }
    },
    getRecipeById: async (req, res) => {
        try {

            const { recipeId } = req.params

            if (!recipeId) return res.status(400).json({ message: "Invalid recipe id" })

            const result = await axios.get(`/recipes/${recipeId}`);
            res.status(200).json(result.data)
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" })
        }
    },
    searchRecipes: async (req, res) => {

        const { q } = req.query;

        try {
            const result = await axios.get(`/recipes/search?q=${q}`);
            res.status(200).json(result.data.recipes)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong" })
        }
    }
}