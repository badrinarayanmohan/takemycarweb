import { Worker, Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function tos() {
  return (
    <div
      id="TOS"
      style={{
        border: "1px solid rgba(0, 0, 0, 0)",
        height: "100vh",
        margin: "0 auto",
        paddingTop: "13vh",
      }}
      //more styling in globals.css
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer fileUrl="/TOS.pdf" />
      </Worker>
    </div>
  );
}
