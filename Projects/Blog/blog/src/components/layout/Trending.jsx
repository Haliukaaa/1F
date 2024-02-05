import { Button } from "../ui/Button";
import { useContext } from "react";
import { StateContext } from "../utils/Data";

export const Trending = () => {
const {trending} = useContext(StateContext);

  return (
    <div className="my-[100px]">
      <div>
        <h1 className="text-2xl font-bold">Trending</h1>
      </div>
      <div className="flex gap-3 mt-10">
        {trending.map((el) => {
          return (
            <div className="relative w-1/4 h-[320px] overflow-hidden rounded-xl">
              {/* text container */}
              <div className="absolute z-[1] bottom-0 flex flex-col gap-3 p-8">
                <Button buttonText={el.tag_list[0] || el.tag_list[1]} />
                <p className="text-white font-bold text-lg">{el.title}</p>
              </div>
              {/* img container */}
              <div className="relative h-full">
                {/* shadow */}
                <div className="w-full h-full absolute bg-black bg-opacity-20"></div>
                <img
                  className="w-full h-full object-cover"
                  src={el.cover_image || "./placeholderimg.jpeg"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
