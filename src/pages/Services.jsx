import { motion } from 'framer-motion';

function Services() {
    const techSkills = [
        'Electrical engineering',
        'Physics',
        'Mathematics',
        'Mechanical engineering',
    ];

    const softSkills = [
        'Inventorship',
        'Innovation',
        'Problem-solving',
        'Critical thinking',
        'Creative thinking',
        'Attention to detail',
    ];

    return (
        <div className='services'>
            <h2>Services</h2>
            <p>
                These lists are the notably skills that Nikola Tesla are known
                of
            </p>
            <br />
            <div className='flex'>
                <div className='tech-skills'>
                    <motion.h3
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}
                        className='col-span-2 relative ml-24 '
                    >
                        Technical Skills
                    </motion.h3>
                    <ul>
                        {techSkills.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ y: 20 + (index + 2) }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className='soft-skills'>
                    <motion.h3
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1 }}
                        className='col-span-2 relative ml-24 '
                    >
                        Soft Skills
                    </motion.h3>
                    <ul>
                        {softSkills.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ y: 20 + (index + 2) }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;
