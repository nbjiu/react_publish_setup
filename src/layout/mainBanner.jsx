import React from "react";
import banner01 from "../assets/imgs/main/banner01.png";

function MainBanner() {
    return (
        <div class="banner">
            <div
                style={{
                    background: `url(${banner01})`,
                    backgroundPosition: "77% center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                }}
            >
                <div class="banner_inn container"></div>
            </div>
        </div>
    );
}
export default MainBanner;
