import { useEffect, useState } from "react";

export const Resume = () => {
  const MOBILE_WIDTH = 800;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

  const handleWidthChange = () => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  return (
    <div>
      <section className="pdfViewer">
        <a
          className="downloadLink"
          target="_blank"
          href="https://drive.google.com/file/d/1kj6YSn3mUeUHQAbJe9HT0kcMoXCwWZ6R/view?usp=sharing"
        >
          Click here to view in browser and download
        </a>
        <div className="pdf-container">
          {isMobile ? (
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTMcAo8pm3gC-cpovxPETNNAVI6yI3p26T6e4RTtvnA8zgh_oLpEv9Pm_MluhZD2EB_1WCMNabWVyWK/pub?embedded=true"></iframe>
          ) : (
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR3V2-mloOOJYNuswgr6IB9kdh9IpwNQemSlo6h8Bmbn6F4BoZLrPItWmSDTAGAip8qVa5d7qLS1RLS/pub?embedded=true"></iframe>
          )}
        </div>
      </section>
    </div>
  );
};
