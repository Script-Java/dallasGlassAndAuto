import Image from "next/image";
import img1 from "../assets/img/cards/1.jpg";
import img2 from "../assets/img/cards/2.jpg";
import img3 from "../assets/img/cards/3.jpg";
import img4 from "../assets/img/cards/4.jpg";
import img5 from "../assets/img/img1.jpg";
import img6 from "../assets/img/img10.jpg";
import img7 from "../assets/img/13.jpg";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const slides = [
  {
    image: img1,
    title: "Mobile Glass Techs – Ready to Dispatch",
    description:
      "Cracked windshields and shattered windows are no match for Dallas Glass and Auto. With over 21 years of experience, our technicians deliver fast, professional, and high-quality repairs using top-tier materials and tools—getting you back on the road safely and quickly.",
  },
  {
    image: img2,
    title: "Auto Glass Experts",
    description:
      "From sleek shower enclosures to modern mirrors and tabletops, our custom residential glass services are designed to enhance your home’s style and functionality. We measure, cut, and install with precision to bring your vision to life.",
  },
  {
    image: img3,
    title: "Residential Glass Repair & Installation",
    description:
      "Accidents and weather don’t wait—and neither do we. Our mobile glass experts provide emergency repairs across Dallas, ensuring your vehicle or home is secure again with minimal disruption and zero hassle.",
  },
];

