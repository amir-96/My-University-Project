import Image from "next/image";
import { Inter } from "next/font/google";
import Personnel from "@/components/Personnel/Personnel";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main>
        <Personnel />
      </main>
    </Layout>
  );
}
