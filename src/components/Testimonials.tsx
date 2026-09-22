import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        number: "01",
        quote:
            "The result was never about looking different. It was about finally looking like myself.",
        initials: "E.M.",
        procedure: "RHINOPLASTY",
        location: "MILAN · ITALY",
    },
    {
        number: "02",
        quote:
            "Everything felt considered. Nothing was rushed, and the result is exactly as subtle as I hoped.",
        initials: "S.R.",
        procedure: "LIP FILLERS",
        location: "GENOVA · ITALY",
    },
    {
        number: "03",
        quote:
            "I wanted to feel refreshed, not changed. The result gave me confidence without taking away my expression.",
        initials: "A.L.",
        procedure: "FACELIFT",
        location: "TURIN · ITALY",
    },
];

function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);
    const quoteTextRef = useRef<HTMLHeadingElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeTestimonial = testimonials[activeIndex];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonials-label", {
                y: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 55%",
                    scrub: true,
                },
            });

            gsap.from(".testimonials-heading", {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.from(".testimonials-main", {
                y: 70,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.to(".testimonials-mark", {
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

    const selectTestimonial = (index: number) => {
        if (index === activeIndex) return;

        const timeline = gsap.timeline();

        timeline
            .to([quoteTextRef.current, detailsRef.current], {
                y: 20,
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
            })
            .add(() => {
                setActiveIndex(index);
            })
            .to([quoteTextRef.current, detailsRef.current], {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power4.out",
                stagger: 0.05,
            });
    };

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="testimonials-mark">“</div>

            <div className="testimonials-header">
                <p className="testimonials-label">THE EXPERIENCE</p>

                <h2 className="testimonials-heading">
                    TRUST
                    <span>THE PROCESS.</span>
                </h2>
            </div>

            <div className="testimonials-main" ref={quoteRef}>
                <div className="testimonials-number">
                    {activeTestimonial.number}
                </div>

                <div className="testimonials-quote">
                    <h3 ref={quoteTextRef}>
                        {activeTestimonial.quote}
                    </h3>

                    <div
                        className="testimonials-details"
                        ref={detailsRef}
                    >
                        <div className="testimonial-person">
                            <span className="testimonial-initials">
                                {activeTestimonial.initials}
                            </span>

                            <div>
                                <strong>Verified Patient</strong>
                                <span>{activeTestimonial.location}</span>
                            </div>
                        </div>

                        <div className="testimonial-procedure">
                            <span>PROCEDURE</span>
                            <strong>{activeTestimonial.procedure}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-selector">
                <div className="testimonials-selector-line" />

                {testimonials.map((testimonial, index) => (
                    <button
                        key={testimonial.number}
                        type="button"
                        className={
                            activeIndex === index
                                ? "testimonial-selector active"
                                : "testimonial-selector"
                        }
                        onClick={() => selectTestimonial(index)}
                    >
                        <span>{testimonial.number}</span>

                        <div>
                            <strong>{testimonial.procedure}</strong>
                            <small>{testimonial.initials}</small>
                        </div>
                    </button>
                ))}
            </div>

            <div className="testimonials-footer">
                <span>PERSONAL EXPERIENCE</span>
                <span>03 / 03</span>
            </div>
        </section>
    );
}

export default Testimonials;