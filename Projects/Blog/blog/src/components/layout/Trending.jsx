export const Trending = ({articles}) => {
    console.log(articles);
    return(
        <div className="my-[100px]">
            <div>
                <h1 className="text-2xl font-bold">Trending</h1>
            </div>
            <div className="flex gap-3">
                {articles.map((el) => {
                    return (
                        <div className="relative w-1/4 h-[320px] overflow-hidden rounded-xl">
                            {/* text container */}
                            <div className="absolute"></div>
                            {/* img container */}
                            <div className="relative h-full">
                                {/* shadow */}
                                <div className="w-full h-full absolute"></div>
                                <img className="w-full h-full object-cover" src={el.cover_image || "./placeholderimg.jpeg"} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};