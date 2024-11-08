import useFileHandler from '../hooks/useFileUpload';
import PropTypes from 'prop-types';
import { ImageConfig } from '../utils/ImageConfig';
import { BsCloudUpload } from "react-icons/bs";


const FileUploadPopUp = ({ onFileChange }) => {

    const { wrapperRef, fileList, onDragEnter, onDragLeave, onDrop, onFileDrop, fileRemove } = useFileHandler(onFileChange);

    return (
        <div className='flex flex-col justify-center w-full h-[25rem] place-items-center py-5'>
            <div className="w-full mb-[2rem] mt-[4rem]">
                <h3 className='font-semibold text-left'>Upload and attach Files</h3>
            </div>
            <div
                ref={wrapperRef}
                className="relative w-[90%] h-[10rem] border border-dashed rounded-[1.25rem] flex items-center justify-center opacity-100 hover:opacity-60 group-[.dragover]:opacity-60"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="flex flex-col text-center text-current font-semibold p-4 items-center gap-3">
                    <BsCloudUpload className="w-8 h-8 text-text-2"/>
                    <p className="text-text-2 font-light">Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="mt-[2rem] mb-[4rem] flex flex-col justify-between">
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="relative flex flex-row justify-between mb-2.5 p-[0.9375rem] rounded-[1.25rem] group-hover:opacity-100 transition-opacity">
                                    <div className='flex flex-row'>
                                        <div>
                                            <img src={ImageConfig[item.type.split('/')[1]] ||
                                            ImageConfig['default']} alt="Item Image" className="w-[3.125rem] mr-5" />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <p>{item.name}</p>
                                            <p className='text-text-2'>{item.size}B</p>
                                        </div>
                                    </div>
                                    <div className=" w-10 h-10 cursor-pointer transition-opacity duration-300"
                                        onClick={() => fileRemove(item)}>
                                        x
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

FileUploadPopUp.propTypes = {
    savedFiles: PropTypes.array,
    onFileChange: PropTypes.func
}

export default FileUploadPopUp;