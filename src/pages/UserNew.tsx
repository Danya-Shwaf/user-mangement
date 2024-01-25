import {
  Button,
  Card,
  Col,
  Form,
  Input,
  List,
  Row,
  Select,
  Typography,
  message,
} from "antd";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
type RoleType = "user" | "admin";
interface UserForm {
  name: string;
  phone: string;
  email: string;
  role: string;
}
const UserNew: FC = () => {
  const rolesOptions: RoleType[] = ["user", "admin"];

  const [form, setForm] = useState<UserForm>({
    name: "",
    phone: "",
    email: "",
    role: "",
  });

  const handleEmailChange = (emailValue: string) => {
    // update name filed in the form object (method 1)
    setForm({
      name: form.name,
      phone: form.phone,
      email: emailValue,
      role: form.role,
    });
  };
  const handleNameChange = (nameValue: string) => {
    // update phone filed in the form object (method 2)
    const clone = { ...form };
    clone.name = nameValue;
    setForm(clone);
  };
  const handlePhoneChange = (phoneValue: string) => {
    // update phone filed in the form object (method 3)
    setForm({ ...form, phone: phoneValue });
  };
  const handleRoleChange = (role: RoleType) => {
    setForm({ ...form, role: role });
  };

  const handleOnFinish = () => {
    message.info(JSON.stringify(form));
  };
  return (
    <>
      <Row justify={"center"}>
        <Col span={12}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Form onFinish={() => handleOnFinish()} layout="vertical">
                <Card title="Create New User">
                  <Form.Item label="Name">
                    <Input onChange={(e) => handleNameChange(e.target.value)} />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input
                      onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Role">
                    <Select onChange={(e) => handleRoleChange(e)}>
                      {rolesOptions.map((role) => (
                        <Select.Option value={role}> {role}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item noStyle>
                    <Button htmlType="submit">Submit</Button>
                  </Form.Item>
                </Card>
              </Form>
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Preview From Values</Typography.Title>
              <List bordered>
                <List.Item>
                  Name : <span style={{ color: "#33f" }}>{form.name}</span>
                </List.Item>
                <List.Item>
                  Phone : <span style={{ color: "#33f" }}>{form.phone}</span>
                </List.Item>
                <List.Item>
                  Email : <span style={{ color: "#33f" }}>{form.email}</span>
                </List.Item>
                <List.Item>
                  Role : <span style={{ color: "#33f" }}>{form.role}</span>
                </List.Item>
              </List>
            </Col>
            <Col>
              <Link to={"/users"}>
                <Button>{"<- "}Back To Users List</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default UserNew;
