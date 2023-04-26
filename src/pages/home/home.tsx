import { ImageSection } from "@/components/sections/image-section";
import { TextSection } from "@/components/sections/text-section";
import CppLogo from "@/assets/img/Cpp-logo.svg";
import JSLogo from "@/assets/img/JavaScript-logo.png";
import JavaLogo from "@/assets/img/Java-logo.png";
import ProfilePic from "@/assets/img/Profile-Pic.jpg";
import "./home.css";
import { ExperienceSection } from "@/components/sections/experience-section";

export const Home = () => {
  let frameworkCounter = 0;

  return (
    <div>
      <TextSection title="Test" body="This is a test">
        <div className="home-intro-container">
          <div className="home-intro-text">
            <h3 className="home-intoduction">Hi, I'm</h3>
            <h1 className="home-name">Kameron Jordan</h1>
            <p className="home-description">
              I'm a Full-Stack Software Engineer that can turn ideas into
              realities
            </p>
          </div>
          <img
            className="home-profile-pic"
            src={ProfilePic}
            alt="Profile Picture"
            // height="100px"
            // width="100px"
          />
        </div>
      </TextSection>

      <section>
        <h1 className="logo-title">Programming Languages I've Used:</h1>
        <div className="logos">
          <ImageSection
            imgSrc={JavaLogo}
            altAttributeVale="Java Logo"
            title="Java"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={CppLogo}
            altAttributeVale="C plus plus Logo"
            title="C++"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={JSLogo}
            altAttributeVale="JavaScript Logo"
            title="JavaScript"
            order={frameworkCounter++}
          />
        </div>
      </section>

      <ExperienceSection></ExperienceSection>
    </div>
  );
};
