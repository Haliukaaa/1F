import Image from '../components/Image';
import TextContent from '../components/TextContent';

const Home = () => {
  return (
    <>
      <div className="large-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div className="img-container" style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <Image />
        <Image />
        <Image />
      </div>
      <div className="text-container" style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
        <TextContent />
        <TextContent />
      </div>
      </div>
    </>
  );
};

export default Home;
