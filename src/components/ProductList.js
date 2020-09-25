import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux";

import ProductComponent from "./ProductComponent";

function ProductList(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  let output = <p>Loading...</p>;

  !props.loading &&
    (output = props.products.map((product) => (
      <ProductComponent key={product.id} product={product} />
    )));

  props.error && (output = <h2>{props.error}</h2>);

  return (
    <Fragment>
      <h2>product list</h2>
      {output}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.products.error,
    loading: state.products.loading,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
