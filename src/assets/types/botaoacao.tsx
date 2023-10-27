import { ButtonHTMLAttributes } from 'react';

interface BotaoAcao extends ButtonHTMLAttributes<HTMLButtonElement> {
    id ?: string;
    classes ?: string;
}

export default BotaoAcao