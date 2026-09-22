import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const procedures = [
    {
        number: "01",
        name: "RHINOPLASTY",
        description:
            "Refining structure, proportion and balance while preserving individuality.",
        image: "/images/procedures/rhinoplasty.jpg",
    },
    {
        number: "02",
        name: "LIP FILLERS",
        description:
            "Subtle definition and volume designed around natural facial harmony.",
        image: "/images/procedures/lip-fillers.jpg",
    },
    {
        number: "03",
        name: "FACELIFT",
        description:
            "Restoring youthful structure while maintaining natural expression.",
        image: "/images/procedures/facelift.jpg",
    },
];

function Procedures() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.from(listRef.current, {
                y: 80,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "top 25%",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="procedures"
            ref={sectionRef}
        >
            {/* Background image */}
            <div className="procedure-image">
                {procedures.map((procedure, index) => (
                    <img
                        key={procedure.name}
                        src={procedure.image}
                        alt={procedure.name}
                        className={`procedure-image-item ${activeIndex === index ? "active" : ""
                            }`}
                    />
                ))}
            </div>

            <div className="procedures-heading">
                <p className="procedures-label">
                    THE PROCEDURES
                </p>

                <h2 ref={headingRef}>
                    SUBTLE.
                    <span>INTENTIONAL.</span>
                </h2>
            </div>

            <div
                className="procedures-list"
                ref={listRef}
            >
                {procedures.map((procedure, index) => (
                    <div
                        className={`procedure-item ${activeIndex === index ? "active" : ""
                            }`}
                        key={procedure.name}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div className="procedure-number">
                            {procedure.number}
                        </div>

                        <div className="procedure-main">
                            <h3>
                                {procedure.name}
                            </h3>

                            <p>
                                {procedure.description}
                            </p>
                        </div>

                        <div className="procedure-arrow">
                            ↗
                        </div>
                    </div>
                ))}
            </div>

            <div className="procedures-footer">
                <span>SELECT A PROCEDURE</span>
                <span>03 / 03</span>
            </div>
        </section>
    );
}

export default Procedures;