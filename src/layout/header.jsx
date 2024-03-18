import React from "react";
import logo from "../assets/imgs/icons/logo.png";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header class="head">
            <div class="container">
                <div class="auth">
                    <Link>로그인</Link>
                    <span></span>
                    <Link>회원가입</Link>
                </div>
                <div class="header_inn">
                    <div class="logo">
                        <Link to="/">
                            <img src={logo} alt="회망나무재단" />
                        </Link>
                    </div>
                    <nav>
                        <ul class="gnb">
                            <li>
                                <Link to="/sponsor">후원하기</Link>
                            </li>
                            <li>
                                <Link to="/sponsor">회망나무재단</Link>
                            </li>
                            <li>
                                <Link to="/sponsor">사업소개</Link>
                            </li>
                            <li>
                                <Link to="/sponsor">소식</Link>
                            </li>
                            <li>
                                <Link to="/sponsor">나의후원</Link>
                            </li>
                        </ul>
                    </nav>
                    <div class="support">
                        <Link to="/sponsor">후원하기</Link>
                        <button class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
