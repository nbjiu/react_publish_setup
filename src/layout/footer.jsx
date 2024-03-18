import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer">
            <div class="footer_inn">
                <section class="foot01 container">
                    <ul class="footer_gnb">
                        <li>
                            <Link to="/">이용약관</Link>
                        </li>
                        <li>
                            <Link to="/">개인정보처리방침</Link>
                        </li>
                        <li>
                            <Link to="/">이메일무단수집거부</Link>
                        </li>
                        <li>
                            <Link to="/">오시는길</Link>
                        </li>
                        <li>
                            <Link to="/">사이트맵</Link>
                        </li>
                        <li>
                            <Link to="/">ENG</Link>
                        </li>
                    </ul>
                    <div>
                        <div class="f01_select">
                            <select>
                                <option selected>FH Federation</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="f01_select">
                            <select>
                                <option selected>Family Site</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section class="foot02 container">
                    <div class="f_item f01_item">
                        <h6>바로가기</h6>
                        <div>
                            <Link to="/">후원</Link>
                            <Link to="/">1:1 문의</Link>
                        </div>
                        <div>
                            <Link to="/">참여</Link>
                            <Link to="/">FAQ</Link>
                        </div>
                    </div>
                    <div class="f_item f02_item">
                        <h6>대표전화 02-000-0000</h6>
                        <p>운영시간: 오전 10:00 ~ 오후 6:00 (토/공휴일 휴무)</p>
                        <Link to="/">후원 계좌 안내</Link>
                    </div>
                    <div class="f_item f03_item">
                        <h6>Follow</h6>
                        <div>
                            <div class="sns-row">
                                <Link to="/">블로그</Link>
                                <Link to="/">페이스북</Link>
                                <Link to="/">인스타그램</Link>
                                <Link to="/">트위터</Link>
                            </div>
                            <div class="sns-row">
                                <Link to="/">카카오</Link>
                                <Link to="/">유뷰트</Link>
                                <Link to="/">해피빈</Link>
                            </div>
                        </div>
                        <div class="app_link">
                            <Link to="/">기부금영수증</Link>
                            <Link to="/">뉴스레터신청</Link>
                        </div>
                    </div>
                </section>
                <span></span>
                <section class="foot03 container">
                    <div>
                        <p>서울특별시 강서구</p>
                        <p>사업자번호 000-00-00000</p>
                        <p>대표자 홍길동</p>
                    </div>
                    <Link to="/">사단법인 사업자등록</Link>
                </section>
            </div>
        </footer>
    );
}
export default Footer;
