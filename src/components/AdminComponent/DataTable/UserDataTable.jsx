import React, { useState } from "react";
import { Table, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import FormDataAddUser from "../FormData/FormDataAddUser";
import { useDispatch } from "react-redux";
import { ADD_USER_ADMIN_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function UserDataTable(props) {
  const { user } = props;

  const [, setSearchText] = useState();
  const [, setSearchedColumn] = useState();
  const [showFormAddUser, setShowFormAddUser] = useState(false);
  let searchInput;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Tìm Kiếm ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Tìm
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Hủy Bỏ
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText({
                searchText: selectedKeys[0],
              });
              setSearchedColumn({
                searchedColumn: dataIndex,
              });
            }}
          >
            Lọc
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText({
      searchText: selectedKeys[0],
    });
    setSearchedColumn({
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText({
      searchText: "",
    });
  };

  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan?.length - b.taiKhoan?.length,

      ellipsis: true,
      ...getColumnSearchProps("taiKhoan"),
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
      sorter: (a, b) => a.hoTen?.length - b.hoTen?.length,

      ...getColumnSearchProps("hoTen"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email?.length - b.email?.length,

      ...getColumnSearchProps("email"),
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      key: "soDT",
      sorter: (a, b) => a.soDT?.length - b.soDT?.length,
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
      sorter: (a, b) => a.matKhau.length - b.matKhau.length,
    },
    {
      title: "Mã Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung?.length - b.maLoaiNguoiDung?.length,

      filters: [
        {
          text: "QuanTri",
          value: "QuanTri",
        },
        {
          text: "KhachHang",
          value: "KhachHang",
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
    },
    {
      title: "",
      dataIndex: "button",
      key: "button",
    },
  ];

  let data = [];
  data = user.map((user, index) => {
    return {
      key: index,
      ...user,
      button: (
        <div>
          <button
            onClick={() => {
              console.log(user.taiKhoan);
            }}
            className="mx-4 bg-red-600 px-5 py-1 text-lg rounded-md text-gray-100 duration-300 hover:bg-red-400 hover:text-red-600 "
          >
            Xóa
          </button>
          <button
            // onClick={expandedRowRender}
            className=" bg-green-600 px-5 py-1 text-lg rounded-md text-gray-100 duration-300 hover:bg-green-400 hover:text-green-600"
          >
            Sửa
          </button>
        </div>
      ),
    };
  });
  let userObj;
  const dispatch = useDispatch();
  const handleGetUser = (userData) => {
    console.log(userData);
    userObj = userData;
    return userObj;
  };
  const handleAddUser = () => {
    dispatch({
      type: ADD_USER_ADMIN_SAGA_TYPE,
      user: userObj,
    });
    setTimeout(() => setShowFormAddUser((open) => !open), 1000);
  };
  return (
    <div className="my-5">
      <Space style={{ marginBottom: 10 }}>
        <button
          onClick={() => setShowFormAddUser((open) => !open)}
          className=" bg-blue-600 px-5 py-1 text-lg rounded-md text-gray-100 duration-300 hover:bg-blue-400 hover:text-blue-600 "
        >
          Thêm Người Dùng
        </button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 12 }}
        scroll={{ x: 1500 }}
      />
      {showFormAddUser ? (
        <Modal
          title="Modal 1000px width"
          centered
          visible={showFormAddUser}
          onOk={handleAddUser}
          onCancel={() => setShowFormAddUser((open) => !open)}
          width={1000}
        >
          <FormDataAddUser handleGetUser={handleGetUser} />
        </Modal>
      ) : null}
    </div>
  );
}

export default UserDataTable;
