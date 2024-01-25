import { Col, Row } from "antd";
import { FC } from "react";
import UsersTable from "../components/UsersTable";

const Users: FC = () => {
  return (
    <>
      <Row justify={"center"}>
        <Col span={12}>
          <UsersTable></UsersTable>
        </Col>
      </Row>
    </>
  );
};

export default Users;
