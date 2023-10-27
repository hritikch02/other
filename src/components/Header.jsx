import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/icons8-movie-projector-64.png";

function Header() {
	const navigate = useNavigate();

	return (
		<header
			className="p-4 flex items-center justify-around top-0 sticky z-50"
			style={{ backgroundColor: "#5e5d5d" }}>
			<div className="container m-auto flex flex-col items-start justify-center">
				<img src={logo} alt="logo" className="ml-14" />
				<h1
					className="text-2xl font-bold text-white cursor-pointer"
					onClick={() => navigate("/")}>
					Movie Rating App
				</h1>
			</div>
			<Link className="text-white no-underline " to="/all-movies">
				All Movies
			</Link>
			<Link className="text-white no-underline " to="/my-queue">
				My Queue
			</Link>
		</header>
	);
}

export default Header;
