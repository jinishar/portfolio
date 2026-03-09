import React from 'react';
import styles from './Card.module.css';

const Card = ({
    children,
    icon,
    title,
    description,
    variant = 'default',
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.card} ${styles[variant]} ${className}`} {...props}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </div>
    );
};

export default Card;
