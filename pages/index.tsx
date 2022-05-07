import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent p-10 sm:p-5">
      <div className="opacity- absolute -z-10 h-screen w-full bg-black opacity-100">
        <video autoPlay loop className="h-full w-full object-cover opacity-50">
          {/* NOTE: update video source here */}
          <source src="/static/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Trusted by developers from over 80 planets
        </h1>
        <h2 className="mt-3 text-xl text-gray-300 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </h2>
        <div className="mt-10 pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Pepperoni
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-emerald-500">
                  100%
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Delivery
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-emerald-500">
                  24/7
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Calories
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-emerald-500">
                  100k
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
