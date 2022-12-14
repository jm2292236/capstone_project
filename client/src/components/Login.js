import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Wrapper>
        {/* <Logo>AppLogo</Logo> */}
        {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
                Don't have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
                </Button>
            </p>
            <h6>---</h6>
            <h6>For demo purposes, username: Admin, password: Admin300#</h6>
            <h6>If you want to use the Admin user</h6>
            <h6>---</h6>
            </>
        ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
                Already have an account? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(true)}>
                    Log In
                </Button>
            </p>
            </>
        )}
        </Wrapper>
    );
}

const Logo = styled.h1`
    font-family: "Permanent Marker", cursive;
    font-size: 3rem;
    color: deeppink;
    margin: 8px 0 16px;
`;

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
`;

export default Login;
