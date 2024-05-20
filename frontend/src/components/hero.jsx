import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                    <img
                        alt="Hero"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                        height="550"
                        src="https://images.unsplash.com/photo-1650977399594-504c2aa27b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9tbyUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Elevate Your Culinary Experience
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Discover, organize, and plan your meals with our
                                intuitive recipe management platform.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center text-white rounded-md border border-gray-200 bg-black px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                to="/recipes"
                            >
                                Explore Recipes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
