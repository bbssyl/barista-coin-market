const FirstChild = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-10 snap-mandatory scroll-smooth overflow-y-auto snap-center bg-indigo-900">
      <img
        src="/images/bg.jpeg"
        alt="bg.jpeg"
        className="absolute h-full w-full opacity-10"
      />
      <article className="w-1/3 relative">
        <h2 className="text-indigo-50 text-7xl text-center">
          Kripto para almanın hızlı, kolay ve güvenli yolu
        </h2>
      </article>
      <article className="w-1/3 relative flex gap-2">
        <input
          className="p-3 text-2xl outline-indigo-400 text-indigo-600 rounded-md w-full placeholder:italic placeholder:text-lg"
          placeholder="E-posta adresini gir"
          type="email"
        />
        <button className="whitespace-nowrap bg-gradient-to-b from-indigo-800 to-indigo-600 p-3 text-3xl text-indigo-50 rounded-md hover:from-indigo-600 hover:to-indigo-800 duration-300">
          Hemen Başla
        </button>
      </article>
    </section>
  );
};

export default FirstChild;
