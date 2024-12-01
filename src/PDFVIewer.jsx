import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function PDFViewer(props) {
  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
      <div style={{ height: '70vh', width: '100%' }}>
        <Viewer fileUrl={props.fileName} />
      </div>
    </Worker>
  );
}

export default PDFViewer;