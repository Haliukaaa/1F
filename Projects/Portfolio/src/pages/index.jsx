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
import { useRef } from "react";

export default function Index() {
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
    <div className="container max-w-[1440px]">
      <Header handleClick={handleClick} clickExp={clickExp} clickWork={clickWork} clickContact={clickContact}/>
      <Profile />
      <About innerRef={innerRef} />
      <Skills />
      <Experience expRef={expRef} />
      <Work workRef={workRef} />
      <GetInTouch contactRef={contactRef} />
      <Footer />
    </div>
  );
}