const Card = () => {
  return (
    <section className="w-full text-black">
<section className="w-full bg-base-100 py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
    {/* Text Section */}
    <div className="space-y-6 flex flex-col justify-between">
      <div>
        <h1 className="text-5xl font-extrabold text-primary">
          Crystal Clear Solutions
        </h1>
        <h2 className="text-2xl my-8 font-medium">
          for Your Dallas Glass Repair Needs
        </h2>
        <div className="w-16 h-1 bg-primary my-4"></div>
        <p className="text-base-content">
          At Dallas Glass & Auto, we are dedicated to delivering exceptional
          glass repair and replacement services at the most competitive
          prices. Our skilled technicians provide timely, professional
          service, offering customized solutions to meet both your auto and
          residential glass repair needs. Whether you're dealing with a
          cracked windshield, a broken window, or require a full glass
          replacement, we are equipped to handle it all. We understand how
          disruptive glass damage can be, which is why we strive to minimize
          any inconvenience by offering fast, reliable, and efficient
          services. With our convenient mobile services, we can even come
          directly to your home or business for added ease and comfort.
        </p>
        <p className="text-base-content">
          With more than 21 years of experience, we understand the
          importance of precision, reliability, and using top-quality
          materials. We take pride in using only the highest-quality glass,
          ensuring durability, safety, and crystal-clear results in every
          repair and replacement. Our expert team is trained to handle all
          types of glass, from auto glass repairs to custom residential
          solutions, ensuring that each job meets the highest standards.
          Whether you require auto glass repair, windshield replacement, or
          residential window services, we are here to ensure your glass
          needs are met with the utmost care and expertise. At Dallas Glass
          & Auto, we’re committed to providing lasting results and customer
          satisfaction with every service we provide.
        </p>
      </div>
      <p className="text-xl font-semibold">
        Call Now! – <Link href={'tel:9729007194'}><span className="text-primary">(972) 900-7194</span></Link>
      </p>
    </div>

    {/* Image Section */}
    <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full rounded-xl overflow-hidden shadow-lg">
      <Image
        src={img3}
        alt="Glass repair in action"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
</section>

<section className="w-full bg-base-100  px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch gap-10">
    {/* Image Section */}
    <div className="w-full h-[400px] md:h-auto relative rounded-xl overflow-hidden shadow-lg">
      <Image
        src={img7}
        alt="Glass repair in action"
        fill
        className="object-cover w-full h-full"
      />
    </div>

    {/* Text Section */}
    <div className="w-full space-y-6 self-center">
      <h1 className="text-4xl font-extrabold text-primary">
        Why Choose a Professional Dallas Auto Glass Repair Service?
      </h1>
      <div className="w-16 h-1 bg-primary"></div>
      <p className="text-base-content">
        Glass plays a crucial role in both home fixtures and automobile aesthetics, enhancing the appearance, safety, and durability of your property and vehicle. Whether in your living room, kitchen, bathroom, or office, residential glass adds elegance, while automobile glass gives your vehicle a sleek, polished look.
      </p>
      <p className="text-base-content">
        However, without proper maintenance, glass can develop scratches, cracks, and chips, compromising both safety and appearance. That’s why choosing a professional auto glass repair service is essential.
      </p>
      <p className="text-base-content">
        At Dallas Glass & Auto, our expert technicians provide:
        <br />
        • Precision auto glass repair and windshield replacement<br />
        • High-quality, durable glass for vehicles and homes<br />
        • Fast service with long-lasting results
      </p>
      <p className="text-base-content">
        Don’t let damaged glass affect your safety and style—trust Dallas Glass & Auto for expert glass solutions. Call us today for a free quote!
      </p>

      <p className="text-xl font-semibold">
        Call Now! –{" "}
        <span className="text-primary">
          <Link href={"tel:+19729007194"}>(972) 900-7194</Link>
        </span>
      </p>
    </div>
  </div>
</section>

      <section className="w-full bg-base-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Text Section */}
          <div className="space-y-6 md:pr-10">
            <h2 className="text-4xl font-extrabold text-primary pt-4">
              Why Choose Dallas Glass and Auto?
            </h2>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-base-content">
              When it comes to{" "}
              <strong>auto and residential glass repair</strong>, Dallas Glass
              and Auto is the trusted choice in{" "}
              <strong>Dallas and surrounding areas</strong>. Here’s why:
            </p>
            <ul className="space-y-3 text-base text-base-content">
              {[
                "Free Mobile Service & Emergency Availability – We work around your schedule and provide on-call service for urgent repairs.",
                "Fast & Efficient Repairs – Our expert technicians deliver quick, high-quality service without unnecessary delays.",
                "Exceptional Workmanship & Experience – With years of expertise in glass repair and replacement, we ensure top-tier craftsmanship.",
                "Certified & Licensed Technicians – Our trained professionals understand customer needs and deliver precision service.",
                "Affordable Custom Glass Installations – We offer customized glass solutions at reasonable prices.",
                "High-Quality, Warranted Glass Materials – We use premium glass that meets industry standards and enhances durability.",
                "Flexible Payment Options – No insurance or a high deductible? We provide hassle-free solutions to make window replacement affordable.",
                "Customer-First Approach – We are known for providing the best customer service in Texas, ensuring a stress-free experience.",
                "Eco-Friendly Disposal – We follow environmentally responsible practices when disposing of old or damaged glass.",
                "Same-Day Appointments – Get back on the road faster with fast scheduling and efficient turnaround times.",

              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image & Description */}
          <div className="space-y-6">
            <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={img4}
                alt="Windshield repair service"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-base-content space-y-4">
              <p>
                Living in <strong>Dallas</strong> is easier than ever when it
                comes to <strong>glass repairs</strong> for your{" "}
                <strong>home, automobile, or doors</strong>. At{" "}
                <strong>Dallas Glass and Auto</strong>, we are the{" "}
                <strong>go-to experts</strong> for high-quality glass
                maintenance and repair, using the{" "}
                <strong>
                  latest technology and advanced repair techniques
                </strong>
                .
              </p>
              <p>
                For <strong>automotive glass repair</strong>, we utilize{" "}
                <strong>
                  state-of-the-art equipment and industry-leading resins
                </strong>{" "}
                to restore <strong>cracked or chipped windshields</strong>{" "}
                without unnecessary replacements. Our{" "}
                <strong>expert technicians</strong> focus on{" "}
                <strong>quick, effective, and long-lasting repairs</strong>
                —often completing jobs in <strong>under an hour</strong>.
              </p>
              <p>
                Plus, <strong>no insurance? No problem!</strong> We help
                customers save money by prioritizing{" "}
                <strong>repairs over replacements</strong> whenever possible.
              </p>
              <p className="font-semibold">
                For{" "}
                <strong>
                  fast, affordable, and expert glass repair services in Dallas
                </strong>
                , trust <strong>Dallas Glass and Auto</strong> to get the job
                done right.{" "}
                <span className="text-primary">
                  Call today for a free estimate!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-base-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="w-full h-[800px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={img2}
              alt="Glass service truck"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-base-content">
            <h2 className="text-4xl font-bold text-primary">
              Services Offered by Dallas Glass and Auto
            </h2>
            <div className="w-20 h-1 bg-primary mb-4"></div>

            <p>
              At <strong>Dallas Glass and Auto</strong>, we specialize in more
              than just <strong>automotive glass repair and replacement</strong>
              —we also provide <strong>residential glass solutions</strong> to
              keep your home looking its best.
            </p>

            <div>
              <h3 className="text-xl font-bold mt-6">Auto Glass Services</h3>
              <ul className="list-disc list-inside pl-2 space-y-1">
                <li>
                  <strong>Windshield repair and replacement</strong>
                </li>
                <li>
                  <strong>Car window and side glass replacement</strong>
                </li>
                <li>
                  <strong>Back windshield and quarter glass repair</strong>
                </li>
                <li>
                  <strong>Mobile auto glass service for convenience</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mt-6">
                Residential Glass Services
              </h3>
              <p>
                Our <strong>residential glass specialists</strong> handle
                everything from{" "}
                <strong>minor repairs to full glass replacements</strong> for:
              </p>
              <ul className="list-disc list-inside pl-2 space-y-1">
                <li>
                  <strong>Skylights and storm doors</strong>
                </li>
                <li>
                  <strong>Glass tabletops and cabinet glass</strong>
                </li>
                <li>
                  <strong>Closet doors and shower enclosures</strong>
                </li>
                <li>
                  <strong>Bathroom and sink mirrors</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mt-6">
                Eco-Friendly Glass Repair
              </h3>
              <p>
                Repairing glass instead of replacing it not only{" "}
                <strong>saves money</strong> but also{" "}
                <strong>reduces environmental waste</strong>. Since glass takes{" "}
                <strong>millions of years to decompose</strong>, choosing{" "}
                <strong>repair over replacement</strong> helps preserve
                resources and minimizes landfill waste.
              </p>
              <p>
                At <strong>Dallas Glass and Auto</strong>, we are committed to
                providing{" "}
                <strong>
                  fast, reliable, and environmentally responsible glass
                  solutions
                </strong>{" "}
                for <strong>both vehicles and homes</strong>.
              </p>
              <p className="font-semibold">
                Call today to schedule your auto or residential glass service in
                Dallas!
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Card;
