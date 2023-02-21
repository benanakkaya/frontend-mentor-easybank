import React from 'react'

export default function Content() {

    const titles = [
        {
            id: "online",
            title: "Online Banking",
            text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            id: "budgeting",
            title: "Simple Budgeting",
            text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            id: "onboarding",
            title: "Fast Onboarding",
            text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            id: "api",
            title: "Open API",
            text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        },
    ]




    return (
        <div className='relative -z-30  bg-lightGrayish'>
            <div className='container p-12 flex flex-col gap-12 justify-center'>
                <div className='flex flex-col gap-5 items-center justify-center md:items-start md:justify-start'>
                    <h2 className='text-2xl text-darkBlue'>Why choose Easybank?</h2>
                    <div className='text-grayish text-center md:text-start'>
                        <p className='md:w-140'>
                            We leverage Open Banking to turn your bank account into your financial hub.
                            Control your finances like never before.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {titles.map((e) => (
                        <div key={e.id} className='flex flex-col gap-4 p-2 items-center justify-center md:justify-start md:items-start'>
                            <img className='w-16' src={require(`../images/icon-${e.id}.svg`)} alt={e.id} />
                            <h4 className='text-darkBlue font-medium'>{e.title}</h4>
                            <p className='text-grayish text-sm'>{e.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
