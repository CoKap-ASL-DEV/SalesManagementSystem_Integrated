import React, { Component } from 'react';
import { Upload, Button } from 'antd';
import { Mutation } from '@apollo/react-components';
import { UploadOutlined } from '@ant-design/icons';

//action: 'http://localhost:2000/graphql',

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};

// const dummyRequest = options => {
//   //(options: any) => {{ file, onSuccess }

//   const data = new FormData();
//   data.append('file', options.file);
//   const config = {
//     headers: {
//       'content-type':
//         'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
//     },
//   };
//   axios
//     .post(options.action, data, config)
//     .then(res => {
//       options.onSuccess(res.data, options.file);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

class Form_Upload extends Component {
  state = {
    selectedFile: null,
    selectedFileList: [],
    selectedFileLists: [],
  };

  onChange = info => {
    const nextState = {};

    switch (info.file.status) {
      case 'uploading':
        nextState.selectedFileList = [info.file];
        this.props.setFileList(nextState.selectedFileList);
        this.props.setFileObj(info.file);
        break;
      case 'done':
        //this.setState({ selectedFile: info.file });

        nextState.selectedFileList = [info.file];
        console.log('aaaa');
        console.log(info.file);
        console.log('aaaa');

        console.log('bbb');
        console.log(this.props.FilePath);
        console.log('bbb');

        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        nextState.selectedFileList = [];
        this.props.setFileList(null);
    }
    this.setState(() => nextState);
  };

  // onRemove = () => {
  //   this.props.setFileList(null);
  //   return true;
  // };

  render() {
    return (
      <div>
        <Upload
          //fileList={this.state.selectedFileList}
          fileList={this.props.FileList}
          customRequest={dummyRequest}
          onChange={this.onChange}
        >
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </div>
    );
  }
}

export default Form_Upload;
