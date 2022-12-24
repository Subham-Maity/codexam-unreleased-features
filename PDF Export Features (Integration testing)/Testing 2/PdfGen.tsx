import * as React from 'react';
import { Document, Page, View } from 'react-pdf';

interface PDFExportProps {
    mdxContent: string;
}

const PDFExport: React.FC<PDFExportProps> = ({ mdxContent }) => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.print()}
            >
                Export PDF
            </button>
            <Document
                file={mdxContent}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ),
                )}
            </Document>
        </div>
    );
};

export default PDFExport;
