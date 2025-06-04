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
    title: "Mirror Replacement & Custom Glass Solutions",
    description: `Mirror Replacement and Installation Services

Mirrors are an essential element in enhancing both the aesthetic appeal and functionality of any space, but scratches, cracks, or outdated designs can detract from their beauty and purpose. Whether you're looking to install a custom mirror or replace an old, broken one, Dallas Glass & Auto provides precision-cut mirrors tailored to your specific needs. Our team ensures that each mirror is carefully designed and installed to enhance the look and feel of your home or business.

Our mirror services include custom-cut mirrors for bathrooms, living rooms, and gyms, giving you the flexibility to choose the perfect size and style for your space. Whether you prefer a traditional framed mirror or a sleek, frameless design, we offer a wide range of options to match your décor. For those looking to add a touch of elegance, we also specialize in beveled-edge mirrors, which provide a sophisticated, polished look that elevates any room. Additionally, we offer wall-to-wall mirror installations, perfect for home gyms, dance studios, or other areas where a larger mirror space is needed for functionality or visual appeal.

At Dallas Glass & Auto, we focus on delivering mirrors that are not only functional but also enhance your space’s overall aesthetic. Our skilled technicians ensure that each installation is done with precision and care, providing a flawless finish that lasts. Whether you're upgrading your home, business, or creating a new design feature, we are here to help you achieve your vision with high-quality mirror solutions.`
  },
  {
    image: img4,
    title: "Glass Shelving & Decorative Glass Installations",
    description: `Custom glass shelving and decorative glass elements bring a modern and elegant touch to any home, enhancing both the visual appeal and functionality of your space. Whether you're looking for sleek glass display shelves, stylish cabinet inserts, or decorative glass accents, Dallas Glass & Auto provides custom-cut solutions tailored to meet the unique needs of your home. Our expert team works closely with you to create glass features that complement your existing décor and provide long-lasting beauty.

Our custom glass options include shelving for kitchens, bathrooms, and offices, offering a clean, contemporary look while maintaining durability and practicality. We also specialize in decorative cabinet glass, available in frosted or textured finishes, which can add sophistication and privacy to your cabinets. For homes with open-concept designs, we offer glass partitions that divide spaces without compromising on light or the sense of openness. To ensure safety and longevity, we use tempered safety glass, which is not only durable but also resistant to breakage, making it an ideal choice for high-traffic areas or spaces that require extra protection.

At Dallas Glass & Auto, we pride ourselves on delivering high-quality, custom glass solutions that elevate your home’s design while offering practicality and strength. Whether you're updating your living space with elegant shelving or adding a touch of luxury with decorative glass elements, we’re here to bring your vision to life with precision and craftsmanship.`
  },
  {
    image: img2,
    title: "Home Glass Repairs – Fast & Reliable Service",
    description: `Damaged windows, doors, or mirrors not only affect your home’s appearance but can also compromise its security and energy efficiency. At Dallas Glass & Auto, we understand the importance of a safe, secure, and visually appealing home, which is why we offer quick and professional glass repairs to restore the integrity of your property. Our expert technicians are equipped to handle a wide range of glass issues, ensuring that your home is protected and looks its best.

We specialize in repairing cracked or shattered window glass, providing reliable and efficient solutions to restore your windows to their original condition. If your double-pane windows have become foggy or filled with moisture, we offer restoration services to clear them up and improve energy efficiency. Our team also handles sliding glass door and patio door glass repairs, ensuring that these high-traffic areas remain functional and secure. Additionally, we offer emergency glass repair services for accidental damage, providing fast, responsive repairs to prevent further issues and secure your home as quickly as possible.

At Dallas Glass & Auto, we are committed to providing exceptional glass repair services that enhance both the safety and beauty of your home. Whether it's a simple window crack or a more complex repair, our team ensures that every job is done with precision and care. Let us help you restore your home’s glass features with our reliable and efficient repair services.`
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
    
<div className="w-full bg-base-100 py-20 px-4">
  <div className="max-w-7xl mx-auto grid gap-20">
    {slides.map((slide, i) => (
      <div
        key={i}
        className={`flex flex-col md:flex-row ${
          i % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-stretch gap-10`}
      >
        {/* Image container with full height */}
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

        {/* Text container */}
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
