'use client';

import { useState } from "react";
import styles from "./count-button.module.css";

export default function CountButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    function handleDelete() {
        setCount(0);
    }

    return <div className={styles.ctas}>
        <a
            className={styles.primary}
            onClick={handleClick}>
            Count: ({count})
        </a>
        <a
            className={styles.secondary}
            onClick={handleDelete}>
            Reset
        </a>
    </div>
}