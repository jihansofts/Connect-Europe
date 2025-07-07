import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModelProvider } from "@/context/ModelContext";
import InputModal from "@/common/InputModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModelProvider>
      <Component {...pageProps} />
      <InputModal />
    </ModelProvider>
  );
}
