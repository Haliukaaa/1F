import { useContext } from "react";
import { StateContext } from "../utils/Data";
import { Button2 } from "../ui/Button2";
import { LoadMore } from "../ui/LoadMore";
import { Title } from "../ui/Title";
import { useState } from "react";
import Link from "next/link";

export const Articles = () => {
  const { filteredArray, setFilteredArray, loadMore } =
    useContext(StateContext);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTag = (tag) => {
    if (tag === "all") {
      setSelectedTags([]);
      return;
    }

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredArticles = filteredArray.filter((article) => {
    const firstTag = article.tag_list[0];
    if (selectedTags.length === 0) {
      return true;
    }
    return selectedTags.includes(firstTag);
  });

  return (
    <div className="mb-[100px]">
      <Title text="Articles" />
      <div className="flex justify-between mt-10 *:font-bold">
        {/* tags */}
        <ul className="flex gap-4">
          <li className="text-color2" onClick={() => handleTag("all")}>
            All
          </li>
          <li
            className="text-color2 hover:cursor-pointer "
            onClick={() => handleTag("coding")}
          >
            Coding
          </li>
          <li
            className="text-color2 hover:cursor-pointer"
            onClick={() => handleTag("career")}
          >
            Career
          </li>
          <li
            className="text-color2 hover:cursor-pointer"
            onClick={() => handleTag("discuss")}
          >
            Discuss
          </li>
          <li
            className="text-color2 hover:cursor-pointer"
            onClick={() => handleTag("webdev")}
          >
            Webdev
          </li>
          <li
            className="text-color2 hover:cursor-pointer"
            onClick={() => handleTag("ai")}
          >
            AI
          </li>
        </ul>
              <p className="text-color2">View all</p>
        
      </div>
      {/* Articles */}
        <div className="grid grid-cols-3 gap-5 mt-8 mb-10">
          {filteredArticles.map((el) => {
            return (
              <div>
                <Link href={{ pathname: "/single-post", query: { id: el.id } }}>
                <div className="flex flex-col rounded-xl border border-slate-200 p-5 gap-7">
                {/* image */}
                <div>
                  <img
                    src={el.cover_image || "./placeholderimg.jpeg"}
                    className="rounded-md h-[240px] w-full object-cover"
                  />
                </div>
                {/* text container */}
                <div className="flex flex-col justify-between gap-5 flex-1">
                  <div>
                    <Button2
                      buttonText={el.tag_list[0] || el.tag_list[1] || "news"}
                    />
                  </div>
                  <h1 className="font-bold text-2xl">{el.title}</h1>
                  <p className="text-gray-400">{el.readable_publish_date}</p>
                </div>
                </div>
              </Link>
              </div>
            );
          })}
        </div>
      </Link>
      {/* Load more */}
      <div className="flex justify-center">
        <div className="loadmore hover:cursor-pointer" onClick={loadMore}>
          Load More
        </div>
      </div>
    </div>
  );
};
