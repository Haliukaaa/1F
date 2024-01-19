import { Header, About, Contact, Experience, Footer, Profile, Skills, Work } from '../components/layout/index';

export default function Index() {
  return (
  <div className='container max-w-[1440px]'>
    <Header/>
    <Profile/>
    <About/>
    <Skills />
    <Experience />
    <Work />
  </div>
  );
}
