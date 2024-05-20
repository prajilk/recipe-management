import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Start Your Culinary Journey Today
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Sign up for our recipe management platform and unlock a
                        world of culinary possibilities.
                    </p>
                </div>
                <div className="flex space-x-4 lg:justify-end">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-500"
                        to="/recipes"
                    >
                        Explore recipes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Footer;
