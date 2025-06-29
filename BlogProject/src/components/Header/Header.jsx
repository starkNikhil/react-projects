import React from "react";
import { Logo, Container, LogOutBtn } from "../Index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authService from "../../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((navItem) =>
              navItem.active ? (
                <li key={navItem.name}>
                  <button onClick={() => navigate(navItem.slug)}>
                    {navItem.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus&& (
                <li>
                   <LogOutBtn/> 
                </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
