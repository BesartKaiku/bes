

const Product = (props) => {
  return (

    <li>
    <div>{props.make}</div>
    <div>{props.id}</div>
    <div> {props.model}</div>
    <div>{props.year}</div>
    </li>
  
  )
}

export default Product