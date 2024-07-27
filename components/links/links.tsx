import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from './links.module.css';

function Links() {
    const routes = [
        {
            title: 'Home',
            path: '#home'
        },
        {
            title: 'About',
            path: '#about'
        },
        {
            title: 'Projects',
            path: '#Projects'
        },
        {
            title: 'Skills',
            path: '#Skills'
        },
        {
            title: 'Experience',
            path: '#Experience'
        },
        {
            title: 'Contact',
            path: '#Contact'
        },
    ];

    return (
        <>
            {routes.map(route => (
                <Link className={styles.links} href={route.path} key={route.title}>
                    {route.title}
                </Link>
            ))}
        </>
    )
}

export default Links