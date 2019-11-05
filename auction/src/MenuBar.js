import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import AuctionItem from './auction/AuctionItem';
import { NavLink } from 'react-router-dom' 


const menuItems = [
    {
        href: '/auctions', title: 'Aukcje'
    },
    {
        href: '/promotions', title: 'Promocje'
    },
    {
        href: '/advices', title: 'Podpowiadamy'
    },
    {
        href: '/cart', title: 'Koszyk'
    },
];

AuctionItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

AuctionItem.defaultProps = {
    description: 'Brak opisu...'
}

class MenuBar extends Component {


    state = {
        showMenu: false
    }

    toogleMenu = () => {
        this.setState((prev) => ({showMenu: !prev.showMenu}))
    }

    render(){
        const { showMenu } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" onClick={this.toogleMenu}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        {menuItems.map((item) => (
                        <li className="nav-Item" key={item.href} >
                            <NavLink activeClassName="active" className="nav-link" to={item.href}>
                            {item.title}
                            </NavLink>
                        </li>
                        ))
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuBar;