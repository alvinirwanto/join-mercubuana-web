import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                {/* <!-- Google tag (gtag.js) -->  */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-949610150"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];

                    function gtag(){
                        dataLayer.push(arguments)
                    }
                    
                    gtag('js', new Date()); 
                    gtag('config', 'AW-949610150');
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}