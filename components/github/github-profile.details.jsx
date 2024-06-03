import Image from "next/image";

const GithubProfileDetails = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="lg:w-[60vw] w-[92vw]  bg-white dark:bg-colors-dark_card shadow m-5 p-5 flex justify-center align-middle">
        <Image
          alt="Github profile details"
          width={800}
          height={700}
          src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RashedAbdullah&theme=transparent"
        />
      </div>
    </div>
  );
};

export default GithubProfileDetails;
