
interface Props {
    value: string
    level: number
}

const Typo = (props:Props) => {
    const HeaderTag = `h${props.level}` as keyof JSX.IntrinsicElements
    return (
        <HeaderTag>{props.value}</HeaderTag> 
    )
}

export default Typo
