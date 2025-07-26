"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useId, useRef, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

// --- Ikony SVG ---
const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const BuildIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const SupplyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const FitIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.4 10.5c.2.8.2 1.7 0 2.5l-1.8 6.4c-.3 1.2-1.5 2.1-2.8 2.1H7.2c-1.3 0-2.5-.9-2.8-2.1L2.6 13c-.2-.8-.2-1.7 0-2.5l1.8-6.4C4.7 3 5.9 2 7.2 2h9.6c1.3 0 2.5.9 2.8 2.1l1.8 6.4z" /><path d="m9 11 3 3L15 11" />
  </svg>
);

// --- Typy i dane ---
interface PetalData {
  id: string;
  title: string;
  angle: number;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const petalsData: PetalData[] = [
  { id: "design", title: "Design", angle: 0, icon: DesignIcon, description: "Creating bespoke solutions that perfectly match your vision and requirements." },
  { id: "build", title: "Build", angle: 90, icon: BuildIcon, description: "Expert craftsmanship and attention to detail in every project." },
  { id: "supply", title: "Supply", angle: 180, icon: SupplyIcon, description: "Quality materials and fixtures sourced at competitive prices." },
  { id: "fit", title: "Fit", angle: 270, icon: FitIcon, description: "Professional installation with minimal disruption to your daily life." },
];

// --- Komponent Płatka ---
interface PetalProps {
  data: PetalData;
  onClick: () => void;
  isActive: boolean;
  isAnyActive: boolean;
  radius: number;
  size: number;
}

const Petal = ({ data, onClick, isActive, isAnyActive, radius, size }: PetalProps) => {
  const { title, angle, icon: Icon } = data;
  const radians = (angle - 90) * (Math.PI / 180);
  const x = Math.cos(radians) * radius;
  const y = Math.sin(radians) * radius;

  return (
    <motion.li
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        zIndex: 5,
      }}
      variants={{
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
          opacity: 1,
          scale: 1,
          x: `calc(-50% + ${x}px)`,
          y: `calc(-50% + ${y}px)`,
        },
      }}
      transition={{ type: "spring" as const, damping: 15, stiffness: 100 }}
    >
      {/* Kontener dla efektu 3D i animowanego borderu */}
      <div
        className={cn(
          "rounded-full p-0.5 transition-all duration-300 group",
          "bg-gradient-to-br from-extendia-accent/50 via-extendia-primary/50 to-extendia-accent/50",
          isActive ? "scale-110" : "hover:scale-105",
          isAnyActive && !isActive ? "opacity-60 scale-95" : "opacity-100",
        )}
        style={{
          width: size,
          height: size,
          boxShadow: isActive 
            ? `0 0 25px hsla(var(--extendia-primary), 0.7), 0 0 15px hsla(var(--extendia-accent), 0.6)`
            : `0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)`,
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Wewnętrzny przycisk */}
        <Button
          aria-label={title}
          onClick={onClick}
          className={cn(
            "relative rounded-full transition-colors duration-300 ease-in-out flex flex-col items-center justify-center space-y-1 p-2 w-full h-full",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-extendia-accent-dark focus:outline-none",
            {
              "bg-extendia-primary text-white": isActive,
              "bg-slate-50 text-extendia-primary group-hover:bg-white": !isActive,
            }
          )}
        >
          {/* Animowany border (pseudo-element) */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-0">
            <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-extendia-accent/80 via-transparent to-extendia-primary/80 animate-border-spin group-hover:animate-[border-spin_3s_linear_infinite]"></div>
          </div>
          
          {/* Treść przycisku */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
            <Icon className={cn(
              "w-7 h-7 transition-colors duration-300",
              isActive ? "text-white" : "text-extendia-accent-dark"
            )} />
            <span className={cn(
              "font-semibold text-sm tracking-wide text-center transition-colors duration-300"
            )}>
              {title}
            </span>
          </div>
        </Button>
      </div>
    </motion.li>
  );
};

// --- Główny Komponent ---
export const ManageFlower = () => {
  const [selectedPetal, setSelectedPetal] = useState<PetalData | null>(null);
  const [autoSequenceActive, setAutoSequenceActive] = useState(false);
  const [isCoinFlipping, setIsCoinFlipping] = useState(false);
  const headingId = useId();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Zwiększone rozmiary płatków dla lepszej czytelności
  const petalSize = isMobile ? 100 : isTablet ? 120 : 140;
  const centerSize = isMobile ? 140 : isTablet ? 180 : 220;

  // Nowa kalkulacja promienia, aby płatki nachodziły na centrum
  const radius = (centerSize / 2) + (petalSize / 2) - (isMobile ? 20 : isTablet ? 25 : 30);
  
  // Dynamiczny rozmiar kontenera dopasowany do nowej kompozycji
  const containerSize = (radius + petalSize / 2) * 2;

  // Funkcja do czyszczenia timeoutów
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  };

  // Funkcja do uruchomienia automatycznej sekwencji
  const startAutoSequence = useCallback(() => {
    clearAllTimeouts();
    
    // Funkcja rekurencyjna do tworzenia nieskończonej pętli
    const runSequenceCycle = () => {
      // Początek: pokaż MANAGE przez 2 sekundy (tak jak inne płatki)
      const manageTimeout = setTimeout(() => {
        // Następnie przejdź przez wszystkie płatki
        petalsData.forEach((petal, index) => {
          const delay = (index + 1) * 2000; // +1 bo już mamy 2s dla MANAGE
          
          // Animacja coin flip i ustawienie płatka
          const timeout1 = setTimeout(() => {
            setIsCoinFlipping(true);
            // Zmień treść w połowie animacji (gdy okrąg jest obrócony na 90 stopni)
            setTimeout(() => {
              setSelectedPetal(petal);
            }, 150); // 1/4 czasu animacji (0.6s / 4 = 0.15s)
            // Zakończ animację
            setTimeout(() => {
              setIsCoinFlipping(false);
            }, 600); // Pełny czas animacji
          }, delay);
          
          timeoutsRef.current.push(timeout1);
        });
        
        // Po wszystkich płatkach powróć do MANAGE i rozpocznij nowy cykl
        const resetTimeout = setTimeout(() => {
          setIsCoinFlipping(true);
          // Zmień treść w połowie animacji
          setTimeout(() => {
            setSelectedPetal(null); // Powrót do MANAGE
          }, 150);
          // Zakończ animację i rozpocznij nowy cykl
          setTimeout(() => {
            setIsCoinFlipping(false);
            // Rozpocznij nowy cykl po krótkiej przerwie
            const nextCycleTimeout = setTimeout(() => {
              runSequenceCycle(); // Rekurencyjne wywołanie
            }, 500); // 0.5s przerwy przed następnym cyklem
            timeoutsRef.current.push(nextCycleTimeout);
          }, 600);
        }, (petalsData.length + 1) * 2000); // +1 dla początkowego MANAGE
        
        timeoutsRef.current.push(resetTimeout);
      }, 2000); // Pierwsze 2 sekundy dla MANAGE
      
      timeoutsRef.current.push(manageTimeout);
    };
    
    // Rozpocznij pierwszy cykl
    runSequenceCycle();
  }, []);

  // useEffect do uruchomienia automatycznej sekwencji
  useEffect(() => {
    // Poczekaj na zakończenie animacji pojawiania się płatków
    const startTimeout = setTimeout(() => {
      setAutoSequenceActive(true);
      startAutoSequence();
    }, 1500); // 0.9s animacja + 0.6s dodatkowy delay

    return () => {
      clearTimeout(startTimeout);
      clearAllTimeouts();
    };
  }, [startAutoSequence]);

  const handlePetalClick = (petal: PetalData) => {
    // Jeśli trwa automatyczna sekwencja, zatrzymaj ją tymczasowo
    if (autoSequenceActive) {
      clearAllTimeouts();
      setIsCoinFlipping(false);
    }
    
    setSelectedPetal(petal.id === selectedPetal?.id ? null : petal);
    
    // Wznów automatyczną sekwencję po 5 sekundach bez interakcji
    const resumeTimeout = setTimeout(() => {
      if (autoSequenceActive) {
        startAutoSequence();
      }
    }, 5000);
    
    timeoutsRef.current.push(resumeTimeout);
  };

  const handleCenterClick = () => {
    // Jeśli trwa automatyczna sekwencja, zatrzymaj ją tymczasowo
    if (autoSequenceActive) {
      clearAllTimeouts();
      setIsCoinFlipping(false);
    }
    
    if (selectedPetal) setSelectedPetal(null);
    
    // Wznów automatyczną sekwencję po 5 sekundach bez interakcji
    const resumeTimeout = setTimeout(() => {
      if (autoSequenceActive) {
        startAutoSequence();
      }
    }, 5000);
    
    timeoutsRef.current.push(resumeTimeout);
  };

  const content = selectedPetal ?? {
    title: "MANAGE",
    description: "End-to-end project management for your peace of mind."
  };

  return (
    <section aria-labelledby={headingId} className="flex flex-col items-center justify-center">
      <h2 id={headingId} className="sr-only">Our Management Process</h2>
      
      <motion.div 
        className="relative"
        style={{ width: containerSize, height: containerSize }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
        }}
      >
        {/* Centralne Koło - umieszczone w kontenerze flex dla idealnego wyśrodkowania */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="z-10"
            variants={{
              hidden: { scale: 0.5, opacity: 0 },
              visible: { scale: 1, opacity: 1 }
            }}
            animate={isCoinFlipping ? {
              rotateY: [0, 90, 180, 90, 0],
              scale: [1, 0.95, 1.05, 0.95, 1]
            } : {}}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
            style={{ 
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card
              className={cn(
                "rounded-full shadow-lg transition-all duration-300 text-white flex items-center justify-center",
                "bg-gradient-to-br from-extendia-primary to-blue-800",
                selectedPetal ? "cursor-pointer hover:scale-105" : "cursor-default"
              )}
              style={{ width: centerSize, height: centerSize }}
              onClick={handleCenterClick}
              onKeyDown={(e) => e.key === 'Enter' && handleCenterClick()}
              role="button"
              tabIndex={selectedPetal ? 0 : -1}
              aria-label={selectedPetal ? "Back to main view" : "Management overview"}
            >
              <CardContent className="p-4 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={content.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center"
                  >
                    <h3 className="font-bold tracking-wider text-2xl md:text-3xl">
                      {content.title}
                    </h3>
                    <p className="mt-2 leading-tight text-sm text-slate-200">
                      {content.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Płatki */}
        <ul className="absolute inset-0">
          {petalsData.map((petal) => (
            <Petal
              key={petal.id}
              data={petal}
              onClick={() => handlePetalClick(petal)}
              isActive={selectedPetal?.id === petal.id}
              isAnyActive={!!selectedPetal}
              radius={radius}
              size={petalSize}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ManageFlower;
