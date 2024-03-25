interface ButtonProps{
    children?: React.ReactNode;
    className?: string;
}

interface SportProps{
    image: string;
    location: string;
    totalEvents: number;
    sport: string;
}

interface EventProps{
    image: string;
    title: string;
    location: string;
    time: string;
    btnText: string;
}