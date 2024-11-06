// contexts/FileUploadContext.js
import { createContext, useContext, useState } from 'react';

const FileUploadContext = createContext();

export const FileUploadProvider = ({ children }) => {
    const [fileList, setFileList] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleFileChange = (files) => setFileList(files);
    const handlePopupOpen = () => setIsPopupOpen(true);
    const handlePopupClose = () => setIsPopupOpen(false);

    return (
        <FileUploadContext.Provider value={{
            fileList,
            handleFileChange,
            isPopupOpen,
            handlePopupOpen,
            handlePopupClose
        }}>
            {children}
        </FileUploadContext.Provider>
    );
};

export const useFileUpload = () => useContext(FileUploadContext);
