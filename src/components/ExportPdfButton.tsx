import { Download } from "lucide-react";
import html2pdf from "html2pdf.js";

const ExportPdfButton = () => {
  const handleExportPdf = () => {
    const element = document.querySelector('main');
    
    const opt = {
      margin: 0.5,
      filename: 'NexArt-Presentation.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={handleExportPdf}
      className="fixed top-6 right-6 z-50 px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:scale-105 shadow-lg flex items-center gap-2"
    >
      <Download size={20} />
      Export to PDF
    </button>
  );
};

export default ExportPdfButton;
