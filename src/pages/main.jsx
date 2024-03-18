import React from "react";
import const0_1 from "../assets/imgs/main/const0_1.png";
import const0_2 from "../assets/imgs/main/const0_2.png";
import const0_3 from "../assets/imgs/main/const0_3.png";
import const0_4 from "../assets/imgs/main/const0_4.png";
import const1_1 from "../assets/imgs/main/const1_1.png";
import const4_1 from "../assets/imgs/main/conts4_1.png";
import const4_2 from "../assets/imgs/main/conts4_2.png";
import const4_3 from "../assets/imgs/main/conts4_3.png";
import const4_4 from "../assets/imgs/main/conts4_4.png";
import greenAdd from "../assets/imgs/icons/ico_green_add.png";
import conts5_1 from "../assets/imgs/icons/conts5_1.png";
import conts5_2 from "../assets/imgs/icons/conts5_2.png";
import ico_right_arr from "../assets/imgs/icons/ico_right_arr.png";
import MainBanner from "../layout/mainBanner";

export default function Main() {
    const const0 = [
        {
            img: const0_1,
            tit: "문화컨텐츠사업",
            desc: `든든한 후원자가 \n되어주세요.`,
            link: "cc",
        },
        {
            img: const0_2,
            tit: "윤리경영아카데미",
            desc: `든든한 후원자가 \n되어주세요.`,
            link: "cc",
        },
        {
            img: const0_3,
            tit: "사회공헌사업",
            desc: `든든한 후원자가 \n되어주세요.`,
            link: "cc",
        },
        {
            img: const0_4,
            tit: "청년아카데미",
            desc: `든든한 후원자가 \n되어주세요.`,
            link: "cc",
        },
    ];
    const conts1 = [
        {
            img: const1_1,
            cat: "이야기",
            tit: "직업, 그 이상의 진심 - 해외 파견 간사를 만나다 직업, 그 이상의 진심 - 해외 파견 간사를 만나다",
            link: "cc",
        },
        {
            img: const1_1,
            cat: "보고서",
            tit: "[무연고 아동지원] 잇다 캠페인 결과보고",
            link: "cc",
        },
        {
            img: const1_1,
            cat: "보고서",
            tit: "1월의 풍성함을 채우는 기대 말씀",
            link: "cc",
        },
        {
            img: const1_1,
            cat: "이야기",
            tit: "직업, 그 이상의 진심 - 해외 파견 간사를 만나다",
            link: "cc",
        },
    ];
    const conts4 = [
        {
            img: const4_1,
            txt: "정기후원",
            link: "cc",
        },
        {
            img: const4_2,
            txt: "기업·단체후원",
            link: "cc",
        },
        {
            img: const4_3,
            txt: "국내사업후원",
            link: "cc",
        },
        {
            img: const4_4,
            txt: "해외사업후원",
            link: "cc",
        },
    ];

    return (
        <>
            <MainBanner />
            <div className="conts">
                <section className="conts0 container">
                    <div className="inn">
                        {const0 &&
                            const0.map((item, i) => (
                                <div className="item" key={i}>
                                    <div className="img">
                                        <img
                                            src={item.img}
                                            alt="회망나무재단 함께하기"
                                        />
                                    </div>
                                    <div className="text">
                                        <h6>{item.tit}</h6>
                                        <p>{item.desc}</p>
                                        <a href={item.link}>함께하기</a>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
                <section class="conts1 container">
                    <h3 class="article_tit">소식</h3>
                    <div class="inn">
                        {conts1.map((item, i) => (
                            <a href={item.link} class="item">
                                <div class="img">
                                    <img
                                        src={item.img}
                                        alt="회망나무재단 소식"
                                    />
                                </div>
                                <article>
                                    <p>{item.cat}</p>
                                    <h6 class="line_clamp_2">{item.tit}</h6>
                                </article>
                            </a>
                        ))}
                    </div>
                </section>
                <section class="conts2">
                    <div class="inn container">
                        <p>모든 아이들과 가정, 공동체가 회복되어</p>
                        <p>또 다른 공동체를 돕는 미래를 꿈꿉니다.</p>
                        <a href="">자세히 보기</a>
                    </div>
                </section>
                <section class="conts3 container">
                    <h3 class="article_tit">캠페인</h3>
                    <p>
                        세상을 바꾸는 나눔<span>을 시작해 보세요</span>
                    </p>
                    <div class="inn">
                        <a href="">
                            <p>잇다 청년아카데미</p>
                        </a>
                        <a href="">
                            <p>컬처스케치 1일 클래스</p>
                        </a>
                        <a href="">
                            <p>컬처스케치 TV</p>
                        </a>
                    </div>
                </section>
                <section class="conts4 container">
                    <h3 class="article_tit">나눔, 어떻게 시작하면 되나요?</h3>
                    <div class="inn">
                        {conts4.map((item, i) => (
                            <div class="item">
                                <div class="img">
                                    <img src={item.img} alt="회망나무재단" />
                                </div>
                                <a href={item.link} class="text">
                                    <p>기업·단체후원</p>
                                    <img src={greenAdd} alt="회망나무재단" />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                <section class="conts5 container">
                    <a href="" class="item">
                        <p>후원가이드 보기</p>
                        <div>
                            <img src={conts5_1} alt="회망나무재단" />
                            <img src={ico_right_arr} alt="회망나무재단" />
                        </div>
                    </a>
                    <a href="" class="item">
                        <p>뉴스레터신청</p>
                        <div>
                            <img src={conts5_2} alt="회망나무재단" />
                            <img src={ico_right_arr} alt="회망나무재단" />
                        </div>
                    </a>
                </section>
            </div>
        </>
    );
}
