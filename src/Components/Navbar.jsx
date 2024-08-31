import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function ContainerOutsideExample() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand  ><Link to='/'>Shopssy</Link></Navbar.Brand> 
          <Link to="/cart" style={{textDecoration : 'none'}}><button className='bg-danger px-3 text-white'>Cart ({cartItems.length})</button></Link>
         <button>Log out</button>
        </Container>
      </Navbar>
    
  );
}

export default ContainerOutsideExample;