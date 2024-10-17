import { Link } from "react-router-dom";
import path from "../../../constants/path";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function AsideFilter() {
  return (
    <div className="py-4 pl-6 h-[500px]">
      <Link to={path.home} className="flex items-center font-semibold">
        <svg viewBox="0 0 12 10" className="mr-3 h-4 w-3 fill-current">
          <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      <div className="bg-gray-300 h-[1px] my-4">
        <ul>
          <li className="py-2 pl-2">
            <Link
              to={path.home}
              className="relative px-2 text-orange-500 font-semibold"
            >
              <svg
                viewBox="0 0 4 7"
                className="absolute top-1 left-[-10px] h-2 w-2 fill-orange"
              >
                <polygon points="4 3.5 0 0 0 7" />
              </svg>
              Thời trang nam
            </Link>
          </li>
          <li className="py-2 pl-2">
            <Link to={path.home} className="relative px-2">
              Điện thoại
            </Link>
          </li>
        </ul>
        <Link to={path.home} className="flex items-center font-semibold mt-4  ">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="mr-3 h-4 w-3 fill-current stroke-current"
          >
            <g>
              <polyline
                fill="none"
                points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          Bộ lọc tìm kiếm
        </Link>
        <div className="bg-gray-300 h-[1px] my-4">
          <div className="my-5">
            <div className="">Khoản giá</div>
            <form className="mt-2">
              <div className="flex items-start">
                <Input
                  type="text"
                  className="grow"
                  name="from"
                  placeholder="đ TỪ"
                  classNameInput="p1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm"
                />
                <div className="mt-2 mx-2 shrink-0">-</div>
                <Input
                  type="text"
                  className="grow"
                  name="from"
                  placeholder="đ ĐẾN"
                  classNameInput="p1 w-full outline-none border border-gray-300 
                  focus:border-gray-500 rounded-sm focus: shadow-sm"
                />
              </div>
              <Button className="w-full p-2 uppercase bg-orange-600 text-white text-sm hover:bg-orange-700 flex justify-center items-center">
                Áp dụng
              </Button>
            </form>
            <div className="text-sm">Đánh giá</div>
            <ul className="my-3">
              <li className="py-1 pl-2">
                {/* cmt tam ở đây */}
                <span>Trở lên</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
