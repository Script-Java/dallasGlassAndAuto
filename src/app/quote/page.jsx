import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";

export default function QuotePage() {
  return (
    <div className="">
      <Navbar />

      <section className="py-20 my-20 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-primary">Free Glass Quote</h1>
        <p className="text-lg mb-4 text-neutral-content">
          Thank you for considering Dallas Glass and Auto for your auto and residential glass service needs.
        </p>
        <p className="mb-10 text-base-content">
          We proudly deliver reliable, affordable, and mobile glass repair solutions throughout Dallas and surrounding areas. Whether it’s a windshield replacement, home glass repair, or custom installation, our skilled technicians are ready to help.
        </p>

        <div className="bg-base-100 rounded-xl shadow-xl p-8 text-left text-[17px] space-y-6 border border-base-300">
          <p>
            With certified professionals and industry-grade materials, Dallas Glass and Auto ensures expert workmanship and lasting results. Every job is backed by our satisfaction guarantee.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Why Choose Dallas Glass and Auto?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>On-the-Go Repairs:</strong> Our mobile techs come to you for maximum convenience.</li>
              <li><strong>Trusted Quality:</strong> Durable glass that meets or exceeds OEM standards.</li>
              <li><strong>Experienced Team:</strong> Over 21 years of combined auto and residential glass knowledge.</li>
              <li><strong>Customer-Focused:</strong> Personalized service designed around your needs and budget.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Our Services Include:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Windshield and Car Window Replacement</li>
              <li>Home Window Glass Installation and Repair</li>
              <li>Emergency and Same-Day Glass Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">How It Works:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Request Your Quote:</strong> Fill out the quick form below with your details.</li>
              <li><strong>Receive a Fast Callback:</strong> Our team will contact you with your personalized quote.</li>
              <li><strong>Service at Your Door:</strong> We show up on time and complete the job to perfection.</li>
            </ol>
          </div>

          <p className="text-lg font-semibold">
            Ready to get started? Complete the form below and let Dallas Glass and Auto take care of the rest.
          </p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}
