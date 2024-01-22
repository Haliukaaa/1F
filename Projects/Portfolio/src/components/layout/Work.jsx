import Button from '../ui/Button';
import WorkCard from '../ui/WorkCard';

export const Work = () => {
    return (
      <div className='padding'>
        <div className="text-container">
          <Button buttonText={"Work"}/>
          <p className='text-center text-lg lg:text-xl'>Some of the noteworthy projects I have built:</p>
        </div>
        <WorkCard/>
      </div>
    );
  };