import React from 'react';
import Messages from './Messages';
import './dow.scss';
import html2pdf from 'html2pdf.js';

const Download = () => {

    const handleDownload = () => {
        var element = document.getElementById('element-to-print');
        var opt = {
            // margin: 1,
            filename: 'chat.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().from(element).set(opt).save();

        // Old monolithic-style usage:
        html2pdf(element, opt);
    }

    return (
        <>
            <div id='element-to-print' >
                <Messages />
            </div>
            <button onClick={handleDownload}>Download</button>
        </>
    )
}

export default Download
