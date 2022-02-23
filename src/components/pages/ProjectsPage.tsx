import { AbsoluteCenter, Box } from "@chakra-ui/react";
import React from "react";
import CustomCarousel from "../atoms/CustomCarousel";
import ProfileCard from "../molecules/ProfileCard";
import PortfolioLayout from "../template/PortfolioLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsPage: React.FC = () => {
  return (
    <PortfolioLayout>
      <AbsoluteCenter>
        <CustomCarousel />
      </AbsoluteCenter>
    </PortfolioLayout>
  );
};

export default ProjectsPage;
