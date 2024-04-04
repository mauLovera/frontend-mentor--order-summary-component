import Link from "next/link"

import HeroIcon from "./icons/HeroIcon"
import MusicIcon from "./icons/MusicIcon"

export default function OrderSummary() {
  return (
    <article className="bg-neutral-very-pale-blue max-w-[450px] overflow-hidden rounded-[20px] shadow-neutral-desaturated-blue/20 shadow-3xl">
      <HeroIcon />
      <section className="p-12 text-center">
        <header className="mb-12">
          <h1 className="text-neutral-dark-blue mb-4 text-[28px] font-black">
            Order Summary
          </h1>
          <p className="text-neutral-desaturated-blue leading-[1.6]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </header>
        <section className="mb-14 flex items-center justify-between px-6">
          <div className="flex items-center gap-5 h-48px">
            <MusicIcon />
            <div className="flex flex-col items-start justify-between h-full">
              <span className="text-neutral-dark-blue font-black">
                Annual Plan
              </span>
              <span className="text-neutral-desaturated-blue">$59.99/year</span>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-primary-bright-blue hover:text-primary-lavender text-sm font-bold tracking-[calc(2_*_0.01em)] underline transition-all hover:no-underline"
          >
            Change
          </Link>
        </section>
        <button className="bg-primary-bright-blue text-neutral-very-pale-blue shadow-primary-lavender/30 mb-7 flex w-full items-center justify-center rounded-[10px] py-[14px] text-[15px] font-bold tracking-[calc(2_*_0.01em)] shadow-xl">
          Proceed to Payment
        </button>
        <button className="text-neutral-desaturated-blue text-[15px] font-bold transition-colors hover:text-neutral-dark-blue">
          Cancel Order
        </button>
      </section>
    </article>
  )
}
