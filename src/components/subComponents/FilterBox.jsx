import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./FilterBox.css"
import { RiDownload2Line } from "@remixicon/react";



function FilterBox({products}){


    let allCategories = [];
    let allBrands = [];

    for(let i = 0; i < products.length; i++){

        allCategories.push(products[i].category)
        allBrands.push(products[i].brand)
    }

    const categories = allCategories.filter((val, id, array) => array.indexOf(val) == id);
    const brands = allBrands.filter((val, id, array) => array.indexOf(val) == id);

    console.log(categories)
    console.log(brands)


    



    return(
        <div className="main-filter-contaienr">
            <Accordion>
                <AccordionSummary 
                    expandIcon={<RiDownload2Line />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Product Categories
                </AccordionSummary>
                    <AccordionDetails>
                    <div className="filterBox">
                    {categories.map(category => 
                        <div className="filter">
                            <input type="checkbox"></input>
                            <label>{category}</label>
                        </div>)}
                    <button className="filterBtn">Filter Categories</button>
                    </div>
                    </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<RiDownload2Line />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Product Brands
                </AccordionSummary>
                    <AccordionDetails>
                    <div className="filterBox">
                    {brands.map(brand => 
                        <div className="filter">
                            <input type="checkbox"></input>
                            <label>{brand}</label>
                        </div>)}
                    <button className="filterBtn">Filter Categories</button>
                    </div>
                    </AccordionDetails>
            </Accordion>
        </div>
    )
}


export{ FilterBox }