import Image from "next/image";
import img1 from "../assets/img/tools/1.jpg";
import img2 from "../assets/img/tools/2.jpg";
import img3 from "../assets/img/tools/3.jpg";
import img4 from "../assets/img/tools/4.jpg";
import img5 from "../assets/img/tools/5.jpg";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from 'react-icons/fa';

const slides = [
  {
    image: img1,
    title: "Cutting-Edge Technology for Precision Glass & Window Repair",
    description: `At Dallas Glass & Auto, we provide top-tier auto and residential glass repair and replacement using the latest industry tools and techniques. Serving Dallas and surrounding areas, we ensure that our clients receive high-quality glass solutions with unmatched precision and efficiency.

Advanced Tools for High-Quality Glass Services
We utilize the best-in-class glass tools to complete your auto or home glass project correctly the first time. Our technicians work with:

Industry-leading hand and power cut-out tools from top manufacturers
High-performance repair and replacement blades for precision work
A full arsenal of glass adhesives, including durable glues, safe urethanes, and primers
Specialized tools for every vehicle and home glass repair need
Trained & Certified Glass Specialists
Our friendly, fast, and efficient technicians are certified experts in glass installation, repair, and replacement. Whether you're dealing with auto windshield damage, residential window issues, or custom glass installations, we deliver exceptional results with cutting-edge technology and premium materials.

Choose Dallas Glass & Auto for professional, high-quality glass services. Contact us today!`
  },
  {
    image: img5,
    title: "Advanced Safety Glass Solutions for Auto & Residential Use",
    description: `At Dallas Glass & Auto, safety and durability are our top priorities with every glass installation. We specialize in advanced safety glass solutions that provide enhanced protection for vehicles, homes, and businesses. Our high-quality glass options are designed to ensure long-lasting security, impact resistance, and peace of mind, helping to safeguard your property from potential threats or damage.

Our safety glass options include:

Tempered Glass – Engineered to withstand high impact, tempered glass is designed to break into small, safe pieces, reducing the risk of injury in the event of an accident.
Laminated Glass – Ideal for windshields and security applications, laminated glass prevents shattering upon impact, maintaining the integrity of your glass and offering extra protection.
Wired & Fire-Resistant Glass – Perfect for both commercial and residential properties, this glass enhances fire safety by withstanding extreme temperatures without breaking or cracking.
Impact-Resistant Storm Glass – Designed to protect homes from extreme weather conditions, such as hurricanes and high winds, this glass keeps your property secure during severe storms and weather events.
Using cutting-edge installation techniques and high-performance sealants, we ensure that our safety glass solutions provide maximum protection without compromising on clarity or aesthetics. At Dallas Glass & Auto, we are committed to delivering products that not only meet stringent safety standards but also enhance the visual appeal and functionality of your space. `
  },
  {
    image: img2,
    title: "Precision Laser Glass Cutting Technology",
    description: `At Dallas Glass & Auto, we leverage precision laser glass cutting technology to provide perfectly fitted glass solutions for vehicles, homes, and commercial applications. Our advanced laser-guided system allows for flawless customization, enabling us to craft custom mirrors, tabletops, shower doors, and automotive glass with exceptional accuracy. This cutting-edge technology ensures that each piece is tailored to meet your specific needs, delivering a perfect fit every time. By using this high-tech approach, we can create glass solutions that not only enhance the aesthetics of your space but also ensure durability and functionality.

Why Laser Cutting Enhances Quality:

Perfect edge finishing for a seamless, polished appearance that enhances the overall look of your glass installations.
Higher precision compared to traditional cutting methods, ensuring every cut is made with exact measurements and smooth edges.
No stress fractures, providing long-term durability and strength, reducing the risk of cracking or breaking over time.
Custom shaping for specialty glass projects, allowing us to create one-of-a-kind designs that meet your unique requirements.
Our state-of-the-art glass cutting tools enable us to craft and install glass solutions with unmatched precision and speed, ensuring that your custom glass fits perfectly every time. Whether you're updating the look of your home with a new custom mirror, designing a modern shower door, or repairing your vehicle's glass, we deliver high-quality, tailor-made glass solutions that elevate your space and enhance its functionality. `
   },
];

