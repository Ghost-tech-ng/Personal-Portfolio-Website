import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 4, // Center offset
            y: mousePosition.y - 4,
            transition: {
                type: "smooth",
                duration: 0
            }
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0.5, // Shrink dot on hover
        }
    };

    const outlineVariants = {
        default: {
            x: mousePosition.x - 20, // Center offset for 40px width
            y: mousePosition.y - 20,
            transition: {
                type: "spring",
                mass: 0.6,
                stiffness: 100, // Magnetic feel
                damping: 20
            }
        },
        hover: {
            x: mousePosition.x - 25, // Center offset for 50px width
            y: mousePosition.y - 25,
            height: 50,
            width: 50,
            backgroundColor: "rgba(0, 242, 255, 0.1)",
            borderColor: "rgba(0, 242, 255, 0.8)",
            transition: {
                type: "spring",
                mass: 0.4,
            }
        }
    };

    return (
        <>
            <motion.div
                className="cursor-dot"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            <motion.div
                className="cursor-outline"
                variants={outlineVariants}
                animate={isHovering ? "hover" : "default"}
            />
        </>
    );
};

export default Cursor;
