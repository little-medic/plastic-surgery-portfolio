import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const titleSpanRef = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // --------------------------------
            // Initial states
            // --------------------------------

            gsap.set(navRef.current, {
                opacity: 1,
            });

            gsap.set(titleRef.current, {
                opacity: 1,
                y: 0,
                color: "#f4f0ea",
            });

            gsap.set(titleSpanRef.current, {
                color: "#d8d0c5",
            });

            gsap.set(subtitleRef.current, {
                opacity: 1,
            });

            gsap.set(bottomRef.current, {
                opacity: 1,
            });

            // --------------------------------
            // Initial hero animation
            // --------------------------------

            const intro = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            intro
                .from(navRef.current, {
                    y: -30,
                    opacity: 0,
                    duration: 0.8,
                })
                .from(
                    imageRef.current,
                    {
                        scale: 1.1,
                        opacity: 0,
                        duration: 1.2,
                    },
                    "-=0.4"
                )
                .from(
                    titleRef.current,
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.9,
                    },
                    "-=0.7"
                )
                .from(
                    subtitleRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.5"
                )
                .from(
                    bottomRef.current,
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            // --------------------------------
            // Title becomes subtle on scroll
            // --------------------------------

            gsap.to(titleRef.current, {
                color: "rgba(244, 240, 234, 0.18)",
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "70% top",
                    scrub: true,
                },
            });

            gsap.to(titleSpanRef.current, {
                color: "rgba(216, 208, 197, 0.18)",
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "70% top",
                    scrub: true,
                },
            });

            // --------------------------------
            // Image grows
            // --------------------------------

            gsap.to(imageWrapperRef.current, {
                width: "75vw",
                height: "90vh",
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "100% top",
                    scrub: true,
                },
            });

            gsap.to(imageRef.current, {
                scale: 1.25,
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "100% top",
                    scrub: true,
                },
            });

            // --------------------------------
            // Hero label becomes subtle
            // --------------------------------

            gsap.to(subtitleRef.current, {
                opacity: 0.25,
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "50% top",
                    scrub: true,
                },
            });

            // --------------------------------
            // Bottom information becomes subtle
            // --------------------------------

            gsap.to(bottomRef.current, {
                opacity: 0.25,
                ease: "none",

                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "40% top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <nav className="hero-nav" ref={navRef}>
                <div className="logo">
                    AV
                </div>

                <div className="nav-name">
                    DR. ADRIAN VALE
                </div>
            </nav>

            <div className="hero-content">
                <p
                    className="hero-label"
                    ref={subtitleRef}
                >
                    PLASTIC & AESTHETIC SURGERY
                </p>

                <h1
                    className="hero-title"
                    ref={titleRef}
                >
                    THE ART
                    <span ref={titleSpanRef}>
                        OF REFINEMENT
                    </span>
                </h1>

                <div
                    className="hero-image-wrapper"
                    ref={imageWrapperRef}
                >
                    <div
                        className="hero-image"
                        ref={imageRef}
                    />
                </div>
            </div>

            <div
                className="hero-bottom"
                ref={bottomRef}
            >
                <span>
                    GENOVA · ITALY
                </span>

                <span className="scroll-indicator">
                    SCROLL
                    <span>↓</span>
                </span>

                <span>
                    EST. 2026
                </span>
            </div>
        </section>
    );
}

export default Hero;