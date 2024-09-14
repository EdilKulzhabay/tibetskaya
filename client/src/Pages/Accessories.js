import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Добавляем стили аннотаций
import "react-pdf/dist/esm/Page/TextLayer.css"; // Добавляем стили текстового слоя

export default function Accessories() {
    const [numPages, setNumPages] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";

        // Обработчик для изменения ширины экрана
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const calculateScale = () => {
        // Определяем масштаб в зависимости от ширины экрана
        if (width > 1200) return 1.5; // Широкие экраны
        if (width > 768) return 1.2; // Планшеты
        return 0.8; // Мобильные устройства
    };

    return (
        <div className="flex justify-center items-center flex-col min-h-screen">
            <Document file="/prices.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => {
                    return (
                        <div
                            key={`page_${index + 1}`}
                            className={index > 0 ? "-mt-[85px]" : ""}
                        >
                            <Page
                                pageNumber={index + 1}
                                scale={calculateScale()} // Масштабируем страницы
                            />
                        </div>
                    );
                })}
            </Document>
        </div>
    );
}
