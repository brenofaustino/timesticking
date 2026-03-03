import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme
    });

    const nextThemeIcon = {
        'dark': <SunIcon/>,
        'light': <MoonIcon/>
    }

    function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault() //ao clicar na ancora não seremos redirecionados para o link inserido lá

        setTheme((prevTheme)=>{
            const nextTheme = (prevTheme === "dark" ? 'light' : 'dark');
            // document.documentElement.setAttribute('data-theme', nextTheme) <- não recomendado pois o react não consegue monitorar esse resultado (o ideal é utilizar useEffect)
            return nextTheme
        })
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a className={styles['menu-link']} href="#" aria-label='Menu principal' title='Menu principal'>
                <HouseIcon/>
            </a>
            <a className={styles['menu-link']} href="#" aria-label='Mostrar Histórico' title='Mostrar Histórico'>
                <HistoryIcon/>
            </a>
            <a className={styles['menu-link']} href="#" aria-label='Configurações' title='Configurações'>
                <SettingsIcon/>
            </a>
            <a className={styles['menu-link']} href="#" aria-label='Alterar tema' title='Alterar tema' onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}