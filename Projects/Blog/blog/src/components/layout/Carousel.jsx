import {Button} from '../ui/Button'; 

export const Carousel = ({carousel}) => {
  console.log(carousel + "testing");
  return (
    <div className="mt-[100px]">
        {/* Carousel */}
      <div className="max-w-[1216px] h-[651px] relative mx-auto">
        {/* text container */}
        <div className="absolute bg-white bottom-3 left-3 h-auto z-[1] w-1/2 p-10 rounded-xl border border-slate-200 flex flex-col gap-4">
          <Button buttonText={"Technology"}/>
          <h1 className='text-4xl font-semibold'>refergerg</h1>
          <p className=' text-gray-400'>ergergerg</p>
        </div>
        {/* img container */}
        <div className="rounded-xl overflow-hidden relative w-full h-full">
            {/* shadow */}
            <div className="w-full h-full bg-black absolute bg-opacity-20">
            </div>
            {/* image */}
            <div>
              <img src="./placeholderimg.jpeg" alt="futuristic looking dark cyberpunk city" />
            </div>
        </div>
      </div>
      {/* Left and Right buttons */}
      <div className='flex gap-3 max-w-[1216px] justify-end mx-auto mt-3'>
        {/* Left */}
        <div className='border border-gray-600 rounded-md p-3 w-10 h-10'>
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Icon"
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* Right */}
        <div className='border border-gray-600 rounded-md p-3 w-10 h-10'>
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Icon"
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
