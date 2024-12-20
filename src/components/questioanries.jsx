import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Questionaries = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            title: "Why is document verification important?",
            content:
                "Document verification is crucial for preventing identity fraud and ensuring the authenticity of government-issued documents. It helps verify the user's identity and address, providing an added layer of security, especially in sectors like banking and finance. It also helps protect against identity theft by ensuring that personal details match the provided documentation.",
        },
        {
            title: "What types of documents can be verified?",
            content:
                "We support verification of various types of documents, including government-issued IDs (e.g., passports, national IDs, driver's licenses), utility bills for address verification, and financial documents like bank statements or tax forms.",
        },
        {
            title: "How does the document verification process work?",
            content:
                "Our process involves scanning the provided document, validating its authenticity using advanced algorithms and AI, and then cross-referencing it with public databases or other sources of truth. The verification process usually takes just a few minutes.",
        },
        {
            title: "Is document verification secure?",
            content:
                "Yes, our document verification system employs encryption and complies with data protection regulations, ensuring that all sensitive information is handled securely. Your documents are processed using industry-standard security protocols.",
        },
        {
            title: "Can I use this service for international document verification?",
            content:
                "Yes, our platform supports the verification of international documents, including passports and national IDs from various countries, ensuring that the verification process is seamless for users across the globe.",
        },
    ];

    return (
        <div className="flex justify-center w-screen z-10 py-12">
            <div className="w-11/12 max-w-3xl bg-secondary px-8 py-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">
                    Frequently Asked Questions
                </h2>
                {questions.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left py-3 px-4 bg-turnary rounded-md flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <span className="text-lg font-medium text-primary">
                                {item.title}
                            </span>
                            <span className="text-primary">
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="pl-5 py-3 pr-4 bg-gray-100 rounded-md shadow-inner text-gray-800 transition-all ease-in-out duration-300">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questionaries;
