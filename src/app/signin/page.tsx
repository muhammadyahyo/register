"use client"
import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Alert, AlertTitle } from "@mui/material";
import { useRouter } from 'next/navigation';


const SignIn = () => {
    const [key, setKey] = useState(null)
    const route = useRouter()
    const onChange = ({ target }: any) => {
        setKey(target.value.toLowerCase())

    }
    const onSubmit = () => {
        if (key === 'oybek') {
            localStorage.setItem(`password`, `${key}`)
            route.push('/')
        } else {
            alert('Parol xato')
        }
    }
    return (
        <Box sx={{ border: '1px solid #2a282a', width: '500px', margin: '100px auto' }}>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }} variant='h3'>Sign In</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    id="outlined-textarea"
                    label="Your password"
                    name={'password'}
                    placeholder="Enter your password"
                    multiline
                    onChange={onChange}
                    sx={{ mt: 3 }}
                />
                <Button onClick={onSubmit} variant='contained' sx={{ margin: '20px 0' }}>Submit</Button>
            </Box>
        </Box>
    )
}

export default SignIn