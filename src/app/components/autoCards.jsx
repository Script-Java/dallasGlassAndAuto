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
    image: img6,
    title: "Fleet & Commercial Auto Glass Services",
    description: `Businesses that depend on company vehicles require fast, dependable auto glass repairs to keep their fleet running smoothly. At Dallas Glass & Auto, we specialize in fleet and commercial auto glass services, offering expert solutions to ensure your trucks, vans, and service vehicles remain road-ready and operational. We understand the importance of maintaining your fleet’s efficiency, which is why we provide quick and reliable repairs that help reduce downtime and keep your business running without unnecessary interruptions.

Our fleet auto glass services include windshield repair and replacement for trucks and vans, side window and mirror replacements for commercial vehicles, and on-site auto glass service to minimize downtime and avoid disruptions to your business operations. Our team is equipped to handle large-scale projects, providing seamless and efficient service whether you have a few vehicles or a large fleet that needs attention. We also offer discounted fleet pricing for businesses and dealerships, delivering high-quality repairs at competitive rates to help you save on costs while ensuring your vehicles remain in optimal condition.

At Dallas Glass & Auto, we pride ourselves on offering flexible scheduling, mobile service, and a commitment to getting your vehicles back on the road as quickly as possible. Whether it’s routine maintenance or emergency glass repairs, we’re here to help your fleet stay operational and safe.`,
  },
  {
    image: img5,
    title: "Windshield Chip & Crack Repair – Stop Damage Before It Spreads",
    description: `A small chip or crack in your windshield can quickly escalate into a much larger problem, resulting in expensive replacements. At Dallas Glass & Auto, we offer fast, professional windshield chip repairs to stop further damage and restore both the clarity and strength of your windshield.

Why Fix a Windshield Chip Right Away?

• Saves money – Repairing a chip is far more cost-effective than a full windshield replacement.
• Prevents spreading cracks – Temperature fluctuations and road vibrations can cause chips to spread.
• Maintains windshield strength – A damaged windshield is weaker and more vulnerable in accidents.
• Quick service – Most chip repairs take less than 30 minutes.

Acting early prevents the need for full replacements. Let us help you preserve your windshield's integrity with fast, reliable chip repair services.`,
  },
  {
    image: img3,
    title: "Side Window, Back Glass, and Quarter Glass Replacement",
    description: `A broken side window, rear windshield, or quarter glass leaves your vehicle exposed to theft, weather damage, and safety risks. At Dallas Glass & Auto, our technicians replace all types of glass using high-quality tempered and laminated glass for durability and safety.

We specialize in:
• Side window replacements (driver/passenger)
• Rear windshield installations with OEM-quality glass
• Quarter glass repair and replacement

We also offer emergency repair services for urgent situations. Whether it’s a sudden break or scheduled service, we’ll restore your vehicle’s integrity quickly and professionally.`,
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

<div className="w-full bg-base-100 py-20 px-4">
  <div className="max-w-7xl mx-auto grid gap-20">
    {slides.map((slide, i) => (
      <div
        key={i}
        className={`flex flex-col md:flex-row ${
          i % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-stretch gap-10`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {slide.title}
          </h2>
          <p className="text-md md:text-lg text-base-content whitespace-pre-line">
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
