import Button from '../ui/Button';
import ExperienceCard from '../ui/ExperienceCard';

const workExp = [
  {logo: "./ssmlogo.png",
    title: "English Teacher",
    desc: "Taught buncha spoiled kids",
    date: "2022-2023"
  },
  {logo: "./beautysecrets.png",
    title: "English Teacher",
    desc: "Taught buncha spoiled kids",
    date: "2020-2022"
  },
  {logo: "./kempinski.png",
    title: "English Teacher",
    desc: "Taught buncha spoiled kids",
    date: "2019-2020"
  }
];


export const Experience = () => {
    return (
      <div className="padding bg-gray-50">
        <div className="text-container">
          <Button buttonText={"Experience"}/>
          <p className='text-center text-lg lg:text-xl'>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex flex-col gap-12 mt-12">
          {workExp.map((el) => (
          <ExperienceCard logo={el.logo} title={el.title} desc={el.desc} date={el.date}/>
        ))}
        </div>
      </div>
    );
};