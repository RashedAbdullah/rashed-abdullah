import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  const explicitTheme = {
    light: ["darkgray", "turquoise", "aqua", "cyan", "mediumblue"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  return (
    <div className="flex justify-center align-middle ">
      <div className="lg:w-[60vw] w-[92vw]  bg-white dark:bg-colors-dark_card shadow m-5 p-5 flex justify-center align-middle">
        <GitHubCalendar
          username="RashedAbdullah"
          blockSize={10}
          blockRadius={20}
          colorScheme="light"
          fontSize={10}
          showWeekdayLabels={true}
          theme={explicitTheme}
          errorMessage="About Me"
        />
      </div>
    </div>
  );
};

export default GithubActivity;
