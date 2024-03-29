import Header from './Header';



export const Profile = ({darkMode}) => {
  return (
    <section className="flex flex-col-reverse px-4 md:px-5 py-16 md:flex-row lg:px-20 gap-12 dark:bg-slate-950">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="font-bold text-4xl lg:text-6xl mb-2 lg:mb-4 dark:white-title">Hi, I’m Sagar 👋</h1>
          <p className="dark:white-text">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Icon">
                  <path
                    id="Vector"
                    d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <p className="dark:white-text">Ahmedabad, India</p>
          </div>
          <div className="offer flex gap-2">
            <div className="flex items-center justify-center w-6">
              <div className="rounded-full w-2 h-2 bg-green-500"></div>
            </div>
            <p className="dark:white-text">Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M9 18C4.49 20 4 16 2 16"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z"
                stroke={darkMode === "dark" ? "#D1D5DB" : "#4B5563"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-[240px] h-[280px] md:min-w-[240px] lg:min-w-[280px] lg:min-h-[320px] object-cover border-8 border-white" src="/profile.jpg" alt="girl with a black hair" />
      </div>
    </section>
  );
};
