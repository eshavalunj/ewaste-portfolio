"use client";

import { motion } from "framer-motion";

const activities = [
  { id: 1, title: "E-Waste Pledge", image: "/activities/pledge.jpeg", large: true },
  { id: 2, title: "Household Survey", image: "/activities/a2.jpg" },
  { id: 3, title: "Collection Drive", image: "/activities/a3.jpg" },
  { id: 4, title: "Recycling Study", image: "/activities/a4.jpg", tall: true },
  { id: 5, title: "Awareness Poster", image: "/activities/a5.jpg" },
  { id: 6, title: "Material Recovery", image: "/activities/a6.jpg" },
  { id: 7, title: "Repair & Reuse", image: "/activities/a7.jpg" },
  { id: 8, title: "Circular Economy", image: "/activities/a8.jpg", wide: true },
  { id: 9, title: "EPR Research", image: "/activities/a9.jpg" },
  { id: 10, title: "Recycling Center Visit", image: "/activities/a10.jpg" },
  { id: 11, title: "Final Reflection", image: "/activities/a11.jpg", large: true },
];

export function ActivityBentoGrid() {
  return (
    <section className="py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">
          PORTFOLIO
        </p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Activity Showcase
        </h2>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
        {activities.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            className={[
              "group relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_20px_60px_rgba(16,34,27,0.08)] backdrop-blur-xl",
              item.large ? "md:col-span-2 md:row-span-2" : "",
              item.tall ? "md:row-span-2" : "",
              item.wide ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 p-5 text-white">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold backdrop-blur">
                {String(item.id).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}