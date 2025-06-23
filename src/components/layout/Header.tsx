import React from "react";
import * as styles from "@/styles/layout/header.module.scss";

const Header = () => {
    return <header className={styles.header}>
        <h2>衛生管理者合格ナビ</h2>
        <div>
            <div>
                <a href="">HOME</a>
                <a href="">DATA</a>
            </div>
        </div>
    </header>;
};
export default Header;