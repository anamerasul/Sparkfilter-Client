import Link from 'next/link';
import React from 'react';

const PrivacyPage = () => {
    return (
        <div>
             <h1 className='text-2xl md:text-4xl mb-5 mt-5 md:mb-20 text-center font-bold'>Privacy Policy</h1>
             <div className='container lg:px-32 mx-auto p-4'>
                <p>Thank you for choosing SparkFilter. This Privacy Policy describes how we collect, use, and disclose information when you visit our website and use our services.</p>
                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Information We Collect</h2>
                <p>We may collect the following types of information when you use our website or services:</p>
                <ol class="ml-10 mt-2 list-disc ">
                        <li className='ml-4'>Personal Information: Name, email address and any other information you provide voluntarily.</li>
                    </ol>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>How We Use Your Information</h2>
                    <p>We may use the information we collect for the following purposes:</p>
                    <ol class="ml-10 mt-2 list-disc">
                        <li className='ml-4'>To provide, operate, and maintain our services.</li>
                        <li className='ml-4'>To improve, personalize, and optimize your experience on our website.</li>
                        <li className='ml-4'>To communicate with you, either directly or through one of our partners, including for customer service, to provide updates and information relating to our services.</li>
                        <li className='ml-4'>To comply with legal obligations.</li>
                    </ol>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Sharing Your Information</h2>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Security of Your Information</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Your Choices</h2>
                    <p>You can choose not to provide us with certain information, but that may result in you being unable to use certain features of our website or services.</p>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>

                    <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please <Link className='text-blue-400' href='/contact'>contact us</Link> </p>
             </div>
        </div>
    );
};

export default PrivacyPage;