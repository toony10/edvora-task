import React from "react";
function Filters(props) {
  const { products, selectedBrand, selectedState, selectedCity, handleChange } =
    props;

  const brands = [...new Set(products.map((product) => product.brand_name))];
  const states = [...new Set(products.map((product) => product.address.state))];
  const cities = [...new Set(products.map((product) => product.address.city))];
  console.log(
    "selectedBrand:",
    selectedBrand,
    "selectedState:",
    selectedState,
    "selectedCity:",
    selectedCity
  );
  return (
    <div className="filters-section">
      <div className="filter-head">
        <h1> Filters </h1>
        <hr />
      </div>
      <select
        name="selectedBrand"
        value={selectedBrand}
        onChange={handleChange}
        className="dropdown-list"
      >
        <option>Product</option>
        {brands.map((brand) => (
          <option>{brand}</option>
        ))}
      </select>

      <select
        name="selectedState"
        onChange={handleChange}
        value={selectedState}
        className="dropdown-list"
      >
        <option value="allState">State</option>
        {states.map((state) => (
          <option>{state}</option>
        ))}
      </select>

      <select
        name="selectedCity"
        onChange={handleChange}
        value={selectedCity}
        className="dropdown-list"
      >
        <option value="allCity">City</option>
        {cities.map((city) => (
          <option>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
