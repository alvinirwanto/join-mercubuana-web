import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import MengapaMemilihKK from "../sections/MengapaMemilihKK";
import UnduhBrosur from "../sections/UnduhBrosur";
import FDSK from "../sections/Fakultas/FDSK";
import Fasilkom from "../sections/Fakultas/Fasilkom";
import FPsi from "../sections/Fakultas/FPsi";
import FT from "../sections/Fakultas/FT";
import Fikom from "../sections/Fakultas/Fikom";
import FEB from "../sections/Fakultas/FEB";
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
          content="Website join Universitas Mercu Buana"
        />
        <meta name="keywords" content="join universitas mercu buana umb" />
        <link rel="icon" href="/logo-umb.png" />
      </Head>

      <Navbar />

      <main>
        <Heropage />
        <MengapaMemilihKK />
        <UnduhBrosur />
        {/* <Fakultas/> */}
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
