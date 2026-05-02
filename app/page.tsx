"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-pink-500">
        
        {/* LOGO */}
        <div className="mx-auto bg-pink-100 w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-inner">
          <span className="text-4xl">💌</span>
        </div>

        <h1 className="text-2xl font-bold text-pink-600 mb-2">Hệ Thống Thiệp Mời</h1>
        <p className="text-gray-600 mb-8 text-sm">
          Chào mừng bạn đến với công cụ tạo thiệp cưới thông minh trên nền tảng Pi Network.
        </p>

        <div className="flex flex-col gap-4">
          <a 
            href="/setup.html" 
            className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-pink-600 transition flex items-center justify-center gap-2"
          >
            <span>⚙️</span> VÀO TRANG QUẢN TRỊ 
          </a>
          
          <a 
            href="/index.html" 
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
          >
            <span>✨</span> KHU VỰC KHÁCH HÀNG
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          Tích hợp sẵn thanh toán Pi Network
        </div>
      </div>
    </main>
  );
}
