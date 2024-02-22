import Ema from "../../assets/LogoEma_cmjn.jpg"
import logoAsphalt from "../../assets/logo_svg.png"
import LogoLogiworks from "../../assets/faviconLogo.png"

export default function Testimonials() {
    return (

        <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2 className="mb-2 text-center text-3xl text-gray-800 md:text-4xl uppercase">
            Ce qu&apos;en disent nos clients
          </h2>

          <div className="flex items-center justify-center">
            <div className='bg-[#022a60] w-[15vw] h-[2px] lg:w-[12vw] 2xl:w-[8vw] mt-2 mb-16'></div>
          </div>

          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div
              className="row-span-2 rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl"
            >
              <div className="flex h-full flex-col justify-center space-y-4">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={Ema}
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="md:text-xl">
                  <span className="font-serif">&quot;</span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Ema F.</h6>
                  <span className="text-xs text-gray-500">La Fromagerie d&apos;Ema</span>
                </div>
              </div>
            </div>
      
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={LogoLogiworks}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p >
                  <span className="font-serif">&quot;</span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Rayan C.</h6>
                  <span className="text-xs text-gray-500">Logiworks</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-50 p-8 text-center shadow-2xl">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={logoAsphalt}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">&quot;</span> Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti
                  repudiandae ad doloribus. <span className="font-serif">&quot;</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">Loïc M.</h6>
                  <span className="text-xs text-gray-500">Asphalt Eater</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                                          
    )
}