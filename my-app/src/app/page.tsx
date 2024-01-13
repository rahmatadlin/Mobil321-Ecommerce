import Link from "next/link";

import NavBar from "../components/NavbarComponent";
import Footer from "../components/FooterComp";
import { TopCard } from "@/components/TopCard";
import { CarouselWithContent } from "@/components/Carousel";
import ServerProtectedComponents from "@/components/ServerProtectedComponents";

export default async function Home() {
  return (
    <>
      <ServerProtectedComponents>
        <div className="grid min-h-[140px] w-full place-items-center  rounded-lg p-6 lg:overflow-visible">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
            {/* navbar */}
            <NavBar />
            {/* end of navbar */}

            {/* image home */}
            <CarouselWithContent />
            {/* end image home */}

            <TopCard />
            <section className=" flex justify-center pt-10">
              <Link
                // onClick={handleNavigate}
                href={"/product"}
                className="px-6 py-1 font-sans text-xs font-bold text-center text-neutral-content uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                See All Products
              </Link>
            </section>

            <br />
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </ServerProtectedComponents>
    </>
  );
}
