import { useState } from 'react';
import FileUploadPopUp from './FileUploadPopUp';

const FileUploadButton = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [savedFiles, setSavedFiles] = useState([]);
    const [tempFiles, setTempFiles] = useState([]); // Temporary storage for files

    const handleClick = () => {
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    const handleFileChange = (files) => {
        setTempFiles(files); // Store temporarily when files are added in the popup
    };

    const handleAttachFile = () => {
        setSavedFiles((prevFiles) => [...prevFiles, ...tempFiles]);
        setTempFiles([]); // Clear temporary storage
        handleClose();
    };

    return (
        <div>
            <button
                className="appearance-none bg-blue-600 text-white rounded-lg shadow-lg px-6 py-4 mt-3 w-full text-center transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed"
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
