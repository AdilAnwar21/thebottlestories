"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Award, Sparkles, Gift, Star, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Each hamper is thoughtfully curated with premium perfumes and elegant packaging to create an unforgettable gifting experience.",
      color: "from-pink-50 to-rose-50"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We partner with world-renowned perfume brands to bring you authentic, luxury fragrances that last.",
      color: "from-pink-50 to-rose-50"
    },
    {
      icon: Sparkles,
      title: "Personalized Touch",
      description: "Customize your hampers with personal messages, special packaging, and unique combinations tailored to your loved ones.",
      color: "from-pink-50 to-rose-50"
    }
  ]

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Gift, value: "50+", label: "Unique Hampers" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ]

  return (
    <section ref={ref} className="py-32 px-4 bg-gradient-to-b from-white via-[#F8F8F8] to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#DADADA]/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#DADADA]/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Sparkles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 text-[#DADADA]"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-64 right-32 text-[#DADADA]"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-1/3 text-[#DADADA]"
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#444444] mb-6 px-6 py-3 bg-white rounded-full border border-[#DADADA] shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            ABOUT US
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-[#222222] mb-8 leading-tight"
          >
            Every Bottle Has
            <span className="block bg-gradient-to-r from-[#222222] via-[#444444] to-[#222222] bg-clip-text text-transparent">
              a Story
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed"
          >
            At The Bottle Stories, we believe that fragrance is more than just a scent—it's a memory, an emotion, a story waiting to be told. We specialize in creating luxurious perfume gift hampers that transform special moments into lasting memories.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-3xl p-8 border border-[#DADADA] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-20 h-20 bg-gradient-to-br from-[#222222] to-[#444444] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className={`absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl blur-xl`}
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#222222] mb-4 group-hover:text-[#1C1C1C] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#444444] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Corner Element */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-[#DADADA] rounded-full opacity-20"
                  />
                </div>

                {/* Floating Particles */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-[#DADADA] rounded-full blur-sm"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#1C1C1C] via-[#222222] to-[#1C1C1C] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }}
            />

            <div className="relative z-10 grid md:grid-cols-3 gap-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={statsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-5xl md:text-6xl font-bold text-white mb-2"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-white/70 text-lg">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}