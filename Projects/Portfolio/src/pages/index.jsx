import {
  Header,
  About,
  Experience,
  Footer,
  Profile,
  Skills,
  Work,
  GetInTouch,
} from "../components/layout/index";
import Menu from "../components/ui/Menu";
import { useRef, useEffect } from "react";

export default function Home() {
  const innerRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const handleClick = () => {
    innerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickExp = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <div className="container max-w-screen-xl mx-auto relative overflow-hidden">
        <Menu />
      </div>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Header className="max-w-screen-xl" handleClick={handleClick}
          clickExp={clickExp}
          clickWork={clickWork}
          clickContact={clickContact}/>
        </div>
      </div>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Profile className="max-w-screen-xl"/>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <About className="max-w-screen-xl" innerRef={innerRef} />
        </div>
      </div>
      <Skills />
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <Experience className="max-w-screen-xl" expRef={expRef} />
        </div>
      </div>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Work className="max-w-screen-xl" workRef={workRef} />
        </div>
      </div>
      <GetInTouch contactRef={contactRef} />
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <Footer className="max-w-screen-xl" contactRef={contactRef} />
        </div>
      </div>
    </div>
  );
}
