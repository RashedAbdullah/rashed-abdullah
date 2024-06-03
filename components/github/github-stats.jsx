import React from "react";
import GithubActivity from "./githab-activities";
import GlowCard from "./glow-card";
import SectionTitle from "./section-title";
import Image from "next/image";
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
