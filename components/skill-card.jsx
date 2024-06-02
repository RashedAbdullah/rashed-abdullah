import { IoIosCheckmark } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

const SkillCard = ({ skill, lang }) => {
  return (
    <div className="lg:w-[50%] bg-white dark:bg-colors-dark_card p-5 shadow relative mt-10 lg:mt-0">
      <div className="h-10 w-10 bg-colors-quinary rounded-full absolute left-[50%] translate-x-[-50%] -top-5 shadow-2xl shadow-colors-quaternary flex justify-center items-center text-lg">
        {skill.skill_type === "Professional" ||
        skill.skill_type === "প্রফেশনাল" ||
        skill.skill_type === "المهارات الاحترافية" ? (
          <IoSettingsSharp color="white" />
        ) : (
          <BiSolidUser color="white" />
        )}
      </div>
      <div className="text-center mt-5 dark:text-white">{skill.skill_type}</div>
      <div className="flex flex-col gap-3">
        {skill.allSkills.map((skl) => (
          <div key={skl.tool}>
            <h3 className="text-xs mb-1 dark:text-white">{skl.tool}</h3>
            <div className="bg-gray-300 h-2">
              <div
                style={{ width: `${skl.capacity}` }}
                className={`bg-colors-quinary h-full relative`}
              >
                <div
                  className={`bg-colors-quinary h-4 w-4 absolute ${
                    lang === "ar" ? "-left-1" : "-right-1"
                  } rounded-full -top-1 shadow-xl shadow-colors-quaternary flex items-center justify-center`}
                >
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
