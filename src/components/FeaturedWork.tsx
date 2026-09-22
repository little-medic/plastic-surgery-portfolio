import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = [
    {
        number: "01",
        category: "RHINOPLASTY",
        title: "BALANCE",
        description:
            "Refining structure and proportion while preserving the individuality of every face.",
        image: "/images/featured/rhinoplasty-feature.jpg",
    },
    {
        number: "02",
        category: "LIP FILLERS",
        title: "PROPORTION",
        description:
            "Subtle volume and definition designed around the natural architecture of the lips.",
        image: "/images/featured/lip-fillers-feature.jpg",
    },
    {
        number: "03",
        category: "FACELIFT",
        title: "TIMELESS",
        description:
            "Restoring youthful structure while preserving expression, character and identity.",
        image: "/images/featured/facelift-feature.jpg",
    },
];

function FeaturedWork() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".featured-heading", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".featured-heading",
                    start: "top 80%",
                },
            });

            const items =
                gsap.utils.toArray<HTMLElement>(".featured-item");

            items.forEach((item) => {
                const image = item.querySelector(
                    ".featured-image-inner"
                );

                const content = item.querySelector(
                    ".featured-content"
                );

                gsap.from(content, {
                    y: 80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "top 45%",
                        scrub: true,
                    },
                });

                gsap.to(image, {
                    yPercent: -8,
                    scale: 1.08,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="featured-work"
            ref={sectionRef}
        >
            <div className="featured-heading">
                <p className="featured-label">
                    SELECTED WORK
                </p>

                <h2>
                    FORM
                    <span>& FUNCTION.</span>
                </h2>
            </div>

            <div className="featured-items">
                {featured.map((item, index) => (
                    <article
                        className={`featured-item featured-item-${index + 1}`}
                        key={item.number}
                    >
                        <div className="featured-number">
                            {item.number}
                        </div>

                        <div className="featured-image">
                            <img
                                src={item.image}
                                alt={item.category}
                                className="featured-image-inner"
                            />

                            <div className="featured-image-overlay" />

                            <div className="featured-image-caption">
                                CASE STUDY
                            </div>
                        </div>

                        <div className="featured-content">
                            <p className="featured-category">
                                {item.category}
                            </p>

                            <h3>
                                {item.title}
                            </h3>

                            <p className="featured-description">
                                {item.description}
                            </p>

                            <div className="featured-line" />

                            <span className="featured-link">
                                EXPLORE CASE
                                <span>↗</span>
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <div className="featured-footer">
                <span>SELECTED CASES</span>
                <span>03 / 03</span>
            </div>
        </section>
    );
}

export default FeaturedWork;