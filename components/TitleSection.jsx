import React from 'react'

const TitleSection = ({ subtitle, title, middleText }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-primary-green text-center text-2xl font-semibold">
                {subtitle}
            </p>
            <p className="text-primary-blue text-center text-2xl font-bold">
                {middleText}
            </p>
            <h2 className="text-center text-4xl font-bold text-primary-blue max-w-[700px] mx-auto">
                {title}
            </h2>
        </div>
    )
}

export default TitleSection