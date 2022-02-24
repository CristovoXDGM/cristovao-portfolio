import { AbsoluteCenter } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BoxAnimated,
  boxAnimatedVariant,
} from "../../styles/animatedComponents";
import CustomCarousel from "../atoms/CustomCarousel";
import PortfolioLayout from "../template/PortfolioLayout";

const ProjectsPage: React.FC = () => {
  return (
    <PortfolioLayout>
      <AbsoluteCenter>
        <BoxAnimated
          variants={boxAnimatedVariant}
          initial="hidden"
          animate="visible"
        >
          <CustomCarousel />
        </BoxAnimated>
      </AbsoluteCenter>
    </PortfolioLayout>
  );
};

export default ProjectsPage;
