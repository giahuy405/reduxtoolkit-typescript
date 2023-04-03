import React from 'react'
import { settings } from '../utils/config'
import { Navigate, Outlet } from 'react-router-dom';

type Props = {}

export default function AuthComponent({ }: Props) {
    const local = settings.getStorageJson('ACCESS_TOKEN');
    console.log(local)
    return (
        <div>
            local ?
            <Outlet />
            :
            <Navigate to='/login' />

        </div>
    )
}