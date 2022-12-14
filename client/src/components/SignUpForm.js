import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function SignUpForm({ onLogin }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        // For demo purposes
        let admin = false
        if (username === "Admin") {
            admin = true
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username,
                password,
                password_confirmation: passwordConfirmation,
                admin,
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="firstName">First name</Label>
            <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </FormField>
        
        <FormField>
            <Label htmlFor="lastName">Last name</Label>
            <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </FormField>
        
        {/* <FormField>
            <Label htmlFor="lastName">Last name</Label>
            <Textarea
            rows="3"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </FormField> */}

        <FormField>
            <Label htmlFor="username">Username</Label>
            <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </FormField>

        <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
        </FormField>

        <FormField>
            <Label htmlFor="password">Password Confirmation</Label>
            <Input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            />
        </FormField>

        <FormField>
            <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>

        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </form>
    );
}

export default SignUpForm;
