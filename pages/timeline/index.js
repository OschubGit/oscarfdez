import Link from "next/link"

export default function Timeline (){
    return (
        <>
        <h1>This is the timeline</h1>
        <Link href="/">Go Homee</Link>
        <style jsx>{`
            h1 {
                color: red;
            }
        `}</style>
        </>
    )
}