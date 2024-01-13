import { MtCarousel, MtTypography } from "./MaterialTailwind";

export function CarouselWithContent() {
  return (
    <MtCarousel>
      <div className="relative h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/4">
            <MtTypography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Website Resmi Mobil 321
            </MtTypography>
            <MtTypography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Selamat datang di platform ecommerce eksklusif kami, tempat di
              mana keinginan Anda untuk memiliki mobil impian dapat menjadi
              kenyataan! Dengan bangga mempersembahkan layanan jual beli mobil
              online terbaik, kami menghadirkan pengalaman berbelanja yang mulus
              dan memuaskan bagi para pecinta otomotif..
            </MtTypography>
            <div className="flex justify-center gap-2"></div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <MtTypography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Website Resmi Mobil 321
            </MtTypography>
            <MtTypography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Selamat datang di platform ecommerce eksklusif kami, tempat di
              mana keinginan Anda untuk memiliki mobil impian dapat menjadi
              kenyataan! Dengan bangga mempersembahkan layanan jual beli mobil
              online terbaik, kami menghadirkan pengalaman berbelanja yang mulus
              dan memuaskan bagi para pecinta otomotif..
            </MtTypography>
            <div className="flex gap-2"></div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/40">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <MtTypography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Website Resmi Mobil 321
            </MtTypography>
            <MtTypography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Selamat datang di platform ecommerce eksklusif kami, tempat di
              mana keinginan Anda untuk memiliki mobil impian dapat menjadi
              kenyataan! Dengan bangga mempersembahkan layanan jual beli mobil
              online terbaik, kami menghadirkan pengalaman berbelanja yang mulus
              dan memuaskan bagi para pecinta otomotif..
            </MtTypography>
            <div className="flex gap-2">
 
            </div>
          </div>
        </div>
      </div>
    </MtCarousel>
  );
}
