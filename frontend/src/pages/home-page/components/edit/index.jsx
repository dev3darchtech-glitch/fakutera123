import { useState } from "react";
import IcCheck from "../../../../assets/svgs/ic-check";
import { updateProduct } from "../../../../apis/product.api";

const Edit = ({ productSel, setProductSel, setProduct }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(productSel);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelUpdate = async () => {
    try {
      setLoading(true);

      await updateProduct(productSel.id, form);

      setProduct((prev) =>
        prev.map((item) =>
          item.id === productSel.id ? { ...item, ...form } : item,
        ),
      );

      setProductSel(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="home__table-header home__table-edit home__table-col-0"></div>

      <div className="home__table-content home__table-edit home__table-col-1">
        <input
          name="item_number"
          value={form.item_number}
          onChange={handleChange}
        />
      </div>

      <div className="home__table-content home__table-edit home__table-col-2">
        <input
          name="in_price"
          type="number"
          value={form.in_price}
          onChange={handleChange}
        />
      </div>

      <div className="home__table-content home__table-edit home__table-col-3">
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="home__table-content home__table-edit home__table-col-4">
        <input name="unit" value={form.unit} onChange={handleChange} />
      </div>

      <div className="home__table-content home__table-edit home__table-col-5">
        <input
          name="in_stock"
          type="number"
          value={form.in_stock}
          onChange={handleChange}
        />
      </div>

      <div className="home__table-content home__table-edit home__table-col-6">
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div
        className="home__table-header home__table-edit home__table-col-7 home__table-option"
        onClick={handelUpdate}
      >
        {loading ? (
          <span className="saving">...</span>
        ) : (
          <IcCheck width="30px" height="30px" />
        )}
      </div>
    </>
  );
};

export default Edit;
