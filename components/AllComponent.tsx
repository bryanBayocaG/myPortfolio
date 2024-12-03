"use client";
import Grid from "./Grid";
// import RecentProjects from "./RecentProjects";
import Clients from "./Clients";
// import Experience from "./Experience";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import Loading from "./Loading";
import dynamic from "next/dynamic";

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <Loading />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <Loading />,
});

const AllComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(Math.floor(window.scrollY));
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Grid />
      {scrollY > 300 && <RecentProjects />}
      {scrollY > 1000 && <Experience />}
      {/* <Clients /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default AllComponent;
