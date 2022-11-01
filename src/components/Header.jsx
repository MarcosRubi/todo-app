import React, { useContext, useState } from "react";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";
import { TaskContext } from "../context/TaskContext";

function Header() {
    const { theme, setTheme } = useContext(TaskContext);
    
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <header>
            <div className="d-flex align-center jc-between container">
                <div>
                    <a href="#" className="logo">
                        TODO
                    </a>
                </div>
                <div>
                    <div className="input-group">
                        <input
                            type="checkbox"
                            name="chkTheme"
                            id="chkTheme"
                            onChange={() => changeTheme()}
                        />
                        <label htmlFor="chkTheme">
                            <img
                                src={theme === "light" ? iconMoon : iconSun}
                                alt="Change Theme"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
