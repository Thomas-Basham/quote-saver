import Head from "next/head";
import QuoteGenerator from "@/components/QuoteGenerator";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Quote Generator</title>
        <meta
          name="description"
          content="Generate and save your favorite quotes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuoteGenerator />
    </div>
  );
}
