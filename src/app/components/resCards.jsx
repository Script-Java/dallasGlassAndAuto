import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";
import img5 from "../assets/img/res/5.jpg";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const slides = [
  {
    image: img1,
    title: "Glass Shower Doors: Long-Lasting Beauty and Durability",
    description:
      "Upgrade your bathroom with sleek, frameless glass shower doors that offer modern aesthetics and long-term durability. Our high-quality glass and expert installation ensure a watertight seal and stunning finish for years to come.",
  },
  {
    image: img4,
    title: "Energy-Efficient Window Replacements",
    description:
      "Reduce energy costs and enhance indoor comfort with our insulated window glass replacements. Designed to block heat in summer and retain warmth in winter, these windows combine performance with beautiful clarity.",
  },
  {
    image: img2,
    title: "Custom Glass Backsplashes & Cabinet Glass",
    description:
      "Bring a unique touch to your kitchen or bath with custom-cut glass backsplashes and cabinet inserts. Easy to clean and visually striking, our designs are tailored to elevate your space with a modern, polished look.",
  },
];

const AutoCard = () => {
  return (
    <section className="w-full">
          <section className="w-full bg-base-100 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Image Section */}
              <div className="w-full h-[700px] relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img3}
                  alt="Classic car front view"
                  fill
                  className="object-cover"
                />
              </div>
    
              {/* Content Section */}
              <div className="space-y-6">
                <h2 className="text-5xl font-extrabold text-primary leading-tight">
                  Auto Glass Repair &<br />
                  Windshield
                  <br />
                  Replacement
                </h2>
                <div className="w-16 h-1 bg-primary"></div>
    
                <p className="text-base-content">
                  At <strong>Dallas Glass and Auto</strong>, we specialize in{" "}
                  <strong>auto glass repair and replacement</strong> for all types
                  of vehicles. Whether you have a{" "}
                  <strong>
                    chipped windshield, broken side window, or shattered rear glass
                  </strong>
                  , our expert technicians provide{" "}
                  <strong>fast, precise, and high-quality repairs</strong> to get
                  you back on the road safely.
                </p>
    
                <p className="text-base-content">
                  When that happens, <strong>Dallas Glass & Auto</strong> is the{" "}
                  <strong>trusted solution</strong> for{" "}
                  <strong>
                    windshield repair, auto glass replacement, and water leak fixes
                  </strong>
                  . Choosing our expert service ensures:
                </p>
    
                <p className="text-base-content">
                  Don’t wait until small cracks become a bigger problem.{" "}
                  <strong>
                    Contact Dallas Glass & Auto today for top-tier auto glass
                    solutions!
                  </strong>
                </p>
    
                <ul className="space-y-3 text-base-content text-lg pt-2">
                  <li>
                    <span className="text-primary font-bold mr-2">1</span> Precision
                    windshield replacement with high-quality glass
                  </li>
                  <li>
                    <span className="text-primary font-bold mr-2">2</span> Water
                    leak repairs to prevent further damage
                  </li>
                  <li>
                    <span className="text-primary font-bold mr-2">3</span> Fast and
                    reliable service to get you back on the road quickly
                  </li>
                  <li>
                    <span className="text-primary font-bold mr-2">4</span> Expert
                    technicians who specialize in auto glass repair and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </section>
    

    
    
          {/* Content Section */}
    
          {/* Services Section */}
          <div className="w-full bg-base-100 py-20 px-4">
            <div className="max-w-7xl mx-auto grid gap-20">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center gap-10`}
                >
                  <div className="w-full md:w-1/2 h-96 relative rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      {slide.title}
                    </h2>
                    <p className="text-md md:text-lg text-white">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

              <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-primary">
            Dallas Residential Glass Services
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-base-content">
            At <strong>Dallas Glass & Auto</strong>, we provide <strong>expert residential glass repair and replacement services</strong> tailored to fit your home’s needs. Whether you're looking for <strong>custom-cut mirrors</strong>, <strong>durable glass table tops</strong>, or <strong>high-quality window replacements</strong>, our skilled technicians ensure <strong>precision craftsmanship</strong> and <strong>long-lasting results</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {[
              "Custom mirrors cut to size for bathrooms, bedrooms, and home decor",
              "Framed mirror selection available from our catalog",
              "Glass table tops cut to pattern or specific dimensions",
              "Tempered sliding glass doors for safety and durability",
              "Storm window and garage door window replacements",
              "Exterior home window glass replacement",
              "Glass shower doors for a modern and elegant touch",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-primary w-5 h-5 mt-1" />
                <span className="text-base-content text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={img5}
            alt="Technician installing home window glass"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
          
        </section>
  );
};

export default AutoCard;
