import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProductList } from "./styles";
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import * as CartActions from "../../store/modules/cart/actions";

class Home extends React.Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(product => ({
      ...product,
      price: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);