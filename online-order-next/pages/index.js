import Head from "next/head";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";

const { Panel } = Collapse;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Home() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">TAIPEI CHINESE KITCHEN</Menu.Item>
          <Menu.Item key="2">
            <ShoppingCartOutlined style={{ fontSize: "1.5rem" }} />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="HOT CASE SPECIALS"
            >
              <Menu.Item key="1">LUNCH</Menu.Item>
              <Menu.Item key="2">LUNCH DOUBLE ENTREE</Menu.Item>
              <Menu.Item key="3">DOUBLE ENTREE</Menu.Item>
              <Menu.Item key="4">MANAGER SPECIAL</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<LaptopOutlined />}
              title="CHEF'S SPECIALTIES"
            >
              <Menu.Item key="5">BEEF AND SCALLOP</Menu.Item>
              <Menu.Item key="6">HAPPY FAMILY</Menu.Item>
              <Menu.Item key="7">TRIPLE DELIGHT</Menu.Item>
              <Menu.Item key="8">FOUR SEASONS</Menu.Item>
              <Menu.Item key="9">HAVEN EARTH</Menu.Item>
              <Menu.Item key="10">SEAFOOD DELIGHT</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="DIET MENU"
            >
              <Menu.Item key="11">MIXED VEGETABLES</Menu.Item>
              <Menu.Item key="12">BEAN CURD WITH VEGETABLES</Menu.Item>
              <Menu.Item key="13">CHICKEN WITH VEGETABLES</Menu.Item>
              <Menu.Item key="14" danger="true">
                SHRIMP WITH VEGETABLES
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="site-layout-background">
            <Collapse accordion>
              <Panel header="Hot Case Specials" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="Chef's Specialties" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="Diet Menu" key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="Appetizers" key="4">
                <p>{text}</p>
              </Panel>
              <Panel header="Soup" key="5">
                <p>{text}</p>
              </Panel>
              <Panel header="Fried Rice" key="6">
                <p>{text}</p>
              </Panel>
              <Panel header="Lo Mein" key="7">
                <p>{text}</p>
              </Panel>
              <Panel header="Chow Mein" key="8">
                <p>{text}</p>
              </Panel>
              <Panel header="Poultry" key="9">
                <p>{text}</p>
              </Panel>
              <Panel header="Beef" key="10">
                <p>{text}</p>
              </Panel>
              <Panel header="Seafood" key="11">
                <p>{text}</p>
              </Panel>
              <Panel header="Vegetable" key="12">
                <p>{text}</p>
              </Panel>
              <Panel header="Egg Foo Young" key="13">
                <p>{text}</p>
              </Panel>
              <Panel header="Side Order" key="14">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
