import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { FetchAllProduct } from "../../redux/Action";
import Item from "../item/item";
import SearchBar from "./searchbar";

const Search = (props) => {

  useEffect(() => {
    props.loadproduct();
  }, [])
  //Return search results
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q");

    if (query) {
      const results = props.product.productList.products?.filter((product) =>
        product.title.toLowerCase().includes(query?.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [location.search, props.product.productList.products]);

  //Load next 20 products
  const [visibleProducts, setVisibleProducts] = useState(8); 

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    setTimeout(() => {
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
    }
  }, 4000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    props.product.loading ? <div><h2>Loading...</h2></div> :
    <div>
      
      <div className="container">
        <SearchBar/>
        <h2>Search results: {filteredProducts?.length} </h2>
        <div className="row row-cols-4">

        {filteredProducts?.length > 0 ? (
            <>
            {filteredProducts.slice(0, visibleProducts).map((product,index) => (
                <Item product={product} key={index}/>
            ))}
            {visibleProducts < filteredProducts?.length 
              && 
              <div style={{fontSize:"30px", width:"100%"}}>Load 20 more products ... </div>
            }
            </>
        ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
        )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      loadproduct: () => dispatch(FetchAllProduct()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);