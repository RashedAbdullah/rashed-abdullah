// components/GitHubStats.js
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const explicitTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };
  const minimalTheme = {
    light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
    // for `dark` the default theme will be used
  };
  return (
    <div className="flex justify-center align-middle m-5 p-5 bg-white shadow">
      <GitHubCalendar
        username="RashedAbdullah"
        blockSize={10}
        blockRadius={20}
        // colorScheme="dark"
        fontSize={10}
        showWeekdayLabels={true}
        theme={{ light: ["#304FFF", "#304FFF"] }}
      />
    </div>
  );
};

export default GitHubStats;
