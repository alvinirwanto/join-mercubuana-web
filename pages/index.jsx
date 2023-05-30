import Head from "next/head";

import Navbar from "../components/Navbar";
import MengapaMemilihKK from "../sections/MengapaMemilihKK";
import UnduhBrosur from "../sections/UnduhBrosur";
import TentangUMB from "../sections/TentangUMB";
import AlurPenerimaan from "../sections/AlurPenerimaan";
import Review from "../sections/Review";
import FAQ from "../sections/FAQ";
import Footer from "../components/Footer";
import Heropage from "../sections/Heropage";
import MengapaMemilihUMB from "../sections/MengapaMemilihUMB";
import Fakultas from "../sections/Fakultas";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Join UMB</title>
                <meta
                    name="description"
                    content='Universitas Mercu Buana, Pilihan Terbaik PTS di Indonesia. Daftarkan Diri Anda di Sini dan Dapatkan Informasi serta cicilan biaya kuliah hingga 48 kali!'
                />
                <meta name="keywords" content="join universitas mercu buana, umb, universitas terbaik jakarta, univ swasta, kampus swasta terbaik, pts akreditasi unggul, mahasiswa berprestasi, gabung umb, universitas mercu buana meruya, kelas keryawan" />
                <link rel="icon" href="/logo/logo-umb.png" />
            </Head>

            <Navbar />

            <main>
                <Heropage />
                <MengapaMemilihKK />
                <UnduhBrosur />
                <Fakultas />
                <TentangUMB />
                <MengapaMemilihUMB />
                <AlurPenerimaan />
                <Review />
                <FAQ />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
