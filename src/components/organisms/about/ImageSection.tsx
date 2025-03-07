import Image from "next/image"

export const ImageSection: React.FC = () => {
    return (
        <div className="container mx-auto">
            <Image src="/AboutSection.png" alt="about" width={0} height={0} sizes="100%" className="w-full h-auto" />
        </div>
    )
}