import { Link } from "react-router-dom";
import { useRecipes } from "../api/get-recipes";
import { useState } from "react";
import { toast } from "sonner";
import axios from "../config/axios";

const Recipes = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const recipes = useRecipes();

    async function getSearchRecipes() {
        try {
            setLoading(true);
            const recipes = await axios.get("/api/recipes/search", {
                params: {
                    q: search,
                },
            });
            setSearchResult(recipes.data);
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    function handleSearch() {
        getSearchRecipes();
    }

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Discover Delicious Recipes
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Find the perfect recipe for any occasion with
                                our curated collection.
                            </p>
                        </div>
                        <div className="w-full max-w-md flex gap-2">
                            <input
                                className="w-full bg-zinc-100 rounded-md p-2 px-3 border outline-none"
                                placeholder="Search recipes..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search"
                            />
                            <button
                                className="px-3 py-2 rounded-md bg-black text-white"
                                onClick={handleSearch}
                            >
                                {loading ? "Searching..." : "Search"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
                    {searchResult.length > 0
                        ? searchResult.map((recipe, i) => (
                              <div
                                  className="relative group overflow-hidden rounded-lg"
                                  key={i}
                              >
                                  <Link
                                      className="absolute inset-0 z-10"
                                      to={`/recipes/${recipe.id}`}
                                  >
                                      <span className="sr-only">View</span>
                                  </Link>
                                  <img
                                      alt="Recipe 1"
                                      className="object-cover w-full h-60"
                                      height={300}
                                      src={recipe.image}
                                      style={{
                                          aspectRatio: "400/300",
                                          objectFit: "cover",
                                      }}
                                      width={400}
                                  />
                                  <div className="bg-white p-4">
                                      <h3 className="font-semibold text-lg md:text-xl">
                                          {recipe.name}
                                      </h3>
                                  </div>
                              </div>
                          ))
                        : recipes.map((recipe, i) => (
                              <div
                                  className="relative group overflow-hidden rounded-lg"
                                  key={i}
                              >
                                  <Link
                                      className="absolute inset-0 z-10"
                                      to={`/recipes/${recipe.id}`}
                                  >
                                      <span className="sr-only">View</span>
                                  </Link>
                                  <img
                                      alt="Recipe 1"
                                      className="object-cover w-full h-60"
                                      height={300}
                                      src={recipe.image}
                                      style={{
                                          aspectRatio: "400/300",
                                          objectFit: "cover",
                                      }}
                                      width={400}
                                  />
                                  <div className="bg-white p-4">
                                      <h3 className="font-semibold text-lg md:text-xl">
                                          {recipe.name}
                                      </h3>
                                  </div>
                              </div>
                          ))}
                </div>
            </section>
        </>
    );
};

export default Recipes;
