import { useState } from "react";
import { useLanguage } from "../../../../contexts/language-context";
import IcDots from "../../../../assets/svgs/ic-dots";
import IcArrow from "../../../../assets/svgs/ic-arrow";
import { TableEdit } from "..";
import IcArrowEdit from "../../../../assets/svgs/ic-arrow-edit";
import IcClose from "../../../../assets/svgs/ic-close";

const Table = ({ products = [], loading, setProduct }) => {
  const { t } = useLanguage();
  const [rowSel, setRowSel] = useState("");
  const [productSel, setProductSel] = useState(null);

  const [sort, setSort] = useState({
    field: null,
    direction: "asc",
  });

  const handleSort = (field) => {
    setSort((prev) => {
      if (prev.field !== field) {
        if (prev.direction === "asc") {
          return {
            field,
            direction: "desc",
          };
        }
        return {
          field,
          direction: "asc",
        };
      } else {
        if (prev.direction === "asc") {
          return {
            field,
            direction: "desc",
          };
        }
        return {
          field,
          direction: "asc",
        };
      }
    });
  };

  const headerTable = [
    {
      title: t("articleNo"),
      icon: <IcArrow width="14px" color="#33FFFF" />,
      field: "id",
    },
    {
      title: t("productService"),
      icon: <IcArrow width="14px" color="#33FF66" />,
      field: "item_number",
    },
    { title: t("inPricce") },
    { title: t("price") },
    { title: t("unit") },
    { title: t("inStock") },
    { title: t("description") },
    { title: "" },
  ];

  const skeletonRows = Array.from({ length: 8 });

  const sortedProducts = [...products].sort((a, b) => {
    if (!sort.field || !sort.direction) return 0;

    const valueA = a[sort.field];
    const valueB = b[sort.field];

    if (valueA < valueB) return sort.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return sort.direction === "asc" ? 1 : -1;

    return 0;
  });

  return (
    <>
      <div className="home__table">
        {headerTable.map((item, index) => (
          <div
            key={index}
            className={`home__table-header home__table-col-${index}`}
          >
            <p>{item.title}</p>
            {item.icon && (
              <div
                className={`home__table-icon ${sort.field === item.field && sort.direction === "desc" && "home__table-icon--active"}`}
                onClick={() => handleSort(item.field)}
              >
                {item.icon}
              </div>
            )}
          </div>
        ))}
      </div>
      {loading
        ? skeletonRows.map((_, index) => (
            <div className="home__table" key={index}>
              {Array.from({ length: 8 }).map((_, col) => (
                <div
                  key={col}
                  className={`home__table-header home__table-col-${col}`}
                >
                  <div className="home__table-skeleton"></div>
                </div>
              ))}
            </div>
          ))
        : sortedProducts.map((item, index) => (
            <div
              className={`home__table`}
              key={index}
              onMouseEnter={() => setRowSel(item.id)}
            >
              <div
                className={`home__table-arrow ${(item.id === rowSel || productSel?.id === item.id) && "home__table-sel"}`}
              >
                <IcArrow height="16px" color="#2e9fe0" />
                {productSel?.id === item.id && (
                  <div className="home__table-arrow--edit">
                    <IcArrowEdit height="16px" color="#2e9fe0" />
                  </div>
                )}
              </div>
              <div className="home__table-content home__table-col-0">
                {item.id}
              </div>
              <div className="home__table-content home__table-col-1">
                {item.item_number}
              </div>
              <div className="home__table-content home__table-col-2">
                {item.in_price}
              </div>
              <div className="home__table-content home__table-col-3">
                {item.price}
              </div>
              <div className="home__table-content home__table-col-4">
                {item.unit}
              </div>
              <div className="home__table-content home__table-col-5">
                {item.in_stock}
              </div>
              <div className="home__table-content home__table-col-6">
                {item.description}
              </div>
              <div
                className="home__table-header home__table-col-7 home__table-option"
                onClick={() => {
                  if (productSel) {
                    setProductSel(null);
                  } else {
                    setProductSel(item);
                  }
                }}
              >
                {productSel?.id === item.id ? (
                  <IcClose width="16px" height="16px" />
                ) : (
                  <IcDots width="20px" color="#2e9fe0" />
                )}
              </div>

              {productSel?.id === item.id && (
                <TableEdit
                  productSel={productSel}
                  setProductSel={setProductSel}
                  setProduct={setProduct}
                />
              )}
            </div>
          ))}
    </>
  );
};

export default Table;
