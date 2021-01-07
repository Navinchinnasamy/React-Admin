import React from 'react';
import { useAuth } from "../services/use-auth.js";

export default function SideBar() {
	
    const auth = useAuth();
	return (
	  <aside className="main-sidebar sidebar-dark-primary elevation-4">
		<a href="/" className="brand-link">
		  <img src="img/AdminLTELogo.png"
			   alt="AdminLTE Logo"
			   className="brand-image img-circle elevation-3"
			   style={{opacity: .8}} />
		  <span className="brand-text font-weight-light">AdminLTE 3</span>
		</a>

		<div className="sidebar">
		  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
			<div className="image">
			  <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
			</div>
			<div className="info">
			  <a href="#" className="d-block">{auth.user.name}</a>
			</div>
		  </div>

		  <nav className="mt-2">
			<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
			  <li className="nav-item has-treeview">
				<a href="#" className="nav-link">
				  <i className="nav-icon fas fa-tachometer-alt"></i>
				  <p>
					Dashboard
					<i className="right fas fa-angle-left"></i>
				  </p>
				</a>
				<ul className="nav nav-treeview">
				  <li className="nav-item">
					<a href="/" className="nav-link">
					  <i className="far fa-circle nav-icon"></i>
					  <p>Dashboard v1</p>
					</a>
				  </li>
				  <li className="nav-item">
					<a href="/" className="nav-link">
					  <i className="far fa-circle nav-icon"></i>
					  <p>Dashboard v2</p>
					</a>
				  </li>
				  <li className="nav-item">
					<a href="/" className="nav-link">
					  <i className="far fa-circle nav-icon"></i>
					  <p>Dashboard v3</p>
					</a>
				  </li>
				</ul>
			  </li>
			  <li className="nav-item">
				<a href="../widgets.html" className="nav-link">
				  <i className="nav-icon fas fa-th"></i>
				  <p>
					Widgets
					<span className="right badge badge-danger">New</span>
				  </p>
				</a>
			  </li>
			 
			  <li className="nav-header">EXAMPLES</li>
			  <li className="nav-item">
				<a href="../calendar.html" className="nav-link">
				  <i className="nav-icon far fa-calendar-alt"></i>
				  <p>
					Calendar
					<span className="badge badge-info right">2</span>
				  </p>
				</a>
			  </li>
			  <li className="nav-item">
				<a href="../gallery.html" className="nav-link">
				  <i className="nav-icon far fa-image"></i>
				  <p>
					Gallery
				  </p>
				</a>
			  </li>
			</ul>
		  </nav>
		</div>
	  </aside>
	)
}