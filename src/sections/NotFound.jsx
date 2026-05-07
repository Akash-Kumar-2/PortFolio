const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black-100 c-space">
      <div className="text-center flex flex-col items-center gap-6">
        <p className="text-8xl font-black text-white/10">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Page Not Found</h1>
        <p className="text-white-600 text-base max-w-sm">
          Looks like this page doesn't exist. Let's get you back on track.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-3 rounded-full bg-black-300 border border-black-300 hover:border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-black-500">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
