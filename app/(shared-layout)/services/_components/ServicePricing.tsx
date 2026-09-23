"use client";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Crown,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    id: "01",
    name: "Starter",
    description:
      "For landing pages, personal websites, and small business websites.",
    price: "₹8K+",
    priceNote: "Starting from",
    features: [
      "Responsive website",
      "Up to 5 pages",
      "Modern UI design",
      "Mobile & tablet optimization",
      "Contact form integration",
      "Basic SEO setup",
    ],
  },
  {
    id: "02",
    name: "Professional",
    description:
      "For businesses and startups that need a modern, dynamic web application.",
    price: "₹20K+",
    priceNote: "Starting from",
    popular: true,
    features: [
      "Everything in Starter",
      "Next.js / React development",
      "Dynamic functionality",
      "API integration",
      "Database integration",
      "Authentication & authorization",
      "Advanced animations",
    ],
  },
  {
    id: "03",
    name: "Custom",
    description:
      "For complex applications, dashboards, SaaS products, and full-stack projects.",
    price: "Let's Talk",
    features: [
      "Custom project architecture",
      "Full-stack development",
      "MERN / Next.js applications",
      "Admin dashboards",
      "Third-party integrations",
      "Scalable backend architecture",
      "Ongoing support",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicePricing() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[#09090b] py-16 sm:py-20 md:py-24 lg:py-28 rounded-2xl mt-4"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />

            <span className="text-xs font-medium text-zinc-400">
              Simple & Transparent Pricing
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Choose the right
            <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              plan for your project
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Every project is different. These packages give you a starting
            point, while custom solutions can be tailored to your exact
            requirements.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 sm:p-6 lg:p-7 ${
                plan.popular
                  ? "border-blue-500/30 bg-[#11141b]"
                  : "border-white/8 bg-[#111113]"
              }`}
            >
              {/* Popular glow */}
              {plan.popular && (
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
              )}

              {/* Top line */}
              <div
                className={`absolute left-0 right-0 top-0 h-px ${
                  plan.popular
                    ? "bg-linear-to-r from-transparent via-blue-500 to-transparent"
                    : "bg-linear-to-r from-transparent via-white/10 to-transparent"
                }`}
              />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400">
                  <Crown className="h-3 w-3" />
                  Popular
                </div>
              )}

              {/* Plan Number */}
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-600">
                  {plan.id}
                </span>

                {!plan.popular && (
                  <span className="text-3xl font-bold text-white/4">/</span>
                )}
              </div>

              {/* Plan Info */}
              <div className="relative mt-6">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-18 text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="relative mt-6 border-y border-white/6 py-6">
                {plan.priceNote && (
                  <p className="mb-1 text-xs text-zinc-500">{plan.priceNote}</p>
                )}

                <div className="flex items-end gap-1">
                  <span
                    className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                      plan.popular ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>

                  {plan.price !== "Let's Talk" && (
                    <span className="mb-1 text-xs text-zinc-500">
                      / project
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="relative mt-6 flex-1">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Includes
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>

                      <span className="text-sm leading-5 text-zinc-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`relative mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "border border-white/8 bg-white/3 text-zinc-200 hover:border-white/15 hover:bg-white/6"
                }`}
              >
                {plan.price === "Let's Talk"
                  ? "Discuss Your Project"
                  : "Get Started"}

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Custom Project CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2"
        >
          <div className="flex flex-col items-center gap-5 p-6 text-center sm:p-8 md:flex-row md:justify-between md:text-left">
            <div className="flex items-start gap-4">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 sm:flex">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Need something more specific?
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Tell me about your project and I&apos;ll create a custom
                  solution around your requirements.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Note */}
        <p className="mt-5 text-center text-xs text-zinc-600">
          Final pricing depends on project scope, complexity, features, and
          timeline.
        </p>
      </div>
    </section>
  );
}
