import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Product = [
  {
    id:'p1',
    price:15,
    title:'Book',
    description:'This is a book'
  },
  {
    id:'p2',
    price:50,
    title:'Shoes',
    description:'Adidas basketball Shoes'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Product.map(prod=>(
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
