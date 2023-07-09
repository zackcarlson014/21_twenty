import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Dropdown,
  Icon,
  Menu,
  Label,
  Input,
} from 'semantic-ui-react';

export class NavBar extends Component {

  userDropdownTrigger = () => {
    return (
      <span>
        <Icon name='user' style={{color: 'white'}}/> 

        {true && !false  
          ? <Label color='red' size='mini' circular={true} textAlign='center'>
              {1}
            </Label>

          : null
        }
      </span>
    );
  };

  render() {
    const style = {
      position: "fixed",
        zIndex: "999"
    };

    return (
      <Menu fluid inverted color='black' style={style}>
        <Menu.Item
          // as={Link}
          // to='/profile'
          header>

          <Icon name='home'/> 21Twenty
        </Menu.Item>

        {/* <Dropdown item icon='book' simple >
          <Dropdown.Menu>
            <Dropdown.Item>Public Bookshelf</Dropdown.Item>
            <Dropdown.Item>My Reserved Books</Dropdown.Item>
            <Dropdown.Item>
              <Icon name='book' />

              <span className='text'>Add</span>

              <Dropdown.Menu>
                <Dropdown.Item>
                  Library Books
                </Dropdown.Item>

                <Dropdown.Item>
                  WishList Books
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      
        {/* <Menu.Item
            header
            as={Link}
            to='/users'
            // name='home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
        >
            <Icon name='user'/>
            {this.props.friends && this.pendingFriendRequests() !== 0  ?
                <Label color='red' size='mini' circular={true} textAlign='center'>
                  {this.pendingFriendRequests()}
                </Label>
                : 
                null
            }
        </Menu.Item> */}

        {/* <Dropdown
          item
          simple
          icon
          trigger={this.userDropdownTrigger()}>
  
          <Dropdown.Menu>
            <Dropdown.Item>
              MrBrarian Dashboard
            </Dropdown.Item>

            <Dropdown.Item>

              {'Friends '}

              {false
                ? <Label color='red' size='mini' circular={true} textAlign='center'>
                    { 3 }
                  </Label>

                : null
              }                
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        {/* <Menu.Item
          header>

          <Icon name='mail'/>

          {false
            ? <Label color='red' size='mini' circular={true} textAlign='center'>
                { 2 }
              </Label>
            : null
          }
        </Menu.Item> */}
  
        {/* <Menu.Menu position='right'>
          <Menu.Item>
            <Input 
              style={{color: 'white'}} 
              className='nav' 
              transparent 
              icon='search' 
              placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu> */}

        {true
          ? <Menu.Item
              name='logout'
              active={true}
              position='right'>
              Logout
            </Menu.Item>
          
          : <Menu.Item
              name='login'
              active={false}
              position='right'>
              Login
            </Menu.Item>
        }
      </Menu>
    );
  };
};

export default NavBar;