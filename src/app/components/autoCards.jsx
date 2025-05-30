import Image from "next/image";
import img1 from "../assets/img/auto/1.jpg";
import img2 from "../assets/img/auto/2.jpg";
import img3 from "../assets/img/auto/3.jpg";
import img4 from "../assets/img/auto/4.jpg";
import img5 from "../assets/img/auto/5.jpg";
import img6 from "../assets/img/auto/6.jpg";
import img7 from "../assets/img/auto/7.jpg";
import img8 from "../assets/img/auto/8.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const slides = [
  {
    image: img3,
    title: "Fleet & Commercial Auto Glass Services",
    description:
      "Businesses that depend on company vehicles require fast, dependable auto glass repairs to keep their fleet running smoothly. At Dallas Glass & Auto, we specialize in fleet and commercial auto glass services, offering expert solutions to ensure your trucks, vans, and service vehicles remain road-ready and operational. We understand the importance of maintaining your fleet’s efficiency, which is why we provide quick and reliable repairs that help reduce downtime and keep your business running without unnecessary interruptions.",
  },
  {
    image: img5,
    title: "Windshield Chip & Crack Repair – Stop Damage Before It Spreads",
    description:
      "At Dallas Glass & Auto, we understand how important it is to address windshield damage promptly. Our expert technicians use advanced tools and techniques to repair chips quickly and efficiently, ensuring your windshield remains safe and clear. By acting early, you can avoid the need for costly replacements and keep your vehicle in top condition, all while preserving your safety on the road. Let us help you maintain the integrity of your windshield with our reliable chip repair services.",
  },
  {
    image: img6,
    title: "Side Window, Back Glass, and Quarter Glass Replacement",
    description:
      "A broken side window, rear windshield, or quarter glass leaves your vehicle exposed to theft, weather damage, and potential safety risks. At Dallas Glass & Auto, we understand the urgency of getting your vehicle's glass replaced quickly and efficiently. Our expert auto glass technicians are equipped to handle any glass replacement, ensuring that your vehicle is restored to its original state with high-quality tempered and laminated glass for maximum durability and safety.",
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
              src={img2}
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

          <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-base-content">
            Dallas Glass and Auto Services
          </h2>
          <div className="w-20 h-1 bg-primary"></div>

          <ul className="space-y-4 text-base-content text-lg">
            {["Auto glass repair for chips, cracks, and shattered windows",
              "Windshield replacement and windshield repair for all vehicle types",
              "Lifetime warranty on workmanship for added peace of mind",
              "Approved by major name-brand companies and manufacturers",
              "Car dealerships, body shops, and fleet accounts welcome",
              "Wind, noise, and water leak repairs to prevent further damage",
              "Off-track door window repairs for seamless operation",
              "Door regulator and motor replacement to restore window function"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary min-w-[20px] min-h-[20px] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={img8}
            alt="Classic car interior"
            fill
            className="object-cover"
          />
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
      
    </section>
  );
};

export default AutoCard;
