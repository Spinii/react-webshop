import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./FilterBox.css";
import { RiArrowDownDoubleLine, RiCheckboxBlankLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";

function FilterBox({
  products,
  handleCheckBoxChange,
  resetFilteredProducts,
  allCheckedCategories,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
    );

    setCategories(uniqueCategories);
  }, [products]);

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
                  onChange={() => handleCheckBoxChange(category)}
                  id={category}
                  type="checkbox"
                  checked={allCheckedCategories.includes(category)}
                ></input>
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export { FilterBox };
