import img1 from "../assets/img/badge.png";
import Image from "next/image";

export default function Areas() {
  return (
<section className="bg-primary mt-10 text-black py-10">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">

    {/* Right Column */}
    <div className="flex flex-col justify-between">
      <div className="max-w-[640px]">
        <h2 className="text-3xl font-bold mb-4">Greater Dallas Mobile Service</h2>
        <div className="w-16 h-[2px] bg-black mb-6"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left mt-auto max-w-[640px]">
        {[
          "Dallas", "Plano", "Frisco", "McKinney", "Celina", "Prosper", "The Colony", "Allen",
          "Lewisville", "Little Elm", "Coppell", "Flower Mound", "Grapevine", "South Lake", "Addison", "Farmers Branch",
          "Richardson", "Garland", "Sachse", "Wylie", "Rock Wall", "Mesquite", "Highland Park", "University Park",
          "Irving", "Duncanville", "Desoto", "Lancaster", "Carrollton", "Rowlett", "Cedar Hill", "Princeton",
        ].map((city, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span className="text-lg text-white">→</span>
            <span>{city}</span>
          </div>
        ))}
      </div>
    </div>

    
    {/* Left Column */}
    <div className="flex flex-col justify-center border-t border-white pt-10 md:border-t-0 md:border-l md:pl-10">
      <div>
        <h2 className="text-3xl font-bold mb-4">Serving Dallas Metroplex with Integrity and Expertise</h2>
        <div className="w-16 h-[2px] bg-black mb-6"></div>
        <p className="text-lg leading-relaxed">
          At Dallas Glass and Auto, our experienced professionals are dedicated to
          providing top-quality auto glass repair and replacement services
          in Dallas. We use the highest-grade glass and state-of-the-art
          tools to ensure every job is completed with precision and to our
          customers' full satisfaction.
          <br /><br />
          At Dallas Glass and Auto, we take pride in delivering expert auto and residential glass services across Dallas and surrounding areas.
        </p>
      </div>
    </div>

  </div>
</section>

  );
}
