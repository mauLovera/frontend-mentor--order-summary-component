import Link from "next/link"

import HeroIcon from "./icons/HeroIcon"
import MusicIcon from "./icons/MusicIcon"
import Image from "next/image"

export default function OrderSummary() {
  return (
    <article className="max-w-[450px] overflow-hidden rounded-[20px] bg-neutral-very-pale-blue shadow-3xl shadow-neutral-desaturated-blue/20">
      <div className="relative h-[220px] w-full bg-[url('/images/illustration-hero.svg')] bg-cover bg-center" />
      <section className="p-6 pt-10 text-center md:p-12">
        <header className="mb-11">
          <h1 className="mb-4 text-[22px] font-black text-neutral-dark-blue md:text-[28px]">
            Order Summary
          </h1>
          <p className="px-4 leading-[1.6] text-neutral-desaturated-blue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </header>
        <section className="mb-14 flex items-center justify-between px-4">
          <div className="h-48px flex items-center gap-5">
            <MusicIcon />
            <div className="flex h-full flex-col items-start justify-between">
              <span className="font-black text-neutral-dark-blue">
                Annual Plan
              </span>
              <span className="text-neutral-desaturated-blue">$59.99/year</span>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-sm font-bold tracking-[calc(2_*_0.01em)] text-primary-bright-blue underline transition-all hover:text-primary-lavender hover:no-underline"
          >
            Change
          </Link>
        </section>
        <button className="mb-7 flex w-full items-center justify-center rounded-[10px] bg-primary-bright-blue py-[14px] text-[15px] font-bold tracking-[calc(2_*_0.01em)] text-neutral-very-pale-blue shadow-xl shadow-primary-lavender/30 transition-colors hover:bg-primary-lavender">
          Proceed to Payment
        </button>
        <button className="text-[15px] font-bold text-neutral-desaturated-blue transition-colors hover:text-neutral-dark-blue">
          Cancel Order
        </button>
      </section>
    </article>
  )
}
