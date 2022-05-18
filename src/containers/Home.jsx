import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { fetchAll } from "../redux/actions/actions";
import { exitloader } from "../redux/actions/loading";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const filterProducts = useSelector(state => state.product.filterProducts)
  const loader = useSelector((state) => state.loader);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);


  // Get current posts
  const test = filterProducts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterProducts.length === 0 ? products.slice(indexOfFirstPost, indexOfLastPost) : filterProducts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    const getAll = async () => {
      await dispatch(fetchAll());
      dispatch(exitloader());
    };
    getAll();
  }, []);

  return (
    <>
      <Filter />
      {!loader > 0 ? (
        <div style={{ marginBottom: '20px' }}>
          <div className="ui grid centered ">
            <div className="doubling  stackable  centered four column row">
              {test.length > 0 ? currentPosts.map((product) => (
                <div key={product.id} className="d-flex-mobile  column">
                  <Card product={product} />
                </div>
              )) : currentPosts.map((product) => (
                <div key={product.id} className="d-flex-mobile  column">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* pagination */}
          {products.length > 8 && filterProducts.length === 0 && <div style={{ margin: '20px 0' }}> <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            currentPage={currentPage}
            paginate={paginate} /></div>}

          {filterProducts.length > 8 && <div style={{ margin: '20px 0' }}> <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filterProducts.length}
            currentPage={currentPage}
            paginate={paginate} /></div>}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
