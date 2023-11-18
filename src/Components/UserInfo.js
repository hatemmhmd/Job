import React, { useEffect, useState } from 'react';

const UserInfo = () => {

    const [theme, setTheme] = useState("light-theme");

    const ToggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className="content-userinfo">
                <div className="username">
                    <p><span>hello</span> , mohannad alsouqi </p>
                </div>
                <div className="icon">
                    <p onClick={ToggleTheme}><i class="fa-regular fa-sun"></i></p>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
