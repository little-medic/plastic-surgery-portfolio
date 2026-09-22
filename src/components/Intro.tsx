import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageInnerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                x: -80,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(labelRef.current, {
                y: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 40%",
                    scrub: true,
                },
            });

            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            gsap.from(descriptionRef.current, {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            gsap.to(imageInnerRef.current, {
                y: -70,
                scale: 1.08,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(contentRef.current, {
                y: -30,
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
            className="intro"
            ref={sectionRef}
        >
            <div
                className="intro-image"
                ref={imageRef}
            >
                <div
                    className="intro-image-inner"
                    ref={imageInnerRef}
                />
            </div>

            <div
                className="intro-content"
                ref={contentRef}
            >
                <p
                    className="intro-label"
                    ref={labelRef}
                >
                    THE PHILOSOPHY
                </p>

                <h2 ref={titleRef}>
                    PRECISION
                    <span>IS PERSONAL.</span>
                </h2>

                <p
                    className="intro-description"
                    ref={descriptionRef}
                >
                    A considered approach to plastic surgery,
                    where anatomy, proportion and individuality
                    come together to create natural results.
                </p>

                <div className="intro-number">
                    01
                </div>
            </div>
        </section>
    );
}

export default Intro;