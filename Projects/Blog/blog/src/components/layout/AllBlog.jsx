import Link from "next/link";
import { useContext } from "react";
import { StateContext } from "../utils/Data";
import {Button2} from '../ui/Button2'

export const AllBlog = () => {
  const { articles } = useContext(StateContext);
  return (
    <Link href={{ pathname: "/SinglePost", query: { id: 22222 } }}>
      {articles.map((el) => {
        return (
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
              <Button2 buttonText={el.tag_list[0] || el.tag_list[1]} />
              <h1 className="font-bold text-2xl">{el.title}</h1>
              <p className="text-gray-400">{el.readable_publish_date}</p>
            </div>
          </div>
        );
      })}
    </Link>
  );
};
