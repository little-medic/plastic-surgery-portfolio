import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        procedure: "RHINOPLASTY",
        number: "01",
        before: "/images/rhinoplasty/case-01-before.jpg",
        after: "/images/rhinoplasty/case-01-after.jpg",
    },
    {
        procedure: "RHINOPLASTY",
        number: "02",
        before: "/images/rhinoplasty/case-02-before.jpg",
        after: "/images/rhinoplasty/case-02-after.jpg",
    },
    {
        procedure: "RHINOPLASTY",
        number: "03",
        before: "/images/rhinoplasty/case-03-before.jpg",
        after: "/images/rhinoplasty/case-03-after.jpg",
    },
    {
        procedure: "LIP FILLERS",
        number: "01",
        before: "/images/lip-fillers/case-01-before.jpg",
        after: "/images/lip-fillers/case-01-after.jpg",
    },
    {
        procedure: "LIP FILLERS",
        number: "02",
        before: "/images/lip-fillers/case-02-before.jpg",
        after: "/images/lip-fillers/case-02-after.jpg",
    },
    {
        procedure: "FACELIFT",
        number: "01",
        before: "/images/facelift/case-01-before.jpg",
        after: "/images/facelift/case-01-after.jpg",
    },
    {
        procedure: "FACELIFT",
        number: "02",
        before: "/images/facelift/case-02-before.jpg",
        after: "/images/facelift/case-02-after.jpg",
    },
];

function BeforeAfter() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const [activeCase, setActiveCase] = useState(0);
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const currentCase = cases[activeCase];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".before-after-label", {
                y: 40,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 45%",
                    scrub: true,
                },
            });

            gsap.from(".before-after-title", {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            gsap.from(".before-after-intro", {
                y: 40,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    end: "top 35%",
                    scrub: true,
                },
            });

            gsap.from(imageContainerRef.current, {
                scale: 0.92,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            gsap.from(".before-after-info", {
                y: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "top 30%",
                    scrub: true,
                },
            });

            gsap.from(".before-after-selector", {
                y: 30,
                opacity: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 45%",
                    end: "top 25%",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const updatePosition = (clientX: number) => {
        if (!imageContainerRef.current) return;

        const rect =
            imageContainerRef.current.getBoundingClientRect();

        let newPosition =
            ((clientX - rect.left) / rect.width) * 100;

        newPosition = Math.max(
            0,
            Math.min(100, newPosition)
        );

        setPosition(newPosition);
    };

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        setIsDragging(true);

        event.currentTarget.setPointerCapture(
            event.pointerId
        );

        updatePosition(event.clientX);
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        if (!isDragging) return;

        updatePosition(event.clientX);
    };

    const handlePointerUp = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        setIsDragging(false);

        try {
            event.currentTarget.releasePointerCapture(
                event.pointerId
            );
        } catch {
            // Pointer capture may already have been released.
        }
    };

    const selectCase = (index: number) => {
        setActiveCase(index);
        setPosition(50);
    };

    return (
        <section
            className="before-after"
            ref={sectionRef}
        >
            <div className="before-after-header">
                <p className="before-after-label">
                    SELECTED RESULTS
                </p>

                <h2 className="before-after-title">
                    BEFORE
                    <span>AFTER.</span>
                </h2>

                <p className="before-after-intro">
                    A closer look at proportion, structure and
                    natural refinement.
                </p>
            </div>

            <div className="before-after-stage">
                <div
                    className={`before-after-image ${isDragging ? "dragging" : ""
                        }`}
                    ref={imageContainerRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <img
                        className="before-after-after-image"
                        src={currentCase.after}
                        alt={`${currentCase.procedure} case ${currentCase.number} after`}
                        draggable={false}
                    />

                    <div
                        className="before-after-before"
                        style={{
                            width: `${position}%`,
                        }}
                    >
                        <img
                            src={currentCase.before}
                            alt={`${currentCase.procedure} case ${currentCase.number} before`}
                            draggable={false}
                        />
                    </div>

                    <div
                        className="before-after-divider"
                        style={{
                            left: `${position}%`,
                        }}
                    >
                        <div className="before-after-handle">
                            <span>←</span>
                            <span>→</span>
                        </div>
                    </div>

                    <div className="before-after-label-before">
                        BEFORE
                    </div>

                    <div className="before-after-label-after">
                        AFTER
                    </div>
                </div>
            </div>

            <div className="before-after-info">
                <div>
                    <span>PROCEDURE</span>
                    <strong>{currentCase.procedure}</strong>
                </div>

                <div>
                    <span>CASE</span>
                    <strong>{currentCase.number}</strong>
                </div>

                <div className="before-after-instruction">
                    DRAG TO EXPLORE
                </div>
            </div>

            <div className="before-after-selector">
                {cases.map((item, index) => (
                    <button
                        key={`${item.procedure}-${item.number}`}
                        className={
                            activeCase === index
                                ? "active"
                                : ""
                        }
                        onClick={() => selectCase(index)}
                        type="button"
                    >
                        <span>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.procedure}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default BeforeAfter;