import React from "react";
import banner01 from "../assets/imgs/sub/banner01.png";

function SubBanner() {
    const banner_text = [
        {
            h1: "서울특별시 문화예술과 산하 비영리 법인 희망나무재단은",
            h2: `문화컨텐츠를 통해서 \n사람과 사람의 다리를 잇는 봉사단체 입니다.`,
        },
    ];
    return (
        <div class="subBanner">
            <div
                style={{
                    background: `url(${banner01})`,
                    backgroundPosition: "77% center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                }}
            >
                <div className="sub_banner_inn sub_container">
                    {banner_text.map((item, i) => (
                        <div class="sub_banner_text" key={i}>
                            <h1>{item.h1}</h1>
                            <h2>{item.h2} </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SubBanner;
