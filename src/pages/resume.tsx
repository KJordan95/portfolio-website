import { Link } from "react-router-dom";
import resumePDF from "/Resume.pdf";

export const Resume = () => {
  const FILE_NAME = "";
  return (
    <div>
      <section className="pdfViewer">
        <Link to={resumePDF} target="_blank" download className="downloadLink">
          Click here to download
        </Link>
        <iframe src={resumePDF} width="100%" height="100%"></iframe>
      </section>
    </div>
  );
};
