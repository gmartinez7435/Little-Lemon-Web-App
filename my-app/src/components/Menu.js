import React from 'react'
import CardItems from '../CardItems'
import Swal from'sweetalert2'

const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "Add to your cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been received. ",
                icon: "success"
              });
            }
          });
    };
  return (
    <section className='menu-container'>
        <div className='menu-header'>
            <h2>This Weeks Specials</h2>
            <button>Order Now</button>
        </div>

        <div className='cards'>
            {
                CardItems.map(CardItems => <div key={CardItems.id} className='menu-items'>
                    <img src={CardItems.image} alt={CardItems.title} />
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{CardItems.title}</h5>
                            <p>{CardItems.price}</p>
                        </div>
                        <p>{CardItems.description}</p>
                        <button className="orderBtn" onClick={() => handleOrder(CardItems.id)}>Add to Cart</button>
                    </div>
                    </div>)
                }
        </div>
    </section>
  )
}

export default Menu