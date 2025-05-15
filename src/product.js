import Footer from "./footer";

export default function Product() {
  return (
    <>
      <section className="p-6 bg-white">
        <div className="max-w-md mx-auto">
          <img 
            src="/images/9E116742-09D9-479E-8386-4696A480515E.png" 
            alt="صورة المنتج" 
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">اسم المنتج</h2>
          <p className="text-gray-600 mb-4">وصف مختصر وجذاب عن المنتج.</p>
          <p className="text-xl font-semibold text-pink-600 mb-4">السعر: 199 ر.س</p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-200">
            أضف للسلة
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
