import loreal from './assets/loreal.png'
import redken from './assets/Redken-logo.png'
import waxWool from './assets/wax-and-wool.webp'
import rco from './assets/RCo.jpg'
import './Products.css'

const Products = () => {

    const products = [
        {
            company: 'Loreal',
            logo: loreal,
            link: 'https://www.lorealparisusa.com/'
        },
        {
            company: 'Redken',
            logo: redken,
            link: 'https://www.redken.com/'
        },
        {
            company: 'Wax & Wool, etc',
            logo: waxWool,
            link: 'https://www.waxandwooletc.com/'
        },
        {
            company: 'R + Co',
            logo: rco,
            link: 'https://www.luxurybrandpartners.com/brand/rco/'
        }
    ]

    return (
        <div className="products-section">
        <h3>Products</h3>
        <div className="products-grid">
            {products.map((product, index) => (
                <div key={index} className="productCard">
                    <a href={product.link} className="productLink">
                        <img 
                            src={product.logo} 
                            alt={`${product.company} logo`} 
                            className="productLogo"
                            onError={(e) => {
                                console.error(`Failed to load ${product.company} logo`);
                                e.target.style.display = 'none';
                            }}
                            onLoad={() => console.log(`Successfully loaded ${product.company} logo`)}
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Products