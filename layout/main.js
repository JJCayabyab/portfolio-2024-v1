/** LIBRARIES */
import React, { 
    useState, 
    useEffect, 
} from "react";
import dynamic from "next/dynamic";

/** COMPONENTS */
const Head = dynamic(() => import("components/generics/Head"));
const LoaderComponent = dynamic(() => import("components/generics/Loader"));

/** STYLES */
import style from "styles/main.module.scss";

const MainLayout = (props) => {
  

}

export default MainLayout;