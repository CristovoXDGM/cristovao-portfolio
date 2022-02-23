import { AbsoluteCenter } from "@chakra-ui/react";
import React from "react";
import ProfileCard from "../molecules/ProfileCard";
import PortfolioLayout from "../template/PortfolioLayout";

const AboutPage: React.FC = () => {
  return (
    <PortfolioLayout>
      <ProfileCard />
    </PortfolioLayout>
  );
};

export default AboutPage;
