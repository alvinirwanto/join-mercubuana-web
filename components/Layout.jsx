import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ title, children }) {
    return (
        <html lang="en">
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content='Universitas Mercu Buana, Pilihan Terbaik PTS di Indonesia. Daftarkan Diri Anda di Sini dan Dapatkan Informasi serta cicilan biaya kuliah hingga 48 kali!'
                />
                <meta name="keywords" content="join universitas mercu buana, umb, universitas terbaik jakarta, univ swasta, kampus swasta terbaik, pts akreditasi unggul, mahasiswa berprestasi, gabung umb, universitas mercu buana meruya, kelas keryawan" />
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
