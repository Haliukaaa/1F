import { Header, About, Contact, Experience, Footer, Profile, Skills } from '../components/layout/index';

export default function Index() {
  return (
  <div className='container max-w-[1440px]'>
    <Header/>
    <Profile/>
    <About/>
  </div>
  );
}
