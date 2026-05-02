"use client";

import { useState } from "react";
import { usePiAuth } from "@/contexts/pi-auth-context";

export default function Home() {
  // Step 1: AUTH - Sử dụng usePiAuth hook để đảm bảo Pi SDK sẵn sàng
  const { isAuthenticated, authMessage } = usePiAuth();

  // Step 2: TRIGGER - State để quản lý trạng thái thanh toán
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  // Step 3 & 4 & 5: Payment Flow + Server Auth + Redirect
  const handlePayment = async () => {
    if (!isAuthenticated) {
      setPaymentStatus("⚠️ Đang kết nối Pi Network...");
      return;
    }

    setIsPaying(true);
    setPaymentStatus("⏳ Đang khởi tạo thanh toán...");

    try {
      // Kiểm tra Pi SDK có sẵn
      if (typeof window.Pi === "undefined") {
        throw new Error("Pi SDK chưa được tải");
      }

      const paymentId = await window.Pi.createPayment(
        {
          amount: 1,
          memo: "Phí kích hoạt",
          metadata: {
            productId: "setup-activation",
            timestamp: Date.now(),
          },
        },
        {
          // STEP 4: onReadyForServerApproval - Gọi API backend để server duyệt giao dịch
          onReadyForServerApproval: async (paymentId: string) => {
            console.log("[v0] onReadyForServerApproval triggered:", paymentId);
            setPaymentStatus("✅ Gửi xác nhận tới server...");

            try {
              const response = await fetch("/api/payments/approve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentId }),
              });

              if (!response.ok) {
                throw new Error(`Server approval failed: ${response.statusText}`);
              }

              const data = await response.json();
              console.log("[v0] Server approval response:", data);
              setPaymentStatus("✅ Server đã duyệt, chờ hoàn tất...");
            } catch (error) {
              console.error("[v0] Server approval error:", error);
              setPaymentStatus(`❌ Lỗi xác nhận server: ${error instanceof Error ? error.message : "Không rõ"}`);
              throw error;
            }
          },

          // STEP 4: onReadyForServerCompletion - Gọi API backend để server hoàn tất giao dịch
          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            console.log("[v0] onReadyForServerCompletion triggered:", paymentId, txid);
            setPaymentStatus("✅ Hoàn tất thanh toán với server...");

            try {
              const response = await fetch("/api/payments/complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentId, txid }),
              });

              if (!response.ok) {
                throw new Error(`Server completion failed: ${response.statusText}`);
              }

              const data = await response.json();
              console.log("[v0] Server completion response:", data);
            } catch (error) {
              console.error("[v0] Server completion error:", error);
              setPaymentStatus(`❌ Lỗi hoàn tất giao dịch: ${error instanceof Error ? error.message : "Không rõ"}`);
              throw error;
            }
          },

          // Khi user hủy thanh toán
          onCancel: (paymentId: string) => {
            console.log("[v0] Payment cancelled by user:", paymentId);
            setPaymentStatus("❌ Thanh toán đã bị hủy");
            setIsPaying(false);
          },

          // Khi có lỗi trong quá trình thanh toán
          onError: (error: Error, paymentId?: string) => {
            console.error("[v0] Payment error:", error, "paymentId:", paymentId);
            setPaymentStatus(`❌ Lỗi thanh toán: ${error.message}`);
            setIsPaying(false);
          },

          // STEP 5: Redirect - Chỉ khi thanh toán hoàn tất thành công
          onComplete: (paymentId: string) => {
            console.log("[v0] Payment completed successfully:", paymentId);
            setPaymentStatus("✅ Thanh toán thành công! Đang chuyển hướng...");

            // Chuyển hướng sang /setup.html sau 1 giây
            setTimeout(() => {
              window.location.href = "/setup.html";
            }, 1000);
          },
        }
      );

      console.log("[v0] Payment created with ID:", paymentId);
    } catch (error) {
      console.error("[v0] Failed to create payment:", error);
      const errorMsg = error instanceof Error ? error.message : "Lỗi không xác định";
      setPaymentStatus(`❌ Lỗi: ${errorMsg}`);
      setIsPaying(false);
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
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
          {/* STEP 2: Button trigger thanh toán với state isPaying */}
          <button
            onClick={handlePayment}
            disabled={isPaying || !isAuthenticated}
            className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-pink-600 disabled:bg-pink-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            <span>⚙️</span>
            {isPaying ? "Đang xử lý..." : "VÀO TRANG QUẢN TRỊ"}
          </button>

          {/* Hiển thị trạng thái thanh toán */}
          {paymentStatus && (
            <div className="text-sm text-center py-2 px-3 bg-gray-100 rounded-lg font-medium">
              {paymentStatus}
            </div>
          )}

          {/* Nút miễn phí vào khu vực khách hàng */}
          <a
            href="/index.html"
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
          >
            <span>✨</span> KHU VỰC KHÁCH HÀNG
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          {isAuthenticated ? "✅ Kết nối Pi Network thành công" : `⏳ ${authMessage}`}
        </div>
      </div>
    </main>
  );
}
