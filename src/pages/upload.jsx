import React, { useState } from 'react';
import { Image, Select } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import UploadImg from "../img/file.png";


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadPage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState();
  const [selectedOption, setSelectedOption] = useState('Aadhar');

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col space-y-8 md:space-y-16 my-8 md:my-32 items-center justify-center max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Upload Your Documents
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Upload your documents or images to verify authenticity. Drag and drop files or click to select supported formats.
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="w-full px-2">
            <Select
              className="w-full bg-turnary"
              placeholder="Select document type"
              onChange={handleOptionChange}
              value={selectedOption}
            >
              <Option value="Aadhar">Aadhar</Option>
              <Option value="PAN">PAN</Option>
              <Option value="Driving Licence">Driving Licence</Option>
            </Select>
          </div>
          <div>
            <Dragger
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              accept=".png,.jpeg,.jpg,.pdf"
              maxCount={1}
            >
              <p className="ant-upload-drag-icon flex items-center justify-center">
                <img className="w-16 h-16 md:w-20 md:h-20" src={UploadImg} alt="upload icon" />
              </p>
              <p className="text-primary text-md py-2">Drag and Drop file here or <span className="underline">Choose file</span></p>
              <p className="text-primary text-xs md:text-sm">
                Support for PDF, JPEG, PNG formats. Strictly prohibited from uploading unsupported or malicious files.
              </p>
            </Dragger>

            {previewImage && (
              <Image
                wrapperStyle={{
                  display: 'none',
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
                className="mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
