import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AfirmasiPage = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [currentSolution, setCurrentSolution] = useState("");
  
  const [afirmasi] = useState([
    {
      id: 1,
      text: '"Saya pernah dijauhi oleh orang lain karena tindakan yang saya ambil"',
      solution: '"1. Terima dan Akui Emosi yang Timbul Penolakan sering menimbulkan perasaan sedih, kecewa, atau marah. Jangan menekan atau mengabaikan perasaan ini. Berikan ruang bagi diri kamu untuk merasakan dan mengakui emosi tersebut sebagai bagian dari proses penyembuhan. 2. Refleksi Diri Tanpa Menghakimi Setelah menerima emosi, lakukan refleksi untuk memahami alasan tindakan kamu dan dampaknya. Jangan menghakimi diri secara berlebihan, tapi gunakan refleksi ini untuk belajar dan berkembang. 3. Ubah Pola Pikir Negatif Menurut terapi kognitif, ubah pikiran negatif seperti "Saya tidak berharga karena dijauhi" menjadi pikiran yang lebih realistis dan positif, misalnya "Penolakan ini bukan cerminan nilai diri saya secara keseluruhan." 4. Bangun Kembali Hubungan dan Sosialisasi Cobalah untuk meningkatkan interaksi sosial dengan kelompok atau individu lain. Fokus pada keunikan dan kualitas diri kamu agar hubungan baru dapat terjalin dengan sehat. 5. Latih Empati dan Perspektif Cobalah melihat situasi dari sudut pandang orang lain untuk memahami alasan mereka menjauhi kamu. Ini membantu mengurangi prasangka dan membuka jalan untuk rekonsiliasi. 6. Cari Dukungan Sosial dan Profesional Berbicaralah dengan keluarga, teman dekat, atau konselor profesional untuk mendapatkan dukungan emosional dan strategi mengatasi penolakan. Jika perlu, konsultasi dengan psikolog dapat membantu mengatasi dampak psikologis penolakan. 7. Fokus pada Pengembangan Diri dan Sikap Positif Menurut psikologi positif, fokuslah pada kekuatan dan potensi diri, buat tujuan hidup yang bermakna, serta latih rasa syukur dan optimisme agar mental kamu tetap kuat."',
      rujukan: 'Al-Hujurat : 12 "Hai orang-orang yang beriman, jauhilah kebanyakan prasangka, sesungguhnya sebagian prasangka itu dosa.." Ayat ini melarang prasangka buruk, mencari-cari kesalahan orang lain, dan menghindari perbuatan yang dapat menyebabkan permusuhan atau pengucilan sosial.'
    },
    {
      id: 2,
      text: '"Saya berada di suatu kondisi lingkungan yang toxic"',
      solution: '1. Kenali Tanda-Tandanya - Rasa tidak dihargai dan dihormati. -Kritik yang tidak membangun. - Manipulasi dan pengendalian. - Stres dan kecemasan yang terus-menerus. - Ketidakmampuan untuk menjadi diri sendiri. 2. Menetapkan Batasan yang Sehat - Batasi interaksi dengan orang-orang yang membawa energi negatif. - Komunikasikan batasan secara tegas dan profesional. 3. Meningkatkan Dukungan Sosial - Bangun hubungan positif dengan teman, keluarga, atau kolega yang suportif. - Cari mentor atau orang yang dapat memberi bimbingan dan dukungan emosional. 4. Melatih Mindfulness dan Pengelolaan Emosi - Latihan kesadaran penuh (mindfulness) untuk fokus pada saat ini dan mengurangi stres. - Teknik pernapasan dalam dan meditasi untuk mengelola emosi saat menghadapi situasi sulit. 5. Komunikasi yang Sehat - Jika memungkinkan, komunikasikan perasaan dan dampak perilaku toxic dengan tenang dan tegas. - Jika tidak membuahkan hasil, prioritaskan menjaga jarak. 6. Menghargai Diri Sendiri - Tingkatkan rasa percaya diri dan harga diri dengan melakukan aktivitas yang menyenangkan dan mendukung diri. - Tetapkan standar dan jangan biarkan diri terjebak dalam pola hubungan yang merugikan. 7. Mencari Bantuan Profesional - Jika kesulitan mengatasi sendiri, konsultasikan dengan psikolog atau konselor untuk mendapatkan dukungan dan strategi coping. 8. Melepaskan Diri dari Lingkungan Toxic - Jika semua upaya tidak berhasil, pertimbangkan untuk keluar dari lingkungan tersebut demi kesehatan mental dan kualitas hidup yang lebih baik. - Rencanakan langkah ini dengan matang, seperti mencari pekerjaan baru atau memperluas jaringan sosial.',
      rujukan: 'Al-Furqan : 63 “Dan hamba-hamba Tuhan Yang Maha Penyayang itu (ialah) orang-orang yang berjalan di atas bumi dengan rendah hati dan apabila orang-orang jahil menyapa mereka, mereka mengucapkan kata-kata yang baik.” Dalam lingkungan yang toxic atau penuh kebodohan dan permusuhan, orang beriman dianjurkan tetap bersikap rendah hati dan menjawab dengan kata-kata baik, bukan membalas dengan keburukan'
    },
    {
      id: 3,
      text: '"Saya tidak bisa mengutarakan pendapat ketika sedang diskusi"',
      solution: '"1. Persiapkan Diri Sebelumnya - Pelajari topik diskusi agar kamu merasa lebih percaya diri. - Buat poin-poin singkat yang ingin kamu sampaikan agar mudah diingat. 2. Latih Komunikasi Diri - Berlatih berbicara di depan cermin atau dengan teman dekat. - Gunakan teknik pernapasan untuk menenangkan diri sebelum berbicara. 3. Mulai dengan Kalimat Ringan - Gunakan kalimat pembuka seperti "Menurut saya…" atau "Saya ingin menambahkan…" untuk memudahkan memulai pembicaraan. 4. Fokus pada Isi, Bukan Penilaian Jangan terlalu khawatir tentang bagaimana orang lain menilai kamu. Fokuslah pada pesan yang ingin disampaikan. 5. Gunakan Bahasa Tubuh yang Mendukung Duduk tegak, tatap mata lawan bicara, dan gunakan ekspresi wajah yang ramah untuk menunjukkan keterbukaan dan kepercayaan diri. 6. Dengarkan dengan Aktif Mendengarkan dengan baik akan membantu kamu merespon dengan tepat dan merasa lebih terlibat dalam diskusi. 7. Mulai dari Pertanyaan Jika sulit langsung menyampaikan pendapat, coba mulai dengan bertanya untuk membuka ruang diskusi. 8. Jangan Takut Salah Ingat bahwa membuat kesalahan adalah bagian dari proses belajar. Orang lain biasanya menghargai usaha kamu untuk berkontribusi. 9. Minta Dukungan Jika memungkinkan, minta teman atau ahli untuk mendukung kamu saat diskusi untuk memberikan semangat. 10. Konsultasi dengan Profesional Jika rasa takut atau gugup sangat mengganggu, pertimbangkan untuk berkonsultasi dengan konselor, psikolog atau pelatih komunikasi."',
      rujukan: 'Thaha : 25-28 “(Musa) berkata, Ya Tuhanku, lapangkanlah dadaku, dan mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku, supaya mereka mengerti perkataanku.” Ketika merasa sulit mengutarakan pendapat, kita bisa berdoa memohon kelapangan hati dan kemudahan berbicara agar pesan kita dapat dipahami.'
    },
    {
      id: 4,
      text: '"Saya dianggap ada oleh lingkungan sekitar saya"',
      solution: '"1. Pertahankan Sikap Positif dan Konsisten Jaga sikap baik, konsisten dalam tindakan, dan tetap rendah hati agar kepercayaan dan penghargaan dari lingkungan terus terjaga. 2. Batasi Interaksi dengan Energi Negatif Meski sudah diakui, tetap waspada terhadap orang atau situasi toxic yang bisa merusak suasana positif. Batasi interaksi dengan mereka agar kesehatan mental tetap terjaga. 3. Bicarakan Perasaan dan Pengalaman dengan Orang Terpercaya Berbagi cerita dengan teman dekat, keluarga, atau profesional membantu mendapatkan dukungan dan perspektif yang sehat. 4. Fokus pada Pengembangan Diri Sendiri Lanjutkan fokus pada hal-hal yang membuat kamu bahagia dan berkembang, seperti hobi, pendidikan, atau karier. Ini akan meningkatkan rasa percaya diri dan kualitas hubungan sosial. 5. Tetapkan Batasan yang Sehat Jangan takut untuk mengatakan "tidak" jika ada hal yang tidak sesuai dengan nilai atau kapasitas kamu. Menetapkan batasan membantu menjaga keseimbangan dan menghormati diri sendiri. 6. Jaga Jarak dari Perilaku yang Merugikan Jika ada orang yang mulai meremehkan atau tidak menghargai, tetap tenang dan jika perlu, jaga jarak agar tidak terjebak dalam energi negatif. 7. Bangun dan Fokus pada Hubungan yang Menghargai Anda Perkuat hubungan dengan orang-orang yang benar-benar menghargai dan mendukung kamu. Hindari membuang energi untuk orang yang tidak menghargai. 8. Jadilah Teladan dan Pendengar yang Baik Menjadi contoh yang baik dan pendengar yang perhatian akan memperkuat posisi sosial kamu dan membuat orang lain semakin menghargai."',
      rujukan: 'Al-Hujurat : 13 “Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling mengenal.” Ayat ini menegaskan pentingnya pengakuan dan saling mengenal antar sesama manusia dalam masyarakat, yang merupakan dasar seseorang dianggap ada dan dihargai oleh lingkungan sosialnya.'
    },
    {
      id: 5,
      text: '"Saya merasa tidak ada yang peduli dengan keadaan saya"',
      solution: '"Berikut langkah-langkah yang bisa kamu lakukan untuk mengatasi perasaan itu: 1. Kenali dan Terima Perasaan kamu Sadari bahwa merasa kesepian atau tidak diperhatikan adalah perasaan yang wajar dan manusiawi. Jangan menekan atau mengabaikannya, tapi terima sebagai sinyal bahwa kamu butuh perhatian dan dukungan. 2. Buka Komunikasi dengan Orang Terpercaya Cobalah berbicara dengan keluarga, teman dekat, atau orang yang kamu percaya tentang perasaan kamu. Kadang, orang di sekitar kamu tidak menyadari keadaan kamu jika kamu tidak mengungkapkannya. 3. Cari Dukungan Profesional Jika perasaan ini berlangsung lama dan mengganggu aktivitas sehari-hari, jangan ragu untuk berkonsultasi dengan psikolog atau konselor yang dapat membantu memberikan strategi coping dan dukungan emosional. 4. Bangun Koneksi Sosial Baru Ikut komunitas, kelompok hobi, atau kegiatan sosial yang sesuai minat kamu untuk memperluas jaringan sosial dan menemukan orang-orang yang peduli dan mendukung. 5. Rawat Diri Sendiri (Self-Care) Lakukan aktivitas yang membuat kamu merasa baik, seperti olahraga, meditasi, menulis jurnal, atau melakukan hobi. Merawat diri dapat meningkatkan suasana hati dan membantu mengurangi perasaan kesepian. 6. Latih Pikiran Positif dan Syukur Coba fokus pada hal-hal kecil yang positif dalam hidup kamu dan latih rasa syukur. Ini membantu mengubah perspektif dan memperbaiki suasana hati secara bertahap. 7.  Jangan Menyalahkan Diri Sendiri Ingat bahwa perasaan tidak diperhatikan bukan berarti kamu tidak berharga. Jangan biarkan pikiran negatif merusak harga diri Anda."',
      rujukan: 'At-Tawbah : 51 Katakanlah: “Tidak akan menimpa kami melainkan apa yang telah ditetapkan Allah bagi kami. Dialah pelindung kami, dan hanya kepada Allah hendaknya orang-orang yang beriman bertawakal.” Ketika merasa sendirian dan tidak ada yang peduli, percayalah bahwa Allah adalah pelindung dan penolong terbaik.'
    },
    {
      id: 6,
      text: '"Saya butuh validasi dari orang sekitar"',
      solution: '"Itu adalah kebutuhan manusiawi untuk merasa dihargai dan diterima. Namun, terlalu bergantung pada validasi eksternal bisa membuat kita rentan terhadap kekecewaan dan kehilangan rasa percaya diri. Berikut langkah-langkah yang bisa kamu coba untuk memenuhi kebutuhan validasi secara sehat dan membangun validasi internal: 1. Sadari Kebutuhan Validasi Itu Wajar Memahami bahwa semua orang butuh pengakuan dan dukungan dari orang lain adalah hal yang normal. Jangan merasa malu atau bersalah karena membutuhkan validasi. 2. Bangun Validasi Internal (Self-Validation) - Latih diri untuk mengakui dan menghargai perasaan, usaha, dan pencapaian Anda sendiri tanpa harus selalu bergantung pada pujian dari orang lain. Misalnya: setelah menyelesaikan tugas, katakan pada diri sendiri, "Saya sudah melakukan yang terbaik." 3. Komunikasikan Kebutuhan Anda dengan Jelas - Jangan ragu untuk menyampaikan secara jujur kepada orang terdekat bahwa kamu butuh dukungan atau pengakuan. - Komunikasi terbuka membantu orang lain memahami dan memberikan validasi yang Anda butuhkan. 4. Pilih Lingkungan yang Mendukung - Kelilingi diri kamu dengan orang-orang yang positif dan suportif yang mampu memberikan validasi secara sehat dan tulus. - Hindari lingkungan yang sering mengkritik atau merendahkan. 5. Latih Mindfulness dan Penerimaan Diri - Melalui mindfulness, kamu belajar menerima diri apa adanya dan mengurangi ketergantungan pada penilaian eksternal. - Teknik meditasi dan pernapasan dapat membantu meningkatkan kesadaran diri. 6. Fokus pada Proses, Bukan Hanya Hasil - Hargai setiap langkah dan usaha yang Anda lakukan, bukan hanya hasil akhirnya. Ini membantu membangun rasa percaya diri dan validasi dari dalam. 7. Kembangkan Keterampilan Sosial - Belajar berkomunikasi efektif dan membangun hubungan yang sehat agar interaksi sosial kamu lebih bermakna dan saling mendukung."',
      rujukan: 'Al-Hashr : 18-19 “Hai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok (akhirat). Bertakwalah kepada Allah, sesungguhnya Allah Maha Mengetahui apa yang kamu kerjakan.” Fokuslah pada amal dan niat yang benar, karena Allah Maha Mengetahui dan itulah validasi yang paling penting.'
    },
    {
      id: 7,
      text: '"Saya diterima oleh orang lain karena ada apanya"',
      solution: '"Jika kamu merasa "Saya diterima oleh orang lain karena ada apanya" artinya kamu merasa diterima hanya saat memiliki kelebihan, prestasi, atau sesuatu yang membuat kamu "bernilai" di mata orang lain. berikut beberapa langkah yang bisa dilakukan untuk membangun rasa percaya diri dan penerimaan diri yang lebih sehat: 1. Bangun Pola Pikir Positif tentang Diri Sendiri Sadari bahwa nilai kamu tidak hanya ditentukan oleh prestasi atau apa yang kamu miliki, tapi juga oleh siapa kamu sebagai pribadi. Fokuslah pada kelebihan dan potensi diri yang unik. 2. Kenali dan Terima Kekurangan serta Kelebihan kamu Menerima diri secara utuh baik kelebihan maupun kekurangan membantu kamu merasa lebih nyaman dan percaya diri tanpa harus selalu "membuktikan" sesuatu kepada orang lain. 3. Fokus pada Langkah Kecil dan Perubahan Positif Mulailah dengan melakukan hal-hal kecil yang membuat kamu merasa lebih baik dan berkembang, misalnya belajar keterampilan baru atau melakukan aktivitas yang disukai. Hal ini bisa meningkatkan rasa percaya diri secara bertahap. 4. Berhenti Membandingkan Diri dengan Orang Lain Membandingkan diri dengan orang lain hanya akan menurunkan rasa percaya diri. Ingatlah bahwa setiap orang memiliki perjalanan dan keunikan masing-masing. 5. Bangun Lingkungan Sosial yang Positif dan Mendukung Bergaul dengan orang-orang yang menghargai kamu apa adanya dan memberikan dukungan positif. Lingkungan yang sehat akan memperkuat rasa penerimaan dan kepercayaan diri kamu. 6. Latih Bahasa Tubuh dan Komunikasi Percaya Diri Bahasa tubuh yang terbuka dan percaya diri dapat meningkatkan bagaimana orang lain memandang kamu dan juga memperkuat rasa percaya diri kamu sendiri. 7. Hadapi Ketakutan dan Keluar dari Zona Nyaman Berani menghadapi tantangan sosial dan situasi baru membantu kamu membuktikan kemampuan diri dan mengurangi ketergantungan pada validasi eksternal. 8. Praktikkan Self Validation (Validasi Diri Sendiri) Belajar mengakui dan menghargai usaha, perasaan, dan pencapaian Anda tanpa harus selalu menunggu pengakuan dari orang lain."',
      rujukan: 'Al-Imran : 159 “Maka disebabkan rahmat dari Allah-lah kamu (Muhammad) berlaku lemah lembut terhadap mereka.” Sikap lemah lembut, kasih sayang, dan akhlak mulia adalah “apa” yang membuat seseorang diterima dan disayangi oleh orang lain.'
    },
    {
      id: 8,
      text: '"Saya menarik diri dari lingkungan karena sudah terlanjur nyaman"',
      solution: '"Jika kamu merasa menarik diri dari lingkungan karena sudah terlanjur nyaman, hal ini bisa berkaitan dengan kebiasaan atau pola yang sulit diubah karena rasa nyaman tersebut, yang mirip dengan kondisi kecanduan psikologis terhadap zona nyaman. Ada beberapa langkah yang dapat dilakukan berdasarkan pendekatan psikologi dan pengelolaan perilaku: 1. Sadari dan Kenali Pola Perilaku kamu - Pahami bahwa menarik diri karena merasa nyaman bisa menjadi bentuk ketergantungan pada zona nyaman yang membatasi perkembangan diri. - Kesadaran ini adalah langkah awal untuk memulai perubahan. 2. Mulai Perlahan Keluar dari Zona Nyaman - Buatlah langkah kecil untuk mulai berinteraksi kembali dengan lingkungan, misalnya ikut kegiatan sosial yang ringan atau berbicara dengan satu atau dua orang yang kamu percaya. - Jangan memaksakan diri terlalu keras agar tidak menimbulkan stres yang berlebihan. 3. Gunakan Terapi Perilaku Kognitif (CBT) - Terapi ini membantu mengubah pola pikir negatif atau kebiasaan yang membuat kamu nyaman dalam menarik diri, menjadi pola pikir yang lebih adaptif dan terbuka terhadap interaksi sosial. - CBT juga membantu mengatasi kecemasan atau ketakutan yang mungkin mendasari penarikan diri. 4. Dapatkan Dukungan Sosial - Berbagi dengan teman dekat, keluarga, atau kelompok pendukung dapat memberikan motivasi dan rasa aman untuk keluar dari isolasi. - Dukungan sosial sangat penting dalam proses perubahan perilaku. 5. Atur Gaya Hidup Sehat - Jaga pola tidur, makan, dan aktivitas fisik yang baik untuk meningkatkan energi dan mood, sehingga kamu lebih termotivasi untuk berinteraksi sosial. 6. Kenali dan Hindari Pemicu yang Membuat kamu Menarik Diri - Identifikasi situasi atau pikiran yang membuat kamu memilih menarik diri, lalu cari strategi untuk menghadapinya secara sehat. 7. Buat Tujuan Sosial yang Realistis - Tetapkan target kecil dan terukur dalam berinteraksi sosial, misalnya menghadiri satu acara sosial dalam seminggu, lalu tingkatkan secara bertahap."',
      rujukan: 'Al-Asr : 1-3 “Demi masa, sesungguhnya manusia itu benar-benar dalam kerugian, kecuali orang-orang yang beriman dan mengerjakan amal saleh serta saling menasihati untuk kebenaran dan kesabaran.” Manusia tidak boleh berdiam dalam kemalasan atau zona nyaman yang membuatnya merugi, melainkan harus aktif beriman, berbuat baik, dan bersabar dalam menghadapi tantangan'
    },
    {
      id: 9,
      text: '"Saya selalu merasa diandalkan oleh lingkungan sekitar saya"',
      solution: '"Berikut beberapa langkah yang bisa dilakukan untuk mengelola perasaan tersebut agar tidak menjadi beban berlebihan: 1.  Batasi Ketergantungan Orang Lain pada kamu - Jangan langsung merespons setiap permintaan atau telepon secara otomatis. Pilih mana yang benar-benar penting dan mampu Anda tangani. - Berani mengatakan "tidak" jika merasa sudah terlalu banyak beban. Ini bukan berarti kamu jahat, tapi menjaga kemandirian dan kesehatan mental Anda. 2. Jujur dan Terbuka tentang Batasan kamu - Komunikasikan dengan jelas kepada orang-orang di sekitar tentang kapasitas dan batasan kamu. - Jangan memaksakan diri untuk selalu membantu jika itu mengorbankan kesejahteraan kamu. 3.  Kelola Emosi dengan Baik - Pelajari cara mengatur emosi agar tetap tenang dan tidak mudah stres saat menghadapi tuntutan dari lingkungan. - Teknik seperti meditasi, pernapasan dalam, dan refleksi diri dapat membantu. 4. Tingkatkan Rasa Hormat dengan Integritas dan Tanggung Jawab - Bertanggung jawab atas apa yang kamu lakukan dan akui kesalahan jika ada. - Orang yang konsisten dan jujur biasanya lebih dihormati dan dipercaya. 5. Jaga Keseimbangan antara Memberi dan Menerima - Pastikan kamu juga menerima dukungan dan perhatian dari orang lain, bukan hanya memberi. - Bangun hubungan yang sehat dan saling menguatkan. 6.  Berani Mengambil Waktu untuk Diri Sendiri - Jangan ragu untuk mengambil waktu istirahat dari tanggung jawab sosial agar bisa recharge dan menjaga kesehatan mental. 7. Belajar Mendelegasikan Tugas - Jika memungkinkan, ajak orang lain untuk turut serta dalam menyelesaikan tugas atau masalah agar beban tidak hanya kamu tanggung sendiri."',
      rujukan: 'QS. Al-Ma’idah : 2 “Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa...” Lingkungan yang saling mengandalkan satu sama lain dalam kebaikan dan ketaqwaan merupakan bentuk hubungan sosial yang sehat.'
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastAffirmation = currentIndex === afirmasi.length - 1;
  const [showConsultation, setShowConsultation] = useState(false);

  const handleResponse = (response) => {
    const currentAffirmation = afirmasi[currentIndex];
    const newResponse = {
      affirmation: currentAffirmation.text,
      response: response,
      category: currentAffirmation.category
    };
    
    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);

    if (response === 'relate') {
      setCurrentSolution(currentAffirmation.solution);
      setShowSolution(true);
    } else { // response === 'tidak'
      setShowSolution(false);
      // Move to the next affirmation if not the last one
      if (currentIndex < afirmasi.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    // Check if consultation button should be shown after this response
    // This condition checks if we just responded to the last affirmation
    if (currentIndex === afirmasi.length - 1 && updatedResponses.length === afirmasi.length) {
      setShowConsultation(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < afirmasi.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowSolution(false);
    }
  };

  const handleConsultation = () => {
    navigate("/chat");
  };

  const handleConsultationWhatsapp = () => {
    const whatsappNumber = '6281382014480';
    const message = encodeURIComponent("Halo, saya ingin melakukan konseling.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank'); // Open the link in a new tab
  }

  // Function to parse and format the solution text
  const formatSolution = (solutionText) => {
    // Split by numbered points (1., 2., 3., etc.)
    const parts = solutionText.split(/(\d+\.)/);
    const formattedParts = [];
    
    for (let i = 1; i < parts.length; i += 2) {
      const number = parts[i];
      const content = parts[i + 1];
      
      if (content && content.trim()) {
        // Split content by dash points for sub-bullets
        const subParts = content.split(' - ').filter(part => part.trim());
        const mainContent = subParts[0].trim();
        const subBullets = subParts.slice(1);
        
        formattedParts.push({
          number: number,
          mainContent: mainContent,
          subBullets: subBullets
        });
      }
    }
    
    return formattedParts;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="max-w-2xl w-full mx-auto p-8">
        <div className="text-center space-y-6">

          {/* Heading and Instruction (Hidden when solution is shown) */}
          {!showSolution && (
            <>
              <h1 className="text-4xl font-bold ">Need Assessment</h1>
              <p className="text-base-content/70">
                Pilih afirmasi apakah afirmasi tersebut relate atau tidak pada diri anda
              </p>
            </>
          )}

          {/* Affirmation Text (Always visible) */}
          <div className="py-16">
            <h2 className="text-3xl font-semibold">
              {afirmasi[currentIndex].text}
            </h2>
          </div>

          {/* Solution Display (Shown when showSolution is true) */}
          {showSolution && (
            <div className="">
              <h2 className="text-2xl font-semibold mb-4">
                Rujukan: {afirmasi[currentIndex].rujukan}
              </h2>
              <div className="mt-6 p-6 bg-primary/10 rounded-lg text-left">
                <h3 className="text-xl font-semibold mb-6 text-primary">Problem Solving:</h3>
                <div className="space-y-4">
                  {formatSolution(currentSolution).map((item, index) => (
                    <div key={index} className="mb-4">
                      <p className="mb-2">
                        <span className="font-semibold">{item.number}</span> {item.mainContent}
                      </p>
                      {item.subBullets.length > 0 && (
                        <div className="ml-4 space-y-1">
                          {item.subBullets.map((bullet, bulletIndex) => (
                            <p key={bulletIndex} className="text-sm">
                              - {bullet.trim()}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Response Buttons (Relate/Tidak - Hidden when solution is shown) */}
          {!showSolution && (!isLastAffirmation || (isLastAffirmation && !showConsultation)) && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleResponse('relate')}
                className="btn btn-primary min-w-32 rounded-md"
              >
                Relate
              </button>
              <button
                onClick={() => handleResponse('tidak')}
                className="btn btn-primary min-w-32 rounded-md"
              >
                Tidak
              </button>
            </div>
          )}

          {/* Next Button (Always visible, but with its own logic) */}
          {!isLastAffirmation && responses[currentIndex] && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleNext}
                className="btn btn-outline btn-primary min-w-32 rounded-md"
              >
                Next
              </button>
            </div>
          )}

          {/* Consultation Button (Shown when showConsultation is true) */}
          {showConsultation && (
            <div className="mt-8">
              <button
                onClick={handleConsultation} // Use the corrected handleConsultation
                className="btn btn-outline btn-primary mr-3"
              >
                Mari Konseling via web
              </button>
              <button
                onClick={handleConsultationWhatsapp} 
                className="btn btn-outline btn-primary"
              >
                Mari Konseling via whatsapp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AfirmasiPage;