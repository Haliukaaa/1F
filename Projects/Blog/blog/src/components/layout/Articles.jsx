import { useContext } from "react";
import { StateContext } from "../utils/Data";
import { Button2 } from "../ui/Button2";
import { LoadMore } from "../ui/LoadMore";
import {Title} from '../ui/Title';

export const Articles = () => {
  const { articles } = useContext(StateContext);


  return (
    <div>
      <Title text="Articles"/>
      <div className="flex justify-between mt-10 *:font-bold">
        <ul className="flex gap-4">
          <li className="text-color2">All</li>
          <li className="text-color2">Coding</li>
          <li className="text-color2">Career</li>
          <li className="text-color2">Discuss</li>
          <li className="text-color2">webdev</li>
          <li className="text-color2">productivity</li>
        </ul>
        <p className="text-color2">View all</p>
      </div>
      {/* Articles */}
      <div className="grid grid-cols-3 gap-5 mt-8">
        {articles.map((el) => {
          return (
            <div className="flex flex-col rounded-xl border border-slate-200 p-5 gap-7">
            {/* image */}
              <div>
              <img src={el.cover_image || "./placeholderimg.jpeg"} className="rounded-md h-[240px] w-full object-cover"/>
              </div>
            {/* text container */}
            <div className="flex flex-col justify-between gap-5 flex-1">
              <Button2 buttonText={el.tag_list[0] || el.tag_list[1]} />
              <h1 className="font-bold text-2xl">{el.title}</h1>
              <p className="text-gray-400">{el.readable_publish_date}</p>
            </div>
          </div>
          )
        })}
      </div>
      {/* Load more */}
      <LoadMore buttonText={"Load More"}/>
    </div>
  );
};
