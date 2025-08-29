function NoData({ text, buttonText }) {
  return (
    <div className="bg-white p-5 rounded-2xl gap-5 my-5">
      <img src="/no data.jpg" alt="no requests" className="mx-auto w-1/4" />
      <div className="flex md:flex-row-reverse flex-col justify-center items-center gap-5">
        <h3 className="text-center text-2xl font-semibold text-primaryBg">
          {text}
        </h3>
        {buttonText && (
          <Link
            to="/services"
            className="px-5 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
          >
            <span className="ml-2">←</span> {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
export default NoData;
