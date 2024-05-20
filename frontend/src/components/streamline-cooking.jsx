const StreamlineCooking = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Streamline Your Cooking
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover how our recipe management platform can
                            simplify your cooking experience.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <img
                        alt="Feature"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="https://thumbs.dreamstime.com/b/assorted-indian-food-set-wooden-background-dishes-appetisers-indeed-cuisine-rice-lentils-paneer-samosa-spices-mas-masala-179640947.jpg"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Recipe Organization
                                    </h3>
                                    <p className="text-gray-500">
                                        Easily store, search, and manage all
                                        your favorite recipes in one place.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Meal Planning
                                    </h3>
                                    <p className="text-gray-500">
                                        Plan your meals ahead of time and
                                        generate customized grocery lists.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Cooking Assistance
                                    </h3>
                                    <p className="text-gray-500">
                                        Get step-by-step instructions and tips
                                        to help you cook like a pro.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamlineCooking;
