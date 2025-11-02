import React from 'react'
import './Sidebar.css'
// import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h3>All posts</h3>
      <ul>
        <li>
          <NavLink 
            to="/Introduce" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Introduce Pharmacy
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/guide" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Online shopping guide
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shipping" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Delivery policy
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/payment" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Payment policy
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/warranty" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Warranty and return policy
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/privacy" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Privacy policy
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/points" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Membership points policy
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;