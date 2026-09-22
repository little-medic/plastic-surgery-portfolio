import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Surgeon() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageInnerRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const quoteRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.to(imageInnerRef.current, {
                scale: 1.08,
                yPercent: -6,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.from(labelRef.current, {
                y: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 50%",
                    scrub: true,
                },
            });

            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.from(quoteRef.current, {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.from(textRef.current, {
                y: 40,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 55%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            gsap.to(contentRef.current, {
                y: -35,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="surgeon"
            ref={sectionRef}
        >
            <div
                className="surgeon-image"
                ref={imageRef}
            >
                <img
                    src="/images/surgeon.jpg"
                    alt="Dr. Adrian Vale"
                    ref={imageInnerRef}
                />

                <div className="surgeon-image-number">
                    04
                </div>
            </div>

            <div
                className="surgeon-content"
                ref={contentRef}
            >
                <p
                    className="surgeon-label"
                    ref={labelRef}
                >
                    THE SURGEON
                </p>

                <h2 ref={titleRef}>
                    ADRIAN
                    <span>VALE.</span>
                </h2>

                <p
                    className="surgeon-quote"
                    ref={quoteRef}
                >
                    "Plastic surgery is not about changing
                    identity. It is about understanding
                    proportion."
                </p>

                <p
                    className="surgeon-description"
                    ref={textRef}
                >
                    Dr. Adrian Vale approaches every procedure
                    as a study in anatomy, balance and
                    individuality. His philosophy is simple:
                    refinement should never erase character.
                </p>

                <div className="surgeon-meta">
                    <span>PLASTIC & AESTHETIC SURGERY</span>
                    <span>GENOVA · ITALY</span>
                </div>
            </div>
        </section>
    );
}

export default Surgeon;