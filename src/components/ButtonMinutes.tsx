type ButtonMinutesProps = {
    title: string;
    isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonMinutes = ({ title, isActive, ...rest }: ButtonMinutesProps) => {
    return (
        <button 
            className={`flex items-center justify-center p-2 rounded-full ${isActive ? 'bg-[#00875F]' : 'bg-[#50555A]'}`}
            {...rest}
        >
            {title}
        </button>
    )
}