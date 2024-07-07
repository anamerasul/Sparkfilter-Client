import Link from 'next/link';
import React from 'react';

const ConditionPage = () => {
    return (
        <div>
            <h1 className='text-2xl md:text-4xl mb-5 mt-5 md:mb-20 text-center font-bold'>Terms And Condition</h1>
            <div className='container lg:px-32 mx-auto p-4'>

                <p>Welcome to SparkFilter! These terms and conditions outline the rules and regulations for the use of our website and services provided by SparkFilter.</p>
                <p className='mt-5'>By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use SparkFilter's website or services if you do not agree to all of the terms and conditions stated on this page.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Services</h2>
                <p>Payment terms for services rendered by SparkFilter are specified in individual contracts or agreements. Payments are expected in full upon completion of agreed milestones unless otherwise stated.</p>


                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Payment</h2>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'> Intellectual Property</h2>
                <p>All intellectual property rights, including trademarks, copyrights, and other proprietary rights relating to our services, remain the sole property of SparkFilter unless otherwise agreed in writing.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Confidentiality</h2>
                <p>SparkFilter respects the confidentiality of our clients information. We do not disclose or use confidential information for any purpose other than the fulfillment of our services, unless required by law.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Limitation of Liability</h2>
                <p>In no event shall SparkFilter be liable for any indirect, consequential, special, incidental, or punitive damages arising out of or in connection with our services, website, or these terms and conditions.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'>Changes to Terms</h2>
                <p>SparkFilter reserves the right to revise these terms and conditions at any time without prior notice. By using this website and our services, you are agreeing to be bound by the current version of these terms and conditions.</p>

                <h2 className='text-xl mb-2 md:text-2xl font-semibold mt-5'> Contact Us</h2>
                <p>If you have any questions about these terms and conditions, please <Link className='text-blue-400' href='/contact'>contact us</Link> </p>
            </div>
        </div>
    );
};

export default ConditionPage;