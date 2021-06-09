import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useAuth } from "../../contexts/auth/AuthContext";

import styles from "./header.module.scss";

import HeaderLogo from "../HeaderLogo";
import { MenuBar, UserIcon, SearchIcon } from "../../utils/svgs";

import { showLinks, hideLinks } from "./gsap";

import profilePic from "../../public/images/avatar.png";

const Header = () => {
  const [avatar, setAvatar] = useState(profilePic);
  const [username, setUsername] = useState();
  const [isMenuLinksOpen, setMenuLinks] = useState(false);
  const [isUserLinksOpen, setUserLinks] = useState(false);
  const [isSearchBarOpen, setSearchBar] = useState(false);

  const { isAuthenticated } = useAuth();
  const menuLinksRef = useRef();
  const userLinksRef = useRef();
  const searchBarRef = useRef();

  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.loggedUser) {
      const loggedUser = JSON.parse(window.localStorage.loggedUser);
      const avatar = loggedUser.avatar;
      const username = loggedUser.username;

      if (!!avatar) {
        setAvatar(avatar);
      }

      setUsername(username);
    }
  }, []);

  const toggleMenuLinks = () => {
    if (isUserLinksOpen) {
      setUserLinks(false);
      hideLinks(userLinksRef.current, "translateY(-63px)");
    }

    if (!isMenuLinksOpen) {
      setMenuLinks(!isMenuLinksOpen);
      return showLinks(menuLinksRef.current);
    }

    setMenuLinks(!isMenuLinksOpen);
    hideLinks(menuLinksRef.current, "translateY(-33px)");
  };

  const toggleUserLinks = () => {
    if (isMenuLinksOpen) {
      setMenuLinks(false);
      hideLinks(menuLinksRef.current, "translateY(-33px)");
    }

    if (!isUserLinksOpen) {
      setUserLinks(!isUserLinksOpen);
      return showLinks(userLinksRef.current);
    }

    setUserLinks(!isUserLinksOpen);
    hideLinks(userLinksRef.current, "translateY(-63px)");
  };

  const toggleSearchBar = () => {
    setSearchBar(!isSearchBarOpen);
  };

  const signOut = () => {
    window.localStorage.removeItem("loggedUser");
    router.push("/auth/signin");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.row1}>
          <div className={styles.logo_wrapper}>
            <HeaderLogo />
          </div>
          <div className={styles.icons_wrapper}>
            <MenuBar onClick={toggleMenuLinks} className={styles.icon} />
            {!isAuthenticated && (
              <Link href="/auth/signin">
                <a>
                  <UserIcon className={styles.icon} />
                </a>
              </Link>
            )}
            {isAuthenticated && (
              <span onClick={toggleUserLinks} className={styles.icon}>
                <img src={avatar} className={styles.avatar} alt="avatar" />
              </span>
            )}
            <SearchIcon
              onClick={toggleSearchBar}
              className={`${styles.icon} ${styles.search_icon_mobile}`}
            />
          </div>
        </div>
        <div
          style={{ display: `${isSearchBarOpen ? "flex" : "none"}` }}
          className={styles.row2}
        >
          <div className={styles.search_form_wrapper}>
            <form>
              <input
                className={styles.movie_input}
                type="text"
                placeholder="What movie are you looking for?"
              />
              <SearchIcon className={styles.search_icon} />
            </form>
          </div>
        </div>
      </nav>
      <div className={styles.links_container}>
        <ul
          ref={menuLinksRef}
          className={`${styles.menu_links_wrapper} ${styles.links_wrapper}`}
        >
          <li>
            <Link href="/movies">
              <a>Movies</a>
            </Link>
          </li>
        </ul>
        <ul
          ref={userLinksRef}
          className={`${styles.user_links_wrapper} ${styles.links_wrapper}`}
        >
          <li>
            <Link href={`/users/${username}`}>
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <a className={styles.signout_button} onClick={signOut} href="">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
