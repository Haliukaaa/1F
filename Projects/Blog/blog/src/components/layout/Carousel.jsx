export const Carousel = () => {
  return (
    <div>
        {/* Carousel */}
      <div className="max-w-[1216px]">
        {/* text container */}
        <div></div>
        {/* img container */}
        <div>
            {/* shadow */}
            <div></div>
            <div></div>
        </div>
      </div>
      {/* Left and Right buttons */}
      <div>
        <div>
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
        <div>
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
