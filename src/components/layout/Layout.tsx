import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as styles from "@/styles/layout/layout.module.scss"

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.base}>
            <Header />
            <main className={styles.wrapper}>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout;