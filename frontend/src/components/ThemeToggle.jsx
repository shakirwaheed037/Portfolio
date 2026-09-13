import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn hover-scale"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                color: theme === 'dark' ? '#d1d5db' : '#2c323d',
                transition: 'color 0.25s ease'
            }}
        >
            {theme === 'dark' ? (
                <Sun size={20} />
            ) : (
                <Moon size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;
