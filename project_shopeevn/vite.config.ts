import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Đảm bảo base đúng hoặc chỉ định đường dẫn khác nếu cần
});
