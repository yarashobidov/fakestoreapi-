import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="ui borderless menu">
            {pageNumbers.map(e => <span style={{ cursor: 'pointer', background: currentPage === e && '#2185d0', color: currentPage === e && '#fff' }} key={e} onClick={() => paginate(e)} className="item">{e}</span>)}


        </div>
    )
}

export default Pagination