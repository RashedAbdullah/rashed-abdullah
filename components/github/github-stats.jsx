import GithubActivity from "./githab-activities";
import GithubStreak from "./github-streak";
import GithubProfileDetails from "./github-profile.details";

const GithubStats = () => {
  return (
    <div>
      <GithubActivity />
      <GithubStreak />
      <GithubProfileDetails />
    </div>
  );
};

export default GithubStats;
