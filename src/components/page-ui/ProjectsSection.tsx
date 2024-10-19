import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Tigger',
        link: 'https://github.com/mian-abd/tigger',
        thumbnail: '/projects/tigger.png'
    },
    {
        title: 'Frogii',
        link: 'https://github.com/mian-abd/frogii.github.io',
        thumbnail: '/projects/frogii.png'
    },
    {
        title: 'Smart Schedule',
        link: 'https://github.com/PennApps-DPUSchedulePomodoro/ScheduleMana_Pomodoro/tree/master',
        thumbnail: '/projects/smart-scedule.jpg'
    },
    /*
    {
        title: 'Google Clone',
        link: 'https://github.com/MagicPojska/gulululgl-search-clone',
        thumbnail: '/projects/google-clone.png'
    },
    {
        title: 'Portfolio V1',
        link: 'https://safetpojskic.netlify.app/',
        thumbnail: '/projects/old-portfolio.png'
    },
    {
        title: 'Dresscode',
        link: '',
        thumbnail: '/projects/dresscode.png'
    },
*/
    {
        title: 'Inventory Geek',
        link: 'https://www.figma.com/proto/U7lHZzytjZOCjOMZkHxi7t/Untitled?type=design&node-id=0-4389&t=OKhCH6AZkTqTo4cp-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A4709&show-proto-sidebar=1',
        thumbnail: '/projects/prototype.png'
    },
    {
        title: 'Portfolio V2',
        link: 'https://mian-abdullah.com',
        thumbnail: './portfolio.png'
    },
    {
        title: 'Distributed Anomaly Detection Using ML Techniques',
        link: 'https://github.com/EmmanuelA74/Distributed-Anomaly-Detection-Using-Machine-Learning-Techniques/tree/main',
        thumbnail: '/projects/iot.jpg'
    }
];
