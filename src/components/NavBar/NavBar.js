

function NavBar(props) {

    return (
        <button onClick={props.cartView}>Cart {props.value}</button>
    )
}

export {NavBar}
export default NavBar