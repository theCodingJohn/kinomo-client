import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { useAuth } from "../../contexts/auth/AuthContext";

import styles from "./header.module.scss";

import { MenuBar, UserIcon, SearchIcon } from "../../utils/svgs";

import { show, hide } from "./gsap";

import profilePic from "../../public/images/avatar.jpg";

import Redirect from "../HOC/Redirect";

const Header = () => {
  const [avatar, setAvatar] = useState(profilePic);
  const [user, setUser] = useState("User");
  const [isAppLinksOpen, setIsAppLinksOpen] = useState(false);
  const [isUserLinksOpen, setIsUserLinksOpen] = useState(false);

  const { isAuthenticated } = useAuth();
  const mobileAppLinksRef = useRef();
  const mobileUserLinksRef = useRef();

  useEffect(() => {
    if (window.localStorage.loggedUser) {
      const loggedUser = JSON.parse(window.localStorage.loggedUser);
      const avatar = loggedUser.avatar;
      const username = loggedUser.username;

      if (!!avatar) {
        setAvatar(avatar);
      }

      setUser(username);
    }
  }, []);

  const toogleAppLinks = () => {
    if (isUserLinksOpen) {
      setIsUserLinksOpen(!isUserLinksOpen);
      hide(mobileUserLinksRef.current);
    }

    if (!isAppLinksOpen) {
      setIsAppLinksOpen(!isAppLinksOpen);
      return show(mobileAppLinksRef.current);
    }
    setIsAppLinksOpen(!isAppLinksOpen);
    hide(mobileAppLinksRef.current);
  };

  const toggleUserLinks = () => {
    if (isAppLinksOpen) {
      setIsAppLinksOpen(!isAppLinksOpen);
      hide(mobileAppLinksRef.current);
    }

    if (!isUserLinksOpen) {
      setIsUserLinksOpen(!isUserLinksOpen);
      return show(mobileUserLinksRef.current);
    }
    setIsUserLinksOpen(!isUserLinksOpen);
    hide(mobileUserLinksRef.current);
  };

  const signOut = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/auth/signin";
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.row}>
          <div className={styles.logo_wrapper}>
            <p className={styles.logo}>
              <span className={styles.kino}>Kino</span>
              <span className={styles.mo}>Mo</span>
            </p>
          </div>

          <div className={styles.left}>
            <div className={styles.app_link_container}>
              <div className={styles.app_link}>
                <Link href="/movies">
                  <a>Movies</a>
                </Link>
              </div>
            </div>
            <div className={styles.user_link_container}>
              {!isAuthenticated && (
                <div className={styles.auth_link}>
                  <Link href="/auth/signup">
                    <a className={styles.call_to_action}>JOIN NOW</a>
                  </Link>
                  <Link href="/auth/signin">
                    <a className={styles.signin}>SIGN IN</a>
                  </Link>
                </div>
              )}

              <div className={styles.icon_container}>
                <div onClick={toogleAppLinks} className={styles.menu_bar}>
                  <MenuBar />
                </div>

                {!isAuthenticated && (
                  <Link href="/auth/signin">
                    <a className={styles.user_icon}>
                      <UserIcon />
                    </a>
                  </Link>
                )}
              </div>

              {isAuthenticated && (
                <div onClick={toggleUserLinks} className={styles.user_info}>
                  <img className={styles.avatar} src={avatar} alt="avatar" />
                  <span className={styles.name}>{user}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div ref={mobileAppLinksRef} className={styles.mobile_app_links}>
        <div>
          <Link href="/movies">
            <a>Movies</a>
          </Link>
        </div>
      </div>

      <div ref={mobileUserLinksRef} className={styles.mobile_user_links}>
        <div>
          <button className={styles.sign_out_button} onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
