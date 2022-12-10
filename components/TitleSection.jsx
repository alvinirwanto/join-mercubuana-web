import React from 'react'

const TitleSection = ({subtitle, title}) => {
    return (
        <div className="flex flex-col gap-2">
            <p class="text-primary-green text-center text-2xl font-semibold">
                {subtitle}
            </p>
            <h2 className="text-center text-4xl font-bold text-primary-blue">
                {title}
            </h2>
        </div>
    )
}

export default TitleSection