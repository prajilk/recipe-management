import { useLocation } from "react-router-dom";
import { useRecipeById } from "../api/get-recipe-by-id";

const RecipePage = () => {
    const recipeId = useLocation().pathname.split("/").at(-1);

    const recipe = useRecipeById(recipeId);

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
                <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div>
                        <img
                            alt="Recipe Image"
                            className="aspect-[3/2] w-full rounded-lg object-cover"
                            height="400"
                            src={recipe?.image}
                            width="600"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {recipe?.name}
                            </h1>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2">
                                <ClockIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500 ">
                                    Prep Time: {recipe.prepTimeMinutes} mins
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FlameIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500 ">
                                    Cook Time: {recipe.cookTimeMinutes} mins
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TableIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500 ">
                                    Serves: {recipe.servings}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FlameIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500 ">
                                    Calories: {recipe.caloriesPerServing} per
                                    serving
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FlameIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm text-gray-500 ">
                                    Difficulty: {recipe.difficulty}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                        <div>
                            <h2 className="text-2xl font-bold">Ingredients</h2>
                            <ul className="mt-4 space-y-2 text-gray-500">
                                {recipe.ingredients?.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Instructions</h2>
                            <ol className="mt-4 space-y-4 text-gray-500 list-disc">
                                {recipe.instructions?.map((instruction, i) => (
                                    <li key={i}>{instruction}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

function ClockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function FlameIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
    );
}

function TableIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
        </svg>
    );
}

export default RecipePage;
