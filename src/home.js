import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <section className="bg-white text-center p-6">
        <img src="/images/9E116742-09D9-479E-8386-4696A480515E.png" alt="صورة رئيسية" className="mx-auto rounded-lg mb-4 w-full max-w-md" />
        <h1 className="text-3xl font-bold mb-2">مرحبا بكم في متجر ليال</h1>
        <p className="text-gray-600">اكتشف أجمل الهدايا والمجوهرات بعناية وأناقة</p>
      </section>

      <Footer />
    </>
  );
}
