import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ metaTitle, metaDescription, metaKeywords, metaImage, children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metaTitle}</title>
                <meta property='og:title' content={metaTitle} />
                <meta name='twitter:title' content={metaTitle} />

                <meta name="description" content={metaDescription} />
                <meta property='og:description' content={metaDescription} />
                <meta name='twitter:description' content={metaDescription} />

                <meta name="keywords" content={metaKeywords} />

                <meta property="og:image" content={metaImage} />
                <meta name="twitter:image" content={metaImage} />

                <link rel="icon" href="/logo/logo-umb.png" />
            </Head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
