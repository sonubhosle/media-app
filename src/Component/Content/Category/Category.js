import React, { useEffect, useState } from 'react'
import './Category.css'
import { category, menu } from '../Posts/Data';


const Category = () => {
  
  const [item, setItem] = useState({ name: 'artist' });
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);


  useEffect(() => {
    if (item.name === 'artist') {
      setProducts(category);
    }
    else {
      const newProducts = category.filter((product) => {
        return product.category === item.name
      });

      setProducts(newProducts);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  }

  return (
    <div className='category-section'>
         <div className="product-filters flex">
          {
            menu.map((item, index) => {
              return (
                <span onClick={(e) => {
                  handleClick(e, index);
                }}
                  className={`${active === index ? "active-work" : ""} product-item`}
                  key={index}>{item.name}</span>
              )
            })
          }
        </div>

        <div className="carousel-item">
          {
            products.map((cat) =>{
              return(
                 <div className="category-post">
                   <img src={cat.postimg} alt="" />
                  
                    <div className="hover-box">s
                      <img src={cat.img} alt={cat.name} />
                   <div className="title">
                    {cat.name}
                    <p>{cat.username}</p>
                   </div>
                    </div>
                 </div>
              )
            })
          }
        </div>
        <div className="footer flex">
      <div className="coypright">Privacy</div>
      <div className="coypright">Term of Services</div>
      <div className="coypright">Cookie Notice</div>
     </div>
    </div>
  )
}

export default Category