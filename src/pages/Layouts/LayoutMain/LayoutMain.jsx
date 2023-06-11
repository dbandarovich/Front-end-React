import React from "react";
import {Sidebar} from "../../../components/Sidebar/Sidebar";
import styles from './LayoutMain.module.scss'
import {Sprite} from "../../../components";
import {Outlet} from "react-router-dom";

export const LayoutMain = () => {

    return (
        <>
            <div className={styles.container}>
                <Sidebar/>
            </div>

            <Sprite/>
            <Outlet/>
        </>
    );
};
