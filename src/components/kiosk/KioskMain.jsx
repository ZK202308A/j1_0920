import ProductsList from "./ProductsList.jsx";
import CartDiv from "./CartDiv.jsx";

function KioskMain() {

    const products = [
        {pid:1, pname:'M1', price:8000, kind: 'N', img:'http://localhost:8081/food/M1.jpeg'},
        {pid:2, pname:'M2', price:6000, kind: 'C', img:'http://localhost:8081/food/M2.jpeg'},
        {pid:3, pname:'M3', price:7000, kind: 'N', img:'http://localhost:8081/food/M3.jpeg'},
        {pid:4, pname:'M4', price:5000, kind: 'C', img:'http://localhost:8081/food/M4.jpeg'},
        {pid:5, pname:'M5', price:9000, kind: 'N', img:'http://localhost:8081/food/M5.jpeg'},
    ]


    return (
        <div className='w-full flex'>
            <div className='border-2 w-2/3'>
                <ProductsList products={products}></ProductsList>
            </div>
            <div className='border-2 w-1/3'>
                <CartDiv></CartDiv>
            </div>
        </div>
    );
}

export default KioskMain;