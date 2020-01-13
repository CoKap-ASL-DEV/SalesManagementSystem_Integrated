import { gql } from "apollo-boost";

//두번째 이름인 addFormData가 API 서버에 정의된 이름임
const DELETE_TABLE = gql`
  mutation DeleteFormData($id: ID!) {
    deleteFormData(id: $id)
  }
`;

export default DELETE_TABLE;
