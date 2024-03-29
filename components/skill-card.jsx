import { IoIosCheckmark } from "react-icons/io";

const SkillCard = ({ skill }) => {
  return (
    <div className="lg:w-[50%] bg-white p-5 shadow relative mt-10 lg:mt-0">
      <div className="h-10 w-10 bg-colors-quinary rounded-full absolute left-[50%] translate-x-[-50%] -top-5 shadow-2xl shadow-colors-quaternary flex justify-center items-center text-lg">
        {skill.icon}
      </div>
      <div className="text-center mt-5">{skill.type}</div>
      <div className="flex flex-col gap-3">
        {skill.skills.map((skl) => (
          <div key={skl.name}>
            <h3 className="text-xs mb-1">{skl.name}</h3>
            <div className="bg-gray-300 h-2">
              <div
                style={{ width: `${skl.consume}` }}
                className={`bg-colors-quinary h-full relative`}
              >
                <div className="bg-colors-quinary h-4 w-4 absolute -right-1 rounded-full -top-1 shadow-xl shadow-colors-quaternary flex items-center justify-center">
                  <IoIosCheckmark color="white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
