type ProjectData = {
  img: string;
  imgFallback: string;
  title: string;
  timePeriod: string;
  description: string;
  pointsToBeNoted: string[];
  technologies: string[];
  urls: { href: string; label: string }[];
};

export default ProjectData;
