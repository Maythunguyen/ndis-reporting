
import { ImageConfig } from '../utils/ImageConfig';
import FileUploadPopUp from './FileUploadPopUp';
import { useState } from 'react';


const FileUploadButton = () => { 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [savedFiles, setSavedFiles] = useState([]);
    const [tempFiles, setTempFiles] = useState([]); // Temporary storage for files

   

    const handleClick = () => {
        setIsPopupOpen(true);
        console.log('Popup Open State:', isPopupOpen);
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

    const handleRemoveFile = (file) => {
        setSavedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    }
    
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
                    <ul className="space-y-2">
                        {savedFiles.map((file, index) => (
                            <div key={index} className="relative flex flex-row justify-between mb-2.5 p-[0.9375rem] rounded-[1.25rem] group-hover:opacity-100 transition-opacity">
                            <div className='flex flex-row'>
                                <div>
                                    <img src={ImageConfig[file.type.split('/')[1]] ||
                                    ImageConfig['default']} alt="file Image" className="w-[3.125rem] mr-5" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p>{file.name}</p>
                                    <p className='text-text-2'>{file.size}B</p>
                                </div>
                            </div>
                            <div className=" w-10 h-10 cursor-pointer transition-opacity duration-300"
                                onClick={() => handleRemoveFile(file)}>
                                x
                            </div>
                        </div>
                        ))}
                    </ul>
                </div>
            )}

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-lg h-auto">
                        <FileUploadPopUp onFileChange={handleFileChange} />
                        <div className="flex justify-center gap-15">
                            <button
                                className="px-15 py-2 border border-blue-400 rounded"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-15 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
