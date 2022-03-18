import {useContext} from 'react'
import OrderButton from "./orderBtn";
import {ConstApi} from "../context/context"

export const Menu = ({data}) => {
  const {setOrder, setTotal} = useContext(ConstApi)
  const {id, img, title, price, desc} = data
  return (
    <div className="section-center">

      <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
          <OrderButton data={data} setOrder={setOrder} setTotal={setTotal} />
        </div>
      </article>
    </div>
  );
};

export default Menu;
