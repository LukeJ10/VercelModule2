const TeamSection = () => {
    return (
      <div className="bg-gray-200 py-16 flex flex-col">
        <div>
        <h2 className="text-center text-3xl font-bold mb-12 text-black">Our Team</h2>
        </div>
        
        <div className="flex justify-center items-center flex-col gap-10  lg:flex-row md:flex-row">
          <div className="bg-white shadow-lg rounded-lg  pl-7 p-6 max-w-xs text-center text-black">
            <img src='/images/studio.jpg' alt="Years of Experience" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p>
              Our team is comprised of seasoned professionals with years of experience in the gaming industry,
              bringing a wealth of knowledge and expertise to every project.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center text-black">
            <img src='/images/culture.jpg' alt="Flexibility" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
            <p>
              We pride ourselves on our ability to adapt to the ever-changing landscape of the gaming world, 
              ensuring we always stay ahead of the curve.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center text-black">
            <img src='/images/futureproof.jpeg' alt="Diverse Background" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diverse Background</h3>
            <p>
              Our team members come from a variety of cultural and professional backgrounds, 
              fostering a rich environment of creativity and innovation.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamSection;