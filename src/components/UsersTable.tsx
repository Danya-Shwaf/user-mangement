import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { FC } from "react";
import { Link } from "react-router-dom";
interface IUser {
  Name: string;
  Phone: string;
  Email: string;
  Role: string;
}
const Data: IUser[] = [
  {
    Name: "Danya",
    Phone: "0987654321",
    Email: "dania123@.com",
    Role: "Admin",
  },
  {
    Name: "Safa",
    Phone: "0987654321",
    Email: "safa123@.com",
    Role: "normal",
  },
  {
    Name: "Nour",
    Phone: "0987654321",
    Email: "nour123@.com",
    Role: "normal",
  },
];

const UsersTable: FC = () => {
  const handleEdit = (user: IUser) => {
    alert("Edit user " + user.Name);
  };
  const handleDelete = (user: IUser) => {
    alert("Delete user " + user.Name);
  };
  const columns: ColumnType<IUser>[] = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Role",
      dataIndex: "Role",
      key: "Role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, user) => (
        <>
          <Row>
            <Button
              onClick={() => handleEdit(user)}
              type="primary"
              style={{ marginInlineEnd: "4px" }}
            >
              <EditOutlined />
            </Button>

            <Button onClick={() => handleDelete(user)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Row>
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <Row style={{ marginBottom: "10px" }} justify={"space-between"}>
        <Col>
          <Button>
            <Link to={"/users/new"}>Add New User</Link>
          </Button>
        </Col>
      </Row>
      <header className="App-header">
        <Table<IUser> dataSource={Data} columns={columns}></Table>
      </header>
      <div>
        <Row>
          <Col>
            <Button>Back Home</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UsersTable;
