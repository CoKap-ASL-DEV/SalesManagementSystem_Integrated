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
  };
  onChange = info => {
    const nextState = {};
    switch (info.file.status) {
      case 'uploading':
        nextState.selectedFileList = [info.file];
        break;
      case 'done':
        nextState.selectedFile = info.file;
        console.log(info.file);
        nextState.selectedFileList = [info.file];
        // this.props.setFileObj(this.state.selectedFile);
        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        nextState.selectedFileList = [];
    }
    this.setState(() => nextState);
  };

  render() {
    return (
      <div>
        <Upload
          fileList={this.state.selectedFileList}
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
