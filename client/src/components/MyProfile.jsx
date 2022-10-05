import React, { useState, useEffect } from 'react'
import { Button, Error, Input, FormField, Label } from "../styles";

function MyProfile({ user, onUpdate }) {
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                first_name: firstName, 
                last_name: lastName,
                password,
                password_confirmation: passwordConfirmation,
            }),
            }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((user) => onUpdate(user));
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return (
        <form className='content' onSubmit={handleSubmit}>
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
            <Button type="submit">{isLoading ? "Loading..." : "Update"}</Button>
        </FormField>

        <FormField>
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </form>
    )
}

export default MyProfile
