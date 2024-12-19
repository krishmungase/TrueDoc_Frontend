import React, { useState } from 'react'

const Questionaries = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const questions = [
        { title: "Why is document verification important?", content: "Document verification is important for companies that are prime targets for identity fraud. Even when using biometric functionality such as selfies and facial recognition to ensure the user is who they say they are, banks and other financial services companies can benefit from collecting a secondary form of identification to prove the customer lives at their stated address. This approach also helps protect users who have been victims of identity theft." },
        { title: "Question 2?", content: "This is the content of Section 2." },
        { title: "Question 3?", content: "This is the content of Section 3." },
    ];
    return (
        <div className='flex justify-center w-screen   z-10'>
            <div className='w-1/2 h-fit bg-secondary px-8 py-4'>
                {questions.map((item, index) => (
                    <div key={index} className="">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left  py-3 px-4 "
                        >
                            ➕{item.title}
                        </button>
                        {openIndex === index && (
                            <div className="pl-10 py-3 pr-2 transition-all ease-linear bg-gray-100 text-gray-800">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questionaries
