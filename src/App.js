import Filters from "./components/Filters";
import Products from "./components/Products";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    products: [],
    selectedBrand: "",
    selectedState: "",
    selectedCity: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    axios.get("https://assessment-edvora.herokuapp.com").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    const { products, selectedBrand, selectedState, selectedCity } = this.state;
    const brands = [...new Set(products.map((product) => product.brand_name))];
    const states = [
      ...new Set(products.map((product) => product.address.state)),
    ];
    const cities = [
      ...new Set(products.map((product) => product.address.city)),
    ];

    // filtering products
    let displayProducts = products;
    if (brands.includes(selectedBrand)) {
      displayProducts = displayProducts.filter(
        (product) => product.brand_name === selectedBrand
      );
    }
    if (states.includes(selectedState)) {
      displayProducts = displayProducts.filter(
        (product) => product.address.state === selectedState
      );
    }
    if (cities.includes(selectedCity)) {
      displayProducts = displayProducts.filter(
        (product) => product.address.city === selectedCity
      );
    }
    return (
      <div className="App">
        <Filters
          products={displayProducts}
          selectedBrand={selectedBrand}
          selectedState={selectedState}
          selectedCity={selectedCity}
          handleChange={this.handleChange}
        />
        <Products
          products={displayProducts}
          brands={brands}
          states={states}
          cities={cities}
        />
      </div>
    );
  }
}

export default App;
