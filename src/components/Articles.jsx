import React from 'react'

export default function Articles() {

    const articles = [
        {
            image: "currency",
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
            image: "restaurant",
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
            image: "plane",
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
            image: "confetti",
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        },
    ]

    return (
        <div className='bg-customWhite'>
            <div className='container p-12 flex flex-col gap-8'>
                <h3 className='text-4xl text-darkBlue text-center md:text-start'>
                    Latest Articles
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {articles.map((article) => (
                        <div key={article.image} className='flex flex-col gap-4'>
                            <img className='h-48 rounde' src={require(`../images/image-${article.image}.jpg`)} alt={article.image} />
                            <div className='flex flex-col gap-2 p-4'> 
                                <small className='text-xs'>{article.author}</small>
                                <h4 className='cursor-pointer hover:text-limeGreen'>{article.title}</h4>
                                <p className='text-grayish text-sm'>{article.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
