import { ImageSection } from "@/components/sections/image-section";
import { TextSection } from "@/components/sections/text-section";
import CppLogo from "@/assets/img/languages/Cpp-logo.svg";
import JSLogo from "@/assets/img/languages/JavaScript-logo.png";
import JavaLogo from "@/assets/img/languages/Java-logo.png";
import ProfilePic from "@/assets/img/Profile-Pic.jpg";
import CSharpLogo from "@/assets/img/languages/Csharp-Logo.png";
import KotlinLogo from "@/assets/img/languages/kotlin-logo.svg";
import SQLLogo from "@/assets/img/languages/sql-logo.png";
import TypeScriptLogo from "@/assets/img/languages/Typescript-logo.png";
import VBSLogo from "@/assets/img/languages/VBScript-logo.png";
import HTMLLogo from "@/assets/img/languages/html-logo.png";
import CSSLogo from "@/assets/img/languages/css-logo.png";
import ReactLogo from "@/assets/img/frameworks/React-icon.svg.png";
import AngularLogo from "@/assets/img/frameworks/angularjs-logo.png";
import NodeLogo from "@/assets/img/frameworks/nodejs-logo.png";
import ExpressLogo from "@/assets/img/frameworks/expressjs_logo.png";
import SeleniumLogo from "@/assets/img/frameworks/Selenium_logo.svg.png";
import "./home.css";
import { ExperienceSection } from "@/components/sections/experience-section";

export const Home = () => {
  let languageCounter = 0;
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
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={CppLogo}
            altAttributeVale="C plus plus Logo"
            title="C++"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={JSLogo}
            altAttributeVale="JavaScript Logo"
            title="JavaScript"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={KotlinLogo}
            altAttributeVale="Kotlin Logo"
            title="Kotlin"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={CSharpLogo}
            altAttributeVale="C Sharp Logo"
            title="C#"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={TypeScriptLogo}
            altAttributeVale="TypeScript Logo"
            title="TypeScript"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={SQLLogo}
            altAttributeVale="SQL Logo"
            title="SQL"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={VBSLogo}
            altAttributeVale="VBS Logo"
            title="VB Script"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={HTMLLogo}
            altAttributeVale="HTML Logo"
            title="HTML"
            order={languageCounter++}
          />
          <ImageSection
            imgSrc={CSSLogo}
            altAttributeVale="CSS Logo"
            title="CSS"
            order={languageCounter++}
          />
        </div>
      </section>

      <section>
        <h1 className="logo-title">Frameworks I Have Experience With:</h1>
        <div className="logos">
          <ImageSection
            imgSrc={ReactLogo}
            altAttributeVale="React Logo"
            title="React"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={AngularLogo}
            altAttributeVale="Angular Logo"
            title="Angular"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={NodeLogo}
            altAttributeVale="Node Logo"
            title="NodeJS"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={ExpressLogo}
            altAttributeVale="Express Logo"
            title="ExpressJS"
            order={frameworkCounter++}
          />
          <ImageSection
            imgSrc={SeleniumLogo}
            altAttributeVale="Selenium Logo"
            title="Selenium Webdriver"
            order={frameworkCounter++}
          />
        </div>
      </section>

      <ExperienceSection></ExperienceSection>
    </div>
  );
};
