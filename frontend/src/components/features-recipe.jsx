import { Link } from "react-router-dom";
import { useRecipes } from "../api/get-recipes";

const FeaturesRecipe = () => {
    const recipes = useRecipes();

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Featured Recipes
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Discover a curated selection of delicious recipes to
                            inspire your next culinary adventure.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    {recipes.slice(0, 6).map((recipe, i) => (
                        <Link to={`/recipes/${recipe.id}`}>
                            <div
                                className="grid gap-1 place-items-center"
                                key={i}
                            >
                                <img
                                    alt="Recipe"
                                    className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                                    height="200"
                                    src={recipe.image}
                                    width="300"
                                />
                                <h3 className="text-lg font-bold">
                                    {recipe.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesRecipe;
