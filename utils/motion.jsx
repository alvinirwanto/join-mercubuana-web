export const slideIn = (direction, delay, duration) => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            stiffness: '100',
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const opacityIn = (delay, duration) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});


export const staggerAnimation = () => ({
    hidden: {
        opacity: 0
    },

    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            stiffness: '100',
            type: 'tween',
        }
    }
})

export const staggerItems = (direction) => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? '-200%' : direction === 'right' ? '200%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },

    show: {
        opacity: 1,
        x: 0,
        y: 0,
        // transition: {
        //     duration: .4
        // }
    }
})
