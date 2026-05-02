"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/TuanLamVi/miniweb/main/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-pretty leading-tight">
            Thiệp Mời Online
          </h1>

          <p className="font-[family-name:var(--font-roboto)] text-lg sm:text-xl text-gray-100 max-w-2xl text-pretty leading-relaxed">
            Tạo thiệp mời đẹp - sang - chuyên nghiệp chỉ trong 30 giây. Gửi ngay
            qua Zalo &amp; Messenger
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full">
            <Link
              href="https://tuanlamvi.github.io/sinhnhat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#e91e63] hover:bg-[#d61654] text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 whitespace-nowrap font-[family-name:var(--font-roboto)]"
            >
              <span className="mr-2">✨</span>
              TẠO THIỆP NGAY MIỄN PHÍ
            </Link>

            <Link
              href="https://tuanlamvi.github.io/AnhThiep/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-[#e91e63] font-bold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 whitespace-nowrap font-[family-name:var(--font-roboto)]"
            >
              Xem mẫu thiệp
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Stats */}
          <p className="font-[family-name:var(--font-roboto)] text-sm sm:text-base text-gray-200 pt-6">
            Đã có hơn 18.000+ thiệp được tạo • Không cần đăng ký
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4">⚡</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Siêu Tốc
              </h3>
              <p className="font-[family-name:var(--font-roboto)] text-gray-600 text-sm sm:text-base leading-relaxed">
                Tạo thiệp mới chỉ trong vài giây, không cần kỹ năng thiết kế
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4">💖</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Sang Trọng
              </h3>
              <p className="font-[family-name:var(--font-roboto)] text-gray-600 text-sm sm:text-base leading-relaxed">
                Thiệp mời đẹp mắt, chuyên nghiệp với mẫu thiết kế sẵn có
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4">📲</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Gửi Dễ Dàng
              </h3>
              <p className="font-[family-name:var(--font-roboto)] text-gray-600 text-sm sm:text-base leading-relaxed">
                Chia sẻ trực tiếp qua Zalo, Facebook, Messenger trong một click
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            href="https://tuanlamvi.github.io/sinhnhat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#e91e63] to-[#d61654] hover:from-[#d61654] hover:to-[#c41249] text-white font-bold text-lg sm:text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-[family-name:var(--font-roboto)]"
          >
            <span className="mr-2">🎉</span>
            BẮT ĐẦU TẠO THIỆP NGAY
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-[family-name:var(--font-roboto)] text-sm sm:text-base leading-relaxed">
          © 2026 Thiệp Mời Online - Tạo thiệp đẹp trong một nốt nhạc
          <span className="ml-1">💌</span>
        </p>
      </footer>
    </main>
  );
}
