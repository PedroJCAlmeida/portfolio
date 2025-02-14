const Technologies = () => {
    return (
      <section className="w-full py-16 bg-[#121212] text-[#EAEAEA]">
        <div className="max-w-7xl w-full mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#4A90E2] mb-8 text-center">Technologies</h2>
          <p className="mb-8 text-center">Here are some of the technologies I work with:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">React</div>
            <div className="bg-gray-700 p-6 rounded-lg">Tailwind CSS</div>
            <div className="bg-gray-700 p-6 rounded-lg">JavaScript</div>
            <div className="bg-gray-700 p-6 rounded-lg">Node.js</div>
            <div className="bg-gray-700 p-6 rounded-lg">Java</div>
            <div className="bg-gray-700 p-6 rounded-lg">C#</div>
            <div className="bg-gray-700 p-6 rounded-lg">SQL</div>
            <div className="bg-gray-700 p-6 rounded-lg">Pyhon</div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Technologies;
  