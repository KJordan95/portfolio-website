import { CardSection } from "@/components/sections/card-section";
import CppLogo from "@/assets/img/Cpp-logo.svg";
import JSLogo from "@/assets/img/JavaScript-logo.png";
import JavaLogo from "@/assets/img/Java-logo.png";
import {
  JavaScriptDescription,
  CppDescription,
} from "@/assets/text/language-desrciptions";

export const Projects = () => {
  let cardCounter = 0;

  return (
    <section>
      <h1 className="projects-header">Notable Side Projects</h1>
      <h4 className="projects-subheader">
        Click each card to learn more about them!
      </h4>

      <div className="infocards">
        <CardSection
          imgSrc={JSLogo}
          altAttributeVale="JavaScript Card"
          title="JavaScript"
          inlineStyle={{ backgroundColor: "rgb(240, 220, 78)" }}
          description={JavaScriptDescription}
          order={cardCounter++}
          GithubLink="https://github.com/KJordan95/peggle-like-game"
          // LiveDemoLink={}
        >
          <div className="chip">JavaScript</div>
        </CardSection>
        <CardSection
          imgSrc={CppLogo}
          altAttributeVale="C plus plus Card"
          title="C++"
          inlineStyle={{ backgroundColor: "rgb(26, 70, 116)" }}
          description={CppDescription}
          order={cardCounter++}
        >
          <div className="chip">C++</div>
        </CardSection>
      </div>
    </section>
  );
};
