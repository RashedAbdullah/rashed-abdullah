import Image from "next/image";

const GithubStreak = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="lg:w-[60vw] w-[92vw]  bg-white dark:bg-colors-dark_card dark:text-white shadow m-5 p-5 flex justify-center align-middle">
        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=RashedAbdullah&theme=transparent`}
          alt="github-readme-streak-stats"
          width={500}
          height={700}
        />
      </div>
    </div>
  );
};

export default GithubStreak;
