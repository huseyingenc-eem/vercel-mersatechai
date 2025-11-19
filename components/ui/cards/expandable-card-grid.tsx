"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@hooks/use-outside-click";
import { MousePointerClick, X } from "lucide-react";
import { createPortal } from "react-dom"; // EKLENDİ: Portal için gerekli

type Card = {
    title: string;
    description: string;
    src: string;
    content: () => React.ReactNode;
};

export function ExpandableCardGrid({ cards }: { cards: Card[] }) {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    const [mounted, setMounted] = useState(false);

    // Hydration hatasını önlemek için mount kontrolü
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    // Portal içeriği (Modal)
    const modalContent = (
        <AnimatePresence>
            {active && (
                <>
                    {/* Overlay - Her şeyin üzerinde (z-50) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-[9998]"
                    />

                    {/* Modal Wrapper - Ekranın tam ortası */}
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
                        {/* pt-[30px] header payı için, pointer-events-none dış boşluklara tıklamayı engellememek için */}

                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full h-full max-w-[500px] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative"
                        >
                            {/* Kapatma Butonu */}
                            <motion.button
                                key={`button-${active.title}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="absolute top-4 right-4 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-50 shadow-lg cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActive(null);
                                }}
                            >
                                <X className="w-4 h-4 text-neutral-800 dark:text-white" />
                            </motion.button>

                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-60 sm:h-80 sm:rounded-t-3xl object-cover object-top"
                                />
                            </motion.div>

                            <div className="flex-grow overflow-y-auto custom-scrollbar">
                                <div className="flex justify-between items-start p-6">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-2xl text-neutral-800 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-base text-neutral-600 dark:text-neutral-400 mt-2"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="relative px-6 pb-8">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-sm flex flex-col items-start gap-4 dark:text-neutral-400"
                                    >
                                        {active.content()}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );

    return (
        <>
            {/* Portal: Modal'ı document.body'ye taşır */}
            {mounted ? createPortal(modalContent, document.body) : null}

            {/* Kart Listesi */}
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
                {cards.map((card) => (
                    <motion.li
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col bg-neutral-100/50 dark:bg-neutral-900/50 rounded-2xl cursor-pointer group relative border border-transparent hover:border-blue-500/20 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300"
                    >
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-48 w-full rounded-xl object-cover object-top shadow-sm group-hover:shadow-md transition-shadow"
                                />
                            </motion.div>
                            <div className="flex flex-col mt-2">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-semibold text-neutral-800 dark:text-neutral-200 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-sm mt-1"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm backdrop-blur-sm">
                            <MousePointerClick className="w-4 h-4 text-blue-500" />
                        </div>
                    </motion.li>
                ))}
            </ul>
        </>
    );
}