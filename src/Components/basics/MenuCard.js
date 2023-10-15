import React from 'react'

const MenuCard = ({menuData}) => {
  console.log(menuData);
    return (
    <>
    <section className='main-card--container'>
    {menuData.map((curElem) => {
      const {id,name,image,description} = curElem;

        return(
            <>
            <div className = "card-container" key = {id}>
            <div className= "card">
              <div className= "card-body">
                <span className ="card-number card-circle subtle">
                    {id}
                </span>
                <span className= "card-author subtle" >{name} </span>
                <h2 className = "card-title"> {name}</h2>
                <span className="card-description subtle">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis consequatur ut tempora quae, sapiente ullam quod expedita beatae, pariatur perspiciatis optio? Reiciendis eveniet qui facere distinctio tenetur autem molestias!
                </span>
                <div className = "card-read"> Read</div>
              </div>
              <img src ={image} alt ="img" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
            </div>
          </div>
          </>
        )
    })}
      
      </section>     
    </>
  )
}

export default MenuCard
