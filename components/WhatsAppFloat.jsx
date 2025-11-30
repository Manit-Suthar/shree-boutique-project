"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919428919432"
      target="_blank"
      style={{
        position: "fixed",        // ALWAYS stays fixed in place
        bottom: "20px",           // 20px from the bottom of screen
        right: "20px",            // 20px from the right of screen
        background: "#25D366",    // WhatsApp green
        color: "white",
        padding: "14px 16px",
        borderRadius: "50%",      // Perfect circle
        fontSize: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // smooth glow
        zIndex: 100,              // appears above everything
      }}
    >
      💬
    </a>
  );
}
