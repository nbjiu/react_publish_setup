import React from "react";
import { useNavigate } from "react-router-dom";
import SubBanner from "../layout/subBanner";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <SubBanner />
            <div className="container">
                <div style={{ fontWeight: "600", fontSize: "50px" }}>
                    Not Fount
                </div>
                <div
                    onClick={() => navigate("/")}
                    style={{ color: "blue", cursor: "pointer" }}
                >
                    Main page!!!
                </div>
            </div>
        </>
    );
}
