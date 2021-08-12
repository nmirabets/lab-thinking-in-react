import React, { Component } from "react";

import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {

	render() {
        
        const { products } = this.props;

		return (
            <ProductTable products={products}  />
		);
	}
}

export default FilterableProductTable;
