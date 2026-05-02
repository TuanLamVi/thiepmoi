import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/payments/approve
 * 
 * Gọi Pi Platform API để approve giao dịch thanh toán
 * 
 * Body: { paymentId: string }
 * Response: { success: boolean, data?: object, error?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId } = body;

    // Validate paymentId
    if (!paymentId || typeof paymentId !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid paymentId" },
        { status: 400 }
      );
    }

    // Lấy Pi API Key từ environment variables
    const piApiKey = process.env.PI_API_KEY;
    if (!piApiKey) {
      console.error("[v0] PI_API_KEY not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Gọi Pi Platform API endpoint approve
    const piApiUrl = `https://api.minepi.com/v2/payments/${paymentId}/approve`;
    
    console.log("[v0] Calling Pi Platform API:", piApiUrl);

    const response = await fetch(piApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${piApiKey}`,
      },
    });

    const data = await response.json();

    // Check if approval was successful
    if (!response.ok) {
      console.error("[v0] Pi Platform API error:", response.status, data);
      return NextResponse.json(
        {
          success: false,
          error: data?.error?.message || `Platform API error: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    console.log("[v0] Payment approved successfully:", paymentId);
    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] Approve payment error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
