import {
  Header,
  Articles,
  Carousel,
  Contact,
  Footer,
  Trending,
} from "../components/layout/index";
import { useState, useEffect } from "react";

export default function Home() {

  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <Header />
      </div>
      <Carousel/>
      <div className="container max-w-screen-xl mx-auto">
        <Trending/>
        <Articles/>
      </div>
      <div className="container max-w-screen-xl mx-auto">
        <Contact />
      </div>
    </div>
  );
}
