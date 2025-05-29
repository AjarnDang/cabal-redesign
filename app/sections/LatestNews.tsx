import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// ข้อมูลจำลองสำหรับข่าว
const newsData = [
  {
    id: 1,
    title: "อัปเดตเซิร์ฟเวอร์ประจำเดือนพฤษภาคม 2025",
    category: "แพทช์ใหม่",
    date: "26 พ.ค. 2025",
    excerpt:
      "อัปเดตครั้งใหญ่มาถึงแล้ว! พบกับคลาสใหม่ แผนที่ใหม่ และระบบการต่อสู้ที่ปรับปรุงใหม่",
    imageUrl: "https://res.ldplayer.net/rms/ldplayer/process/img/a043daa149984b8ab0f5188c132fb3761715848949.webp",
    link: "#",
  },
  {
    id: 2,
    title: "การแข่งขัน CABAL Tournament 2025 เปิดรับสมัครแล้ว",
    category: "การแข่งขัน",
    date: "24 พ.ค. 2025",
    excerpt:
      "เตรียมพร้อมสำหรับการแข่งขันระดับประเทศ ชิงเงินรางวัลรวมกว่า 1 ล้านบาท",
    imageUrl: "https://storage.combocabalm.com/contents/Banner_coming_soon_1200x1200_copy-1729584356.png",
    link: "#",
  },
  {
    id: 3,
    title: "กิจกรรมสะสมแต้มรับไอเทมพิเศษ",
    category: "กิจกรรม",
    date: "20 พ.ค. 2025",
    excerpt:
      "ร่วมกิจกรรมสะสมแต้มจากการเล่นเกม เพื่อแลกรับไอเทมสุดพิเศษที่หาไม่ได้จากที่อื่น",
    imageUrl: "https://storage-web-th.combocabal.com/contents/%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87-1732611360.jpg",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">ข่าวสารล่าสุด</h2>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-1 transition-colors duration-300"
          >
            <p>ดูข่าวทั้งหมด</p>
            <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card component
const NewsCard = ({ news }: { news: any }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative min-h-64 mb-4 overflow-hidden">
        {/* เราใช้ div ที่มี background เป็นตัวแทนของรูปภาพในกรณีที่ยังไม่มีรูปจริง */}
        <div
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url(${news.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="text-sm text-muted-foreground mb-2">
          {news.category} | {news.date}
        </div>
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{news.excerpt}</p>
      </div>
    </div>
  );
};

export default LatestNews;
