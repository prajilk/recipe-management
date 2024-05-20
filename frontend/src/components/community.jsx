const Community = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Join Our Community
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Connect with fellow food enthusiasts, share recipes,
                            and discover new culinary inspirations.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Recipe Sharing
                                    </h3>
                                    <p className="text-gray-500">
                                        Contribute your own recipes and get
                                        feedback from the community.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Cooking Challenges
                                    </h3>
                                    <p className="text-gray-500">
                                        Participate in fun cooking challenges
                                        and competitions.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Personalized Recommendations
                                    </h3>
                                    <p className="text-gray-500">
                                        Receive personalized recipe suggestions
                                        based on your preferences.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        alt="Community"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-3026808.jpg&fm=jpg"
                        width="550"
                    />
                </div>
            </div>
        </section>
    );
};

export default Community;
