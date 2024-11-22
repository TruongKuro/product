import { useEffect, useState } from 'react'
import { FetchAllProduct } from '../../redux/Action'
import { connect } from 'react-redux'
import "../../App.css"
import SearchBar from '../search/searchbar'
import Item from '../item/item'

const Home = (props) => {
  
  useEffect(() => {
    props.loadproduct();
  }, [])
  
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
    <div className="container">
      <SearchBar/>
      <div className="row row-cols-4">
        
        {props.product.productList.products && props.product.productList.products.slice(0, visibleProducts).map((p, i)=> (
          <Item product={p} index={i}  key={i}/>
        ))}
        {visibleProducts < props.product.productList.products?.length 
          && 
          <div style={{fontSize:"30px", width:"100%"}}>Load 20 more products ... </div>
        }
       </div>
    </div>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);