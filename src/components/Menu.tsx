import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Menu() {
    const menuRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // --------------------------------
            // Menu changes from white to black
            // when the ivory section arrives
            // --------------------------------

            gsap.to(menuRef.current, {
                color: "#151515",
                ease: "none",

                scrollTrigger: {
                    trigger: ".intro",

                    start: "top 20%",
                    end: "top top",

                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <button
            ref={menuRef}
            className="fixed-menu"
        >
            MENU
        </button>
    );
}

export default Menu;