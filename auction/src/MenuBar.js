import React,{Component} from 'react';
import { NavLink } from 'react-router-dom' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBasket, faPlus } from '@fortawesome/free-solid-svg-icons'


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
    // {
    //     href: '/cart', title: 'Koszyk'
    // },
];

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
                <div style={{display:'block',float:'right'}}>
                <NavLink className="btn btn-success" to='/log-in'>
                    <FontAwesomeIcon icon={faUser} /> Logowanie
                </NavLink>
                <NavLink className="btn btn-info" to='/cart'>
                    <FontAwesomeIcon icon={faShoppingBasket} /> Koszyk
                </NavLink>
                <NavLink className="btn btn-success" to='/add-auction'>
                    <FontAwesomeIcon icon={faPlus} /> Dodaj aukcje
                </NavLink>
                </div>
            </nav>
        );
    }
}

export default MenuBar;