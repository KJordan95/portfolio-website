import { ImageSection } from "../../components/sections/image-section";
import { TextSection } from "../../components/sections/text-section";
import CppLogo from "@/assets/img/Cpp-logo.svg";
import JSLogo from "@/assets/img/JavaScript-logo.png";
import JavaLogo from "@/assets/img/Java-logo.png";
import { CardSection } from "../../components/sections/card-section";
import {
  JavaScriptDescription,
  CppDescription,
} from "@/assets/text/language-desrciptions";
import "./home.css";
import { ExperienceSection } from "../../components/sections/experience-section";

export const Home = () => {
  let cardCounter = 0;
  let frameworkCounter = 0;

  return (
    <div>
      <TextSection title="Test" body="This is a test" />
      <ExperienceSection></ExperienceSection>
      <TextSection title="Test2" body="This is a test" />
      <TextSection title="Test3" body="This is a test" />
      <TextSection title="Test4" body="This is a test" />
      <section>
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

      <section>
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
    </div>
  );
};
