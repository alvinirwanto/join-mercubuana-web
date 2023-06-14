import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                {/* <!-- Google tag (gtag.js) -->  */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-949610150"></Script>
                <Script>
                    window && window.dataLayer = window.dataLayer || [];

                    function gtag(){
                        dataLayer.push(arguments)
                    }

                    gtag('js', new Date());
                    gtag('config', 'AW-949610150');
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}