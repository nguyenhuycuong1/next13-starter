import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/buton';
export default function Home() {
    return (
        <main className={styles.main}>
            <Button>clone</Button>
        </main>
    );
}
