export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Layal</h1>
      <nav>
        <ul className="flex space-x-4 rtl:space-x-reverse">
          <li><a href="#" className="text-gray-600 hover:text-black">الرئيسية</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">المنتجات</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">اتصل بنا</a></li>
        </ul>
      </nav>
    </header>
  );
}
