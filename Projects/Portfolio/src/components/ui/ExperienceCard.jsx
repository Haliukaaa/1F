export default function ExperienceCard({logo, title, desc, date}) {
    return(
        <div className="bg-white flex gap-16 p-8 rounded-xl shadow justify-between">
            <div className="img w-28">
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold">{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="date">
                <p>{date}</p>
            </div>
        </div>
    );
};