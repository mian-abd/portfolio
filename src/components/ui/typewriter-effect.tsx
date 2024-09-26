'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}: {
    words: {
        text: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [speed, setSpeed] = useState(100); // Typing speed

    const currentWordArray = words[currentIndex].text.split(' ');
    const fullWord = currentWordArray.join(' ');

    useEffect(() => {
        if (!deleting && showText === fullWord) {
            setTimeout(() => setDeleting(true), 1000); // Pause before deleting
        } else if (deleting && showText === '') {
            setDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % words.length); // Loop over the words
        }
        const timeout = setTimeout(() => {
            setShowText(
                (prev) =>
                    deleting
                        ? prev.slice(0, -1) // Delete characters
                        : fullWord.slice(0, prev.length + 1) // Type characters
            );
            setSpeed(deleting ? 50 : 100); // Speed for typing vs deleting
        }, speed);

        return () => clearTimeout(timeout);
    }, [showText, deleting, speed]);

    const getTextWithLastWordBlue = () => {
        // Split the current visible text into words
        const splitText = showText.split(' ');

        // If the visible text includes the last word fully, color it blue
        if (splitText.length === currentWordArray.length) {
            return (
                <>
                    {splitText.slice(0, -1).join(' ')} <span className="text-blue-500 dark:text-blue-500">{splitText.slice(-1)}</span>
                </>
            );
        }
        // Otherwise, just show the visible text
        return showText;
    };

    return (
        <div className={cn('flex space-x-1 my-6', className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{ width: '0%' }}
                whileInView={{ width: 'fit-content' }}
                transition={{ duration: 2, ease: 'linear', delay: 1 }}
            >
                <div className="lg:text:3xl text-xl font-bold xl:text-5xl" style={{ whiteSpace: 'nowrap' }}>
                    {getTextWithLastWordBlue()}
                </div>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className={cn('inline-block rounded-sm w-[4px] h-6 xl:h-12 bg-blue-500', cursorClassName)}
            ></motion.span>
        </div>
    );
};
