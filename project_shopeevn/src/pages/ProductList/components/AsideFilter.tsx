import classNames from "classnames";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import omit from "lodash/omit";
import { QueryConfig } from "../ProductList";
import { Category } from "../../../types/category.type";
import { schema, Schema } from "../../../utils/rules";
import path from "../../../constants/path";
import InputNumber from "../../../components/inputNumber";
import Button from "../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { NoUnderfinedField } from "../../../types/utils.type";
import RatingStarts from "./RatingStart";

interface Props {
  queryConfig: QueryConfig;
  categories: Category[];
}

type FormData = NoUnderfinedField<Pick<Schema, "price_max" | "price_min">>;

const priceSchema = schema.pick(["price_min", "price_max"]);

export default function AsideFilter({ queryConfig, categories }: Props) {
  // const { t } = useTranslation("home");
  const { category } = queryConfig;
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      price_min: "",
      price_max: "",
    },
    resolver: yupResolver(priceSchema),
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        price_max: data.price_max,
        price_min: data.price_min,
      }).toString(),
    });
  });

  const handleRemoveAll = () => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(queryConfig, [
          "price_min",
          "price_max",
          "rating_filter",
          "category",
        ])
      ).toString(),
    });
  };

  return (
    <div className="py-4 ml-14">
      <Link
        to={path.home}
        className={classNames("flex items-center font-bold", {
          "text-orange-500": !category,
        })}
      >
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
        {"aside filter.all categories"}
      </Link>
      <div className="my-4 h-[1px] bg-gray-300" />
      <ul>
        {categories.map((categoryItem) => {
          const isActive = category === categoryItem._id;
          return (
            <li className="py-2 pl-2" key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id,
                  }).toString(),
                }}
                className={classNames("relative px-2", {
                  "font-semibold text-orange-500": isActive,
                })}
              >
                {isActive && (
                  <svg
                    viewBox="0 0 4 7"
                    className="absolute top-1 left-[-10px] h-2 w-2 fill-orange-500"
                  >
                    <polygon points="4 3.5 0 0 0 7" />
                  </svg>
                )}
                {categoryItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        to={path.home}
        className="mt-4 flex items-center font-bold uppercase"
      >
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
        {"aside filter.filter search"}
      </Link>
      <div className="my-4 h-[1px] bg-gray-300" />
      <div className="my-5">
        <div>Khoảng giá</div>
        <form className="mt-2" onSubmit={onSubmit}>
          <div className="flex items-start">
            <Controller
              control={control}
              name="price_min"
              render={({ field }) => {
                return (
                  <InputNumber
                    type="text"
                    className="grow"
                    placeholder="₫ TỪ"
                    classNameInput="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                    classNameError="hidden"
                    {...field}
                    onChange={(event) => {
                      field.onChange(event);
                      trigger("price_max");
                    }}
                  />
                );
              }}
            />

            <div className="mx-2 mt-2 shrink-0">-</div>
            <Controller
              control={control}
              name="price_max"
              render={({ field }) => {
                return (
                  <InputNumber
                    type="text"
                    className="grow"
                    placeholder="₫ ĐẾN"
                    classNameInput="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                    classNameError="hidden"
                    {...field}
                    onChange={(event) => {
                      field.onChange(event);
                      trigger("price_min");
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="mt-1 min-h-[1.25rem] text-center text-sm text-red-600">
            {errors.price_min?.message}
          </div>
          <Button className="flex w-full items-center justify-center bg-orange-500 p-2 text-sm uppercase text-white hover:bg-orange-600">
            Áp dụng
          </Button>
        </form>
      </div>
      <div className="my-4 h-[1px] bg-gray-300" />
      <div className="text-sm">Đánh giá</div>
      <RatingStarts queryConfig={queryConfig} />
      <div className="my-4 h-[1px] bg-gray-300" />
      <Button
        onClick={handleRemoveAll}
        className="flex w-full items-center justify-center bg-orange-500 p-2 text-sm uppercase text-white hover:bg-orange-600"
      >
        Xóa tất cả
      </Button>
    </div>
  );
}