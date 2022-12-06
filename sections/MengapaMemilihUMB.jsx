import mercu from "../public/Kelas-karyawan.webp";
import Image from "next/image";

const MengapaMemilihUMB = () => {
  return (
    <div className="w-full p-[5rem] bg-gray-100">
      <h4 class="text-primary-green text-center font-semibold">Mengenai</h4>
      <h3 className="text-center font-bold">Universitas Mercu Buana</h3>

      <div className="grid grid-cols-2 pt-9">
        <div>
          {" "}
          <iframe
            width="500"
            height="250"
            src="https://www.youtube.com/embed/-_sIStXUSBw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="bg-white-500">
          <div className="font-bold">
            Universitas Mercu Buana,<br></br>Pilihan Terbaik PTS di Indonesia
          </div>
          <h2>
            <br></br> Universitas Mercu Buana salah satu PTS terbaik di
            Indonesia telah terakreditasi BAN PT. Memiliki program studi
            unggulan yang siap mengantarkan menjadi tenaga profesional yang
            andal. PTS terbaik dengan biaya yang sesuai dengan kualitas dan
            menyediakan program kelas karyawan untuk para tenaga profesional
            yang ingin melanjutkan ke jenjang pendidikan lebih tinggi.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-9">
        <div className="font-bold">
          Fasilitas Kampus<br></br>
        </div>
        <div className="bg-white-500"></div>
        <h2>
          <br></br> Universitas Mercu Buana memiliki kampus yang berlokasi di
          tiga area yaitu kampus Meruya Jakarta Barat, Kampus Menteng Jakarta
          Pusat, Kampus Warung Buncit Jakarta Selatan. Sarana ruang kelas dan
          laboratorium mahasiswa yang terdapat di seluruh kampus.<br></br>
          <br></br>
          Tak hanya itu, Universitas Mercu Buana juga dilengkapi berbagai sarana
          dan prasarana dalam kenyamanan proses pembelajaran seperti ruang kelas
          nyaman, kampus yang dilengkapi dengan berbagai lapangan olahraga,
          auditorium, sasana kreasi buana, poliklinik, gedung dormitory dengan
          fasilitas penunjang yang lengkap.
        </h2>
        <div className="grid grid-cols-2 pt-9">
          <div className="font-semibold">
            <Image src={mercu} max-width="550" height="450" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MengapaMemilihUMB;
