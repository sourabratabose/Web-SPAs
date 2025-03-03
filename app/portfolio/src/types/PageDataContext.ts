import CertificationData from "./CertificationData";
import CodeProfileData from "./CodingProfileData";
import EducationData from "./EducationData";
import HeroData from "./HeroData";
import ProjectData from "./ProjectData";
import SkillData from "./SkillData";

type PageData = {
  hero: HeroData,
  codingProfile: CodeProfileData[],
  certification: CertificationData[],
  education: EducationData[],
  skills: SkillData[],
  about: string[],
  projects: ProjectData[],
  contactEmail: string
}

export default PageData;