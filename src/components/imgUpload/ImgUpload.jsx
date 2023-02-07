import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd'
import React, { useState } from 'react'
import { WrapperUploadFile } from '../ProductManage/style';



const ImgUpload = () => {

    const [fileList, setFileList] = useState([]);

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div>
            <WrapperUploadFile
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                multiple
            >
                {fileList.length >= 8 ? null : uploadButton}
            </WrapperUploadFile>
            
        </div>
    )
}

export default ImgUpload