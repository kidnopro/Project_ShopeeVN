export default function SortProductList() {
  return (
    <div className="bg-gray-300/40 py-4 px-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center flex-wrap gap-2">
          <div>Sắp xếp theo</div>
          <button className="h-8 px-4 capitalize bg-orange-500 text-white text-sm hover:bg-orange-600">
            Phổ biến
          </button>
          <button className="h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100">
            Mới nhất
          </button>
          <button className="h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100">
            Bán chạy
          </button>
          <select className="h-8 px-3 capitalize bg-white text-black hover:bg-slate-100 text-left">
            <option value="" selected>
              Giá
            </option>
            <option value="price:asc">Giá: Thấp đến cao</option>
            <option value="price:des">Giá: Cao đến thấp</option>
          </select>
          <div className="flex items-center">
            <div>
              <span className="text-orange-500">1</span>
              <span>/2</span>
            </div>
            <div className="ml-2">
              <button className="px-3 h-8 rouded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