const ToolsCard = () => {
  return (
    <section className="w-full">
          <section className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Image Section */}
    <div className="w-full h-[700px] relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={img4}
        alt="Classic car front view"
        fill
        className="object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="space-y-6">
      <h2 className="text-5xl font-extrabold text-primary leading-tight">
        Glass Repair Tools & Technology
      </h2>
      <div className="w-16 h-1 bg-primary"></div>

      <p className="text-base-content">
        At Dallas Glass and Auto, we use state-of-the-art glass repair tools to ensure precision, efficiency, and long-lasting results. Our advanced technology allows us to deliver flawless windshield replacements, window repairs, and commercial glass installations with unmatched accuracy.
      </p>

      <p className="text-base-content">
        We utilize the latest advancements in glass repair to provide seamless, long-lasting solutions, including:
      </p>

      <ul className="space-y-3 text-base-content text-lg pt-2">
        <li>
          <span className="text-primary font-bold mr-2">1</span>
          Laser Measuring Systems – Ensures precise glass cutting and fitting.
        </li>
        <li>
          <span className="text-primary font-bold mr-2">2</span>
          High-Power Suction Lifters – Handles large and heavy glass panels safely.
        </li>
        <li>
          <span className="text-primary font-bold mr-2">3</span>
          UV Bonding Technology – Provides seamless, durable repairs.
        </li>
        <li>
          <span className="text-primary font-bold mr-2">4</span>
          ADAS Calibration Equipment – Ensures accurate windshield alignment for modern vehicles.
        </li>
        <li>
          <span className="text-primary font-bold mr-2">5</span>
          Automated Glass Cutting Machines – Speeds up production and enhances accuracy.
        </li>
      </ul>

      <p className="text-base-content">
        By combining modern technology with expert craftsmanship, we deliver exceptional glass repair and replacement services across Dallas and surrounding areas. Call today to learn more about our tools or to schedule your service!
      </p>
    </div>
  </div>
</section>


<section className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Card 1 */}
      <div className="border border-primary rounded-lg p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2">Glass Tabletops & Decorative Glass</h3>
        <p className="text-base-content text-sm">
          Enhance your space with <strong>custom glass tabletops, glass walls, and ceiling-to-floor windows</strong>. 
          Whether you're upgrading your <strong>home or office</strong>, our <strong>high-quality decorative glass solutions</strong> 
          add elegance and functionality to any setting.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border border-primary rounded-lg p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2">Home Restrooms, Bathroom Windows & Doors</h3>
        <p className="text-base-content text-sm">
          From <strong>bathroom windows to closet doors</strong>, we provide 
          <strong> expert glass installation and repair</strong> for all areas of your home. Upgrade your 
          <strong> boudoir, bedroom, or bathroom</strong> with <strong>custom-cut mirrors and sleek glass doors</strong>.
        </p>
      </div>

      {/* Card 3 */}
      <div className="border border-primary rounded-lg p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2">Residential Gym & Dance Studio Glass</h3>
        <p className="text-base-content text-sm">
          Create the perfect fitness or dance space with <strong>high-quality gym mirrors</strong> 
          and <strong>hallway mirrors</strong>. Our durable, <strong>custom-sized glass solutions</strong> bring 
          light and openness to <strong>home gyms, studios, and entryways</strong>.
        </p>
      </div>

      {/* Card 4 */}
      <div className="border border-primary rounded-lg p-6 shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2">Storm Doors & Full-Length Mirrors</h3>
        <p className="text-base-content text-sm">
          Protect your home with <strong>sturdy storm doors</strong> and 
          <strong> enhance your space with full-length mirrors</strong>. We provide 
          <strong> professional installation and replacement services</strong> for homes throughout 
          <strong> Dallas and surrounding areas</strong>.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Auto & Home Glass Services by Dallas Glass & Auto
        </h2>
        <div className="w-24 h-[2px] text-primary mx-auto mb-10"></div>

        {/* Grid List */}
        <div className="grid md:grid-cols-3 gap-6 text-left text-sm text-base-content">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Home Window Replacement & Repair</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Home Office Windows & Partitions</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Residential Doorways & Glass Enclosures</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Welcome Area & Entryway Glass Installations</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Storm Door Glass & Weather-Resistant Solutions</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Custom Glass Tabletops & Decorative Glass</span>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Tempered, Wired, & Security Glass for Safety & Protection</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-primary mt-1" />
              <span>Flat Glass, Float Glass, & Specialty Home Glass Designs</span>
            </div>
          </div>
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
        {/* Image Container */}
        <div className="w-full md:w-1/2 relative h-full rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
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
            src={img3}
            alt="Technician installing home window glass"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>

    <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro Paragraph */}
        <p className="text-base-content text-sm md:text-base mb-10 max-w-4xl">
          When it comes to <strong>auto and residential glass repair in Dallas and surrounding areas</strong>, 
          <strong> Dallas Glass & Auto is the trusted choice</strong> for high-quality service, expert craftsmanship, 
          and customer satisfaction.
        </p>

        {/* Two-column Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-sm text-base-content">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-5 h-5 min-w-[1.25rem] mt-1" />
              <div>
                <strong className="block mb-1">Fast, Friendly, and Reliable Service</strong>
                <p>
                  Glass damage can happen unexpectedly. That’s why our team is dispatched quickly, 
                  working around your schedule to provide convenient, same-day service when you need it most.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-5 h-5 min-w-[1.25rem] mt-1" />
              <div>
                <strong className="block mb-1">Certified & Highly-Trained Glass Installers</strong>
                <p>
                  Our expert glass technicians are not only certified and experienced, but they also use the 
                  latest industry tools to ensure precise and efficient glass repairs and replacements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-5 h-5 min-w-[1.25rem] mt-1" />
              <div>
                <strong className="block mb-1">Ongoing Glass Repair Training & Quality Assurance</strong>
                <p>
                  We invest in yearly training and updates to stay ahead with the latest windshield repair techniques, 
                  ensuring that your auto glass is leak-free and meets the highest safety standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-5 h-5 min-w-[1.25rem] mt-1" />
              <div>
                <strong className="block mb-1">100% Workmanship Guarantee</strong>
                <p>
                  All our glass repair and replacement services meet and exceed industry standards and 
                  come backed by a lifetime workmanship guarantee for peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-5 h-5 min-w-[1.25rem] mt-1" />
              <div>
                <strong className="block mb-1">Industry-Leading Glass Technology & OEM Materials</strong>
                <p>
                  We use high-quality OEM glass parts for cars, trucks, and residential windows, ensuring 
                  the best fit and durability. With a wide selection of automotive and home glass options, 
                  we guarantee top-tier materials and craftsmanship for every job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          
        </section>
  );
};

export default ToolsCard;
