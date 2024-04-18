import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./FilterBox.css";
import { RiArrowDownDoubleLine, RiCheckboxBlankLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";

function FilterBox({
  products,
  handleCheckBoxChange,
  resetFilteredProducts,
  isChecked,
}) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let filteredCategories = [];
    let filteredBrands = [];

    for (let i = 0; i < products.length; i++) {
      categories.push(products[i].category);
      brands.push(products[i].brand);
    }

    filteredCategories = categories.filter(
      (val, id, array) => array.indexOf(val) == id
    );

    filteredBrands = brands.filter(
      (val, id, array) => array.indexOf(val) == id
    );

    setCategories(filteredCategories);
    setBrands(filteredBrands);
  }, [products]);

  //    console.log("brands", brands)

  return (
    <div className="main-filter-contaienr">
      <Accordion
        defaultValue={30}
        sx={{
          width: 250,
          color: "white",
          backgroundColor: "rgb(18, 32, 101)",
          marginBottom: "1rem",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<RiArrowDownDoubleLine color="white" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Product Categories
        </AccordionSummary>
        <AccordionDetails>
          <div className="filterBox">
            <button
              type="submit"
              className="filterBtn"
              onClick={() => resetFilteredProducts()}
            >
              Reset Categories
            </button>
            {categories.map((category) => (
              <div className="filter">
                <input
                  value={category}
                  onChange={(event) => handleCheckBoxChange(event)}
                  id={category}
                  type="checkbox"
                  checked={isChecked}
                ></input>
                <label for={category}>{category}</label>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export { FilterBox };
