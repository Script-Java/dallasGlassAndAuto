import Link from "next/link";

export default function HowToCare() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <Link href="/blog/how-to" className="btn bg-primary p-8 md:p-4 text-white hover:bg-black">
        HOW TO CARE FOR A NEWLY REPLACED WINDSHIELD AND BACK GLASS
      </Link>
    </div>
  );
}
