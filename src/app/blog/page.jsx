import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { getSortedPostsData } from "@/lib/markdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/img/blog1.jpg"; // Import the static image

export default function Blog() {
    const posts = getSortedPostsData();

    // Check if posts are properly fetched
    if (!posts || posts.length === 0) {
        console.error("No posts found");
        return <p className="text-center text-xl">No blogs available at the moment.</p>;
    }

    return (
        <div className="">
            <Navbar></Navbar>
                <div className="relative w-full h-[400px]">
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 z-10" />
            
                  {/* Static Background Image */}
                  <Image
                    src={img1}
                    alt="Hero Background"
                    fill
                    className="object-cover z-0"
                    priority
                  />
            
                  {/* Title in the center */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl uppercase font-bold">Dallas Glass Blog</h1>
                  </div>
                </div>
            <h3 className="text-5xl lg:text-6xl uppercase text-center p-4 my-20 font-bold">
                Helpful Articles
            </h3>

            <div className="grid my-40 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                        <figure>
                            <Image
                                src={post.image || "/assets/tehran.jpg"}
                                alt={post.title || "blog post image"}
                                width={400} // Specify image width
                                height={250} // Specify image height
                                layout="responsive" // Ensure responsiveness
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.title || "Untitled Post"}</h2>
                            <p>{post.description || "No description available."}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" href={`/blog/${post.id}`}>
                                    Read
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}
