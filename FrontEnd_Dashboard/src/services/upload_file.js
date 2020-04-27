import { gql } from 'apollo-boost';

//두번째 이름인 addFormData가 API 서버에 정의된 이름임
const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default UPLOAD_FILE;
