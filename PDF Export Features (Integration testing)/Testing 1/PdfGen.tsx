import React, { useRef } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';

const MDXToPDFConverter = ({ children }) => {
    const pdfExportComponent = useRef(null);

    const handleExport = () => {
        pdfExportComponent.current.save();
    };

    return (
        <MDXProvider>
            <PDFExport ref={pdfExportComponent} paperSize="A4" margin="2cm">
                {children}
            </PDFExport>
            <Button onClick={handleExport} className="btn-top-right">
                Export to PDF
            </Button>
        </MDXProvider>
    );
};

export default MDXToPDFConverter;
