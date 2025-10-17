import { Download, Loader2 } from "lucide-react";
import html2pdf from "html2pdf.js";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ExportPdfButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPdf = async () => {
    try {
      setIsExporting(true);
      const element = document.querySelector('main');
      
      if (!element) {
        toast({
          title: "Error",
          description: "Could not find content to export",
          variant: "destructive"
        });
        return;
      }
      
      const opt = {
        margin: [0.3, 0.3, 0.3, 0.3] as [number, number, number, number],
        filename: 'NexArt-Presentation.pdf',
        image: { type: 'jpeg' as const, quality: 0.9 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          windowWidth: 1920,
          scrollY: -window.scrollY,
          scrollX: -window.scrollX,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' as const,
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: ['img', 'tr', 'td']
        }
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "Success",
        description: "PDF exported successfully"
      });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the PDF. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExportPdf}
      disabled={isExporting}
      className="fixed top-6 right-6 z-50 px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:scale-105 shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isExporting ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download size={20} />
          Export to PDF
        </>
      )}
    </button>
  );
};

export default ExportPdfButton;
