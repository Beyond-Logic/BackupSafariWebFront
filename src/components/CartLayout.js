import React from "react";
import {
  Table,
  Grid,
  Dropdown,
  Segment,
  Container,
  Menu,
  GridColumn,
} from "semantic-ui-react";
import "../styles/Components/_cart_layout.scss";
import "../styles/Components/_button.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import { monetize } from "../utilities/helperFunction";

const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
];

const totalItemsInCart = document.querySelectorAll(".cart-items .cart").length;

// delete={deleteCartItem}

function CartLayout(props) {
  // const cartCtx = useContext(CartContext);
  // console.log(props.userOrders);
  return (
    <Container fluid padded className="cart-container">
      <h2 className="cart-title">Shopping Cart ({totalItemsInCart} item )</h2>
      <Grid padded>
        <Grid.Column mobile={16} tablet={4} computer={8}>
          <p className="table-title">ITEM DESCRIPTON</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={2}>
          <p className="table-title">QUANTITY</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={3}>
          <p className="table-title">UNIT PRICE</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={3}>
          <p className="table-title">SUBTOTAL</p>
        </Grid.Column>
      </Grid>
      {props.userCartItem.map((item) => {
        return (
          <div className="cart-items">
            <Grid padded className="carts cart" key={item.id}>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Grid>
                  <Grid.Column mobile={16} tablet={8} computer={3}>
                    <img src={item.productImage} alt={item.name} />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={9} className="">
                    {item.name}
                    <p className="cart-size">
                      Size - {`${item.size},  Color - ${item.color}`}
                    </p>
                    <Grid>
                      <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Link to="/favourites" className="cart-button-link">
                          <p className="cart-favourites">
                            <i class="far fa-heart"></i> MOVE TO FAVOURITES
                          </p>
                        </Link>
                      </Grid.Column>
                      <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Link
                          onClick
                          className="cart-remove"
                          onClick={() => props.delete(item.id)}
                        >
                          {" "}
                          <i class="far fa-times-circle"></i> REMOVE
                        </Link>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={2} className="cart-border-left">
                <p>{item.quantity}</p>
              </Grid.Column>
              {/* <Grid.Column width={2} className="cart-border-left">
                <p>{order.quantity}</p>
              </Grid.Column> */}
              <Grid.Column width={3} className="cart-border-left">
                <p>₦{` ${monetize(item.price)}`}</p>
              </Grid.Column>
              <Grid.Column width={3} className="cart-border-left">
                <p>₦{` ${monetize(item.price * item.quantity)}`}</p>
              </Grid.Column>
            </Grid>
          </div>
        );
      })}

      {/* <Grid padded className="carts">
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Grid>
                <Grid.Column mobile={16} tablet={8} computer={3}>
                  <img src="./images/Casual Flat Loafers 2.png"></img>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={9} className="">
                Casual flat loafers 
                <p className="cart-size">Size - EU: 36 US: 5.5</p>
                <Grid>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                <Link to='/favourites' className="cart-button-link"><p className="cart-favourites"><i class="far fa-heart"></i> MOVE TO FAVOURITES</p></Link>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                <Link onClick className="cart-remove"> <i class="far fa-times-circle"></i> REMOVE</Link>
                </Grid.Column>
                </Grid>
                </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={2} className="cart-border-left">
                <Menu compact>
                  <Dropdown options={options} simple item placeholder="1"/>
                </Menu>
              </Grid.Column>
              <Grid.Column width={3} className="cart-border-left">
               <p>₦10,000</p> 
              </Grid.Column>
              <Grid.Column width={3} className="cart-border-left">
                <p>₦10,000</p> 
              </Grid.Column>
          </Grid>
          <br></br>
          <Grid padded className="carts">
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Grid>
                <Grid.Column mobile={16} tablet={8} computer={3}>
                  <img src="./images/gustavo-spindula-l7wrlsKDmCE-unsplash 2.png"></img>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={9}>
                Multicolored armless top 
                <p className="cart-size">Size - XS</p>
                <Grid>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                <Link to='/favourites' className="cart-button-link"><p className="cart-favourites"><i class="far fa-heart"></i> MOVE TO FAVOURITES</p></Link>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                <Link onClick className="cart-remove"> <i class="far fa-times-circle"></i> REMOVE</Link>
                </Grid.Column>
                </Grid>
                </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={2} className="cart-border-left">
                <Menu compact>
                  <Dropdown options={options} simple item  placeholder="1"/>
                </Menu>
              </Grid.Column>
              <Grid.Column width={3} className="cart-border-left">
             
               <p>₦10,000</p> 
              </Grid.Column>
              <Grid.Column width={3} className="cart-border-left">
            
                <p>₦10,000</p> 
              </Grid.Column>
          </Grid> */}

      <Grid>
        <Container textAlign="right" className="cart-total-section">
          <span className="cart-total">
            {" "}
            TOTAL:{" "}
            <span className="cart-totals">
              ₦{` ${monetize(props.totalPrice)}`}
            </span>{" "}
          </span>
          <p className="cart-delivery-notice">Delivery fee not included</p>

          <Link to="/" className="cart-button-link">
            <span>
              <button className="cart-button cart-continue-shoping">
                CONTINUE SHOPPING
              </button>
            </span>
          </Link>
          <Link to="/checkout" className="cart-button-link">
            <span>
              <button className="cart-button cart-proceed-checkout">
                PROCEED TO CHECKOUT
              </button>
            </span>
          </Link>
        </Container>
      </Grid>
    </Container>
    //   <Grid container className="cart-layout">
    //   <h2 className="cart-title">Shopping Cart(2 item)</h2>

    //   <Table fixed className="cart-table">
    //   <Table.Header className="">
    //     <Table.Row className="">
    //       <Table.HeaderCell className="table-title">ITEM DESCRIPTON</Table.HeaderCell>
    //       <Table.HeaderCell className="table-title" >QUANTITY</Table.HeaderCell>
    //       <Table.HeaderCell className="table-title">UNIT PRICE</Table.HeaderCell>
    //       <Table.HeaderCell className="table-title">SUB TOTAL</Table.HeaderCell>
    //     </Table.Row>
    //   </Table.Header>

    //   <Table.Body>
    //     <Table.Row>
    //       <Table.Cell>Casual flat loafers
    //       <p className="cart-size">Size - EU: 36 US: 5.5</p>
    //       </Table.Cell>
    //       <Table.Cell>
    //       <Dropdown
    //               search
    //               selection
    //               wrapSelection={false}
    //               options={options}
    //             />
    //       </Table.Cell>
    //       <Table.Cell>
    //       ₦10,000
    //       </Table.Cell>
    //       <Table.Cell>
    //       ₦10,000
    //       </Table.Cell>
    //     </Table.Row>
    //     <Table.Row>
    //       <Table.Cell>Multicolored armless top
    //       <p className="cart-size">Size - XS</p>
    //       </Table.Cell>
    //       <Table.Cell>1</Table.Cell>
    //       <Table.Cell>
    //       ₦10,000
    //       </Table.Cell>
    //       <Table.Cell>
    //       ₦10,000
    //       </Table.Cell>
    //     </Table.Row>

    //   </Table.Body>

    // </Table>
    // </Grid>
  );
}

export default CartLayout;
