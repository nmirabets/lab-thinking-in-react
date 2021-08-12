import React, { Component } from "react";

class ProductRow extends Component {

	render() {

        const { product } = this.props;

		return (
			<div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
            </div>
        )
	}
}

export default ProductRow;