import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.user.name);

  const authHandler = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          dispatch(
            userActions.setUserLoginDetails({
              name: result.user.displayName,
              email: result.user.email,
            })
          );
        })
        .catch((err) => alert(err.message));
    } else {
      signOut(auth)
        .then(() => {
          dispatch(userActions.setSignOut());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userActions.setUserLoginDetails({
            name: user.displayName,
            email: user.email,
          })
        );
        navigate("/home");
      }
    });
  }, [userName]);

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="DISNEY"></img>
      </Logo>
      {userName && (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME"></img>
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="SEARCH"></img>
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST"></img>
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="ORIGINALS"></img>
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIES"></img>
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="SERIES"></img>
              <span>SERIES</span>
            </a>
          </NavMenu>
        </>
      )}
      <Login onClick={authHandler}>{!userName ? "Login" : "Logout"}</Login>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 2;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  font-size: 0;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 3vw;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 0 2px;
      white-space: nowrap;
      position: relative;

      &::before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        content: "";
        opacity: 0;
        height: 2px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 200ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;

// Fixed Position:
// An element with fixed position is displayed with respect to the viewport or the browser window itself. It always stays in the same place even if the page is scrolled.
// It does not effect the flow of other elements in the page ie doesn't occupy any specific space(just like position: absolute).
// If it is defined inside some other container (div with or without relative/absolute position), still it is positioned with respect to the browser and not that container. (Here it differs with position: absolute).

// Sticky Position:
// An element with sticky position is positioned based on the user's scroll position. As @Boltclock mentioned it basically acts like position: relative until an element is scrolled beyond a specific offset, in which case it turns into position: fixed. When it is scrolled back it gets back to its previous (relative) position.
// It effects the flow of other elements in the page ie occupies a specific space on the page(just like position: relative).
// If it is defined inside some container, it is positioned with respect to that container. If the container has some overflow(scroll), depending on the scroll offset it turns into position:fixed.
// So if you want to achieve the fixed functionality but inside a container, use sticky.
