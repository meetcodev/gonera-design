import React from "react";
import Wrapper from "../layout/wrapper";
import Preview from "./preview";
import Home from "./home";
import { useTheme } from "next-themes";

const MainRoot = () => (
 
    <Wrapper   >
        <Home />
      {/* <Preview /> */}
    </Wrapper>
  );

export default MainRoot;
