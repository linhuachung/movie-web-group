import React, { useState } from "react";
import { Table, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ModalVideo from "react-modal-video";
import Modal from "antd/lib/modal/Modal";
import FormDataAddMovie from "../FormData/FormDataAddMovie";
import { useDispatch } from "react-redux";
import {
  CREATE_MOVIE_SAGA_TYPE,
  DELETE_MOVIE_SAGA_TYPE,
  EDIT_MOVIE_SAGA_TYPE,
  EDIT_MOVIE_TYPE,
} from "../../../redux/types/QuanLyPhimType/QuanLyPhimType";
import { useHistory } from "react-router-dom";
import FormEditMovie from "../FormEdit/FormEditMovie";

function MovieManagerDataTable(props) {
  const history = useHistory();
  const { movie } = props;
  const [isOpen, setOpen] = useState(false);
  const [showFormAddMovie, setShowFormAddMovie] = useState(false);
  const [showFormEditMovie, setShowFormEditMovie] = useState(false);
  const [, setSearchText] = useState();
  const [, setSearchedColumn] = useState();
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
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      with: 50,
      sorter: (a, b) => a.maPhim - b.maPhim,

      ellipsis: true,
      ...getColumnSearchProps("maPhim"),
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      sorter: (a, b) => a.tenPhim?.length - b.tenPhim?.length,

      ...getColumnSearchProps("tenPhim"),
    },
    { title: "Trailer", dataIndex: "trailer", key: "trailer" },
    { title: "Hình Ảnh", dataIndex: "hinhAnh", key: "hinhAnh" },
    // { title: "Mô Tả", dataIndex: "moTa", key: "moTa" },
    {
      title: "Mã Nhóm",
      dataIndex: "maNhom",
      key: "maNhom",
      sorter: (a, b) => a.maNhom.length - b.maNhom.length,
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      sorter: (a, b) => a.ngayKhoiChieu - b.ngayKhoiChieu,
    },
    {
      title: "Phim Hot",
      dataIndex: "hot",
      key: "hot",
      sorter: (a, b) => a.hot?.length - b.hot?.length,

      filters: [
        {
          text: "Hot",
          value: "true",
        },
        {
          text: "Không Hot",
          value: "false",
        },
      ],
      onFilter: (value, record) => record.hot.indexOf(value) === 0,
    },
    {
      title: "Đang Chiếu",
      dataIndex: "dangChieu",
      key: "dangChieu",
      sorter: (a, b) => a.dangChieu?.length - b.dangChieu?.length,

      filters: [
        {
          text: "Đang Chiếu",
          value: "true",
        },
        {
          text: "Ngừng Chiếu",
          value: "false",
        },
      ],
      onFilter: (value, record) => record.dangChieu.indexOf(value) === 0,
    },
    {
      title: "Sắp Chiếu",
      dataIndex: "sapChieu",
      key: "sapChieu",

      sorter: (a, b) => a.sapChieu?.length - b.sapChieu?.length,

      filters: [
        {
          text: "Sắp Chiếu",
          value: "true",
        },
        {
          text: "Đã Chiếu",
          value: "false",
        },
      ],
      onFilter: (value, record) => record.sapChieu.indexOf(value) === 0,
    },
    {
      title: "",
      dataIndex: "button",
      key: "button",
      width: 350,
    },
  ];
  let movieEdit;
  const DataMovieEdit = (value) => {
    movieEdit = value;
    return movieEdit;
  };
  let data = [];
  data = movie.map((movie, index) => {
    return {
      key: index,
      maPhim: movie.maPhim,
      tenPhim: movie.tenPhim,
      biDanh: movie.biDanh,
      trailer: (
        <div>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={`${
              movie.trailer?.length > 41
                ? movie.trailer?.slice(32, 43)
                : movie.trailer?.slice(-11)
            }`}
            onClose={() => setOpen(false)}
          />
          <button
            onClick={() => setOpen(true)}
            className="mx-4 bg-purple-700 px-5 py-1 text-base rounded-md text-gray-100 duration-300 hover:bg-purple-400 hover:text-purple-600 "
          >
            Trailer
          </button>
        </div>
      ),
      hinhAnh: <img src={movie.hinhAnh} alt={`${movie.hinhAnh}`} />,
      maNhom: movie.maNhom,
      ngayKhoiChieu: `${
        movie.ngayKhoiChieu.slice(8, 10) +
        movie.ngayKhoiChieu.slice(4, 8) +
        movie.ngayKhoiChieu.slice(0, 4)
      }`,

      danhGia: movie.danhGia,
      hot: `${movie.hot}`,
      dangChieu: `${movie.dangChieu}`,
      sapChieu: `${movie.sapChieu}`,
      button: (
        <div>
          <button
            onClick={() => {
              dispatch({
                type: DELETE_MOVIE_SAGA_TYPE,
                maPhim: movie.maPhim,
              });
            }}
            className="mr-2 bg-red-600 px-5 py-1 text-base rounded-md text-gray-100 duration-300 hover:bg-red-400 hover:text-red-600 "
          >
            Xóa
          </button>
          <button
            onClick={() => {
              setShowFormEditMovie((open) => !open);
              dispatch({
                type: EDIT_MOVIE_TYPE,
                movie: movie,
              });
            }}
            className=" mr-2 bg-green-600 px-5 py-1 text-base rounded-md text-gray-100 duration-300 hover:bg-green-400 hover:text-green-600"
          >
            Sửa
          </button>
          <button
            onClick={() => {
              history.push(`/admin/dashboard/booking-manager/${movie.maPhim}`);
            }}
            className=" bg-blue-600 px-5 py-1 text-base rounded-md text-gray-100 duration-300 hover:bg-blue-400 hover:text-blue-600"
          >
            Tạo Lịch Chiếu
          </button>
        </div>
      ),
      //   more: expandedRowRender(movie),
    };
  });

  let dataMovieObj;
  const movieData = (value) => {
    dataMovieObj = value;
    return dataMovieObj;
  };

  const dispatch = useDispatch();
  const handleSubmitAddMovie = () => {
    console.log("dataMovieObj: ", dataMovieObj);
    dispatch({
      type: CREATE_MOVIE_SAGA_TYPE,
      data: dataMovieObj,
    });
  };

  return (
    <div className="my-5">
      <Space style={{ marginBottom: 10 }}>
        <button
          onClick={() => {
            setShowFormAddMovie((show) => !show);
          }}
          className=" bg-blue-600 px-5 py-1 text-lg rounded-md text-gray-100 duration-300 hover:bg-blue-400 hover:text-blue-600 "
        >
          Thêm Phim
        </button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 12 }}
      />
      {showFormAddMovie ? (
        <Modal
          title="Thêm phim"
          centered
          visible={showFormAddMovie}
          onOk={handleSubmitAddMovie}
          onCancel={() => setShowFormAddMovie((open) => !open)}
          width={1000}
        >
          <FormDataAddMovie movieData={movieData} />
        </Modal>
      ) : null}
      {showFormEditMovie ? (
        <Modal
          title="Sửa phim"
          centered
          visible={showFormEditMovie}
          onOk={() => {
            console.log(movieEdit);
            dispatch({
              type: EDIT_MOVIE_SAGA_TYPE,
              movie: movieEdit,
            });
          }}
          onCancel={() => setShowFormEditMovie((open) => !open)}
          width={1000}
        >
          <FormEditMovie DataMovieEdit={DataMovieEdit} />
        </Modal>
      ) : null}
    </div>
  );
}

export default MovieManagerDataTable;
