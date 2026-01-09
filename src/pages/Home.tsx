import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calendar, Clock} from "lucide-react";
export default function Home() {
  return (
   <div className="flex justify-center mt-4">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-[95%]  bg-slate-950 px-4 rounded-3xl" 
    >
      {/* HERO */}
      <motion.div
        initial={{ scale: 1.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[520px] bg-hero-mundial bg-cover bg-center rounded-3xl mt-6 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-end items-start p-10 text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            Copa del Mundo <br />
            <span className="text-green-500">2026</span>
          </h1>

          <p className="mt-4 text-sm lg:text-xl text-slate-200 max-w-xl bg-black/30 backdrop-blur-md rounded-xl px-6 py-3 inline-block">
            Resultados, partidos y estadísticas en tiempo real
          </p>

          <div className="flex flex-col md:flex-row  gap-4 mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-sm md:text-base ">
              <Clock/>  Partidos en vivo
            </Button>
            <Button size="lg" className=" bg-blue-800 hover:bg-blue-900 text-white text-sm md:text-base ">
                <Calendar/>  Tabla de Posiciones
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
}
