"use client";
// PdfViewer.tsx

import { useState } from "react";
import { Document, Page } from "react-pdf"; // For react-pdf

interface PdfProps {
  src: string;
}

const PdfViewer: React.FC<PdfProps> = ({ src }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      {numPages > 0 && ( // Use numPages > 0 for type safety
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
};

export default PdfViewer;
