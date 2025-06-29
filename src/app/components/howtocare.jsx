import Link from "next/link";

export default function HowToCare() {
  return (
    <section className="bg-base-100 pt-8 px-6">


        {/* Bottom CTA Button */}
        <div className="mt-4 flex items-center justify-center">
          <Link
            href="/blog/how-to"
            className="btn btn-primary text-white hover:bg-black hover:text-primary"
          >
            HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD AND BACK GLASS
          </Link>
    
      </div>
    </section>
  );
}
