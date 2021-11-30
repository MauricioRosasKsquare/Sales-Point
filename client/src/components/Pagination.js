import { useState } from "react";


function Pagination(props) {
  const data = props.products;

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 10;

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const { onAdd } = props;
  const image = 'https://picsum.photos/id/180/2400/1600'

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);




  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };


  return (
    <>
        
        {currentItems.map((product, i)=>{
            return(
                <div key={i}>
                    <img className="small" src={image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <div>${product.price}</div>
                    <div>
                        <button onClick={() => onAdd(product)}>Add To Cart</button>
                    </div>
                </div>
            )
        })}
      <ul className="pageNumbers">

          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>


          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        
      </ul>
    </>
  );
}

export default Pagination;