import PdfViewer from "../../components/PdfViewer";

const HomePage = () => {
  const pdfSrc = "/sample.pdf"; // Replace with your PDF path

  return (
    <div>
      <PdfViewer src={pdfSrc} />
    </div>
  );
};

export default HomePage;
