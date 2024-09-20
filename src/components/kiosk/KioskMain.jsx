import ProductsList from "./ProductsList.jsx";
import CartDiv from "./CartDiv.jsx";

function KioskMain() {
    return (
        <div className='w-full flex'>
            <div className='border-2 w-2/3'>
                <ProductsList></ProductsList>
            </div>
            <div className='border-2 w-1/3'>
                <CartDiv></CartDiv>
            </div>
        </div>
    );
}

export default KioskMain;