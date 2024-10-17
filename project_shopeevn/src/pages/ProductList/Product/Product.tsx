import { Link } from "react-router-dom";

export default function Product() {
  return (
    <Link to="/">
      <div className="bg-white shadow rounded-sm hover: translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform">
        <div className="w-full pt-[100%] relative">
          <img
            src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png"
            alt=""
            className="absolute top-0 left-0 bg-white w-full h-full object-cover"
          />
        </div>
        <div className="p-2 overflow-hidden">
          <div className="min-h-[1.75rem] line-clamp-2 text-sm">
            hàng hiếu iêu xịn rất nhiều sán phẩm lỗi được bán ra, mong quý khách
            ủng hố ản phẩm nhiều
          </div>
          <div className="flex items-center mt-3">
            <div className="line-through max-w-[50%] text-gray-400 truncate">
              đ 2000
            </div>
            <div className="text-orange-500 truncate ml-1">
              <span className="text">đ</span>
              <span>2300</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end">
            <div className="flex items-center">
              <div className="relative">
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden"
                  style={{ width: "50%" }}>
                      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
