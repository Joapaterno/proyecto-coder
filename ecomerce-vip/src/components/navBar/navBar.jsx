import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import style from "./navBar.module.css";
import CartWidget from "../cartWidget/cartWidget";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const NavBar = () => {
  const arrayDeCategorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div className={style.container}>
      <h1>VIP Ecomerce</h1>
      {arrayDeCategorias.map((cat, index) => (
        <p key={index}>{cat}</p>
      ))}
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <CartWidget />
    </div>
  );
};

export default NavBar;
