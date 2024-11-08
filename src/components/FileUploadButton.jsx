import { useState } from 'react';
import FileUploadPopUp from './FileUploadPopUp';

const FileUploadButton = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [savedFiles, setSavedFiles] = useState([]);
    const [tempFiles, setTempFiles] = useState([]);

    const handleClick = () => {
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    const handleFileChange = (files) => {
        setTempFiles(files);
    };

    const handleAttachFile = () => {
        setSavedFiles((prevFiles) => [...prevFiles, ...tempFiles]);
        setTempFiles([]);
        handleClose();
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 whitespace-nowrap"
                type="button"
                onClick={handleClick}
            >
                Upload File
            </button>

            {savedFiles.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-semibold mb-2">Uploaded Files:</h3>
                    <ul className="space-y-2">
                        {savedFiles.map((file, index) => (
                            <li key={index} className="text-sm text-gray-700">
                                {file.name} - {file.size}B
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-lg">
                        <FileUploadPopUp onFileChange={handleFileChange} />
                        <div className="flex justify-end mt-4 space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                onClick={handleAttachFile}
                            >
                                Attach File
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploadButton;