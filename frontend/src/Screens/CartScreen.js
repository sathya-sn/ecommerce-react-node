import React, {useEffect} from 'react';

function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    return <div>Cart Added Succefully</div>
}

export default CartScreen