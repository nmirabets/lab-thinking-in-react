import React, { Component } from "react";

import ProductRow from "./ProductRow";

class ProductTable extends Component {

	render() {

        const { products } = this.props;

		return (
			<>
                {products.map( (product, index) => {
                    return (
                        <ProductRow key={index} product={product} />
                    )
                })}
            </>
		)
	}
}

export default ProductTable;