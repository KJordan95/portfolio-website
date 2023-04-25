import { CardSection } from "@/components/sections/card-section";
import CppLogo from "@/assets/img/Cpp-logo.svg";
import TextEditorPicture from "@/assets/img/SpellChecker.gif";
import {
  PortfolioWebSiteDescription,
  TextEditorDescription,
} from "@/assets/text/project-desrciptions";

export const Projects = () => {
  let cardCounter = 0;

  return (
    <section>
      <h1 className="projects-header">Notable Side Projects</h1>
      <h4 className="projects-subheader">
        Click each project to learn more about them!
      </h4>

      <div className="infocards">
        <CardSection
          imgSrc={CppLogo}
          altAttributeVale="Portfolio Website Project"
          title="This Portfolio Website"
          inlineStyle={{ backgroundColor: "rgb(240, 220, 78)" }}
          description={PortfolioWebSiteDescription}
          order={cardCounter++}
          GithubLink="https://github.com/KJordan95/portfolio-website"
          // LiveDemoLink={}
        >
          <div className="chip">TypeScript</div>
          <div className="chip">ReactJS</div>
          <div className="chip">NodeJS</div>
          <div className="chip">Vite</div>
        </CardSection>
        <CardSection
          imgSrc={TextEditorPicture}
          altAttributeVale="Text Editor Project"
          title="Text Editor in JavaFX"
          inlineStyle={{ backgroundColor: "rgb(26, 70, 116)" }}
          description={TextEditorDescription}
          order={cardCounter++}
          GithubLink="https://github.com/KJordan95/TextEditor_JavaFX"
        >
          <div className="chip">Java</div>
          <div className="chip">JavaFX</div>
        </CardSection>
      </div>
    </section>
  );
};
