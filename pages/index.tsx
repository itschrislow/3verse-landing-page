import type { NextPage } from "next"
import { useEffect, useRef, useState } from "react"

const Home: NextPage = () => {
  const vidRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (vidRef.current) {
      if (muted) vidRef.current.muted = true
      else vidRef.current.muted = false
    }
  }, [muted])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent p-10 sm:p-5">
      {/* VIDEO */}
      <div className="opacity- absolute -z-10 h-screen w-full bg-black opacity-100">
        <video
          ref={vidRef}
          autoPlay
          loop
          muted
          preload="auto"
          className="h-full w-full object-cover opacity-50"
        >
          {/* NOTE: update video source here */}
          <source src="/static/video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* COPYWRITING */}
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
      {/* VOLUME */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-10 left-10 text-white text-opacity-50"
      >
        {muted ? (
          // MUTED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          // NOT MUTED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default Home
