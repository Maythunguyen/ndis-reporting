import { useState, useRef } from 'react';

const useFileHandler = (onFileChange) => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            onFileChange(updatedList);
        }
    };

    const fileRemove = (file) => {
        const updatedList = fileList.filter((item) => item !== file);
        setFileList(updatedList);
        onFileChange(updatedList);
    };

    return { wrapperRef, fileList, onDragEnter, onDragLeave, onDrop, onFileDrop, fileRemove };
};

export default useFileHandler;
