

// const Faq = () => {
//     return (
//         // <div className="container mx-auto mt-4">
//         //      <h1 className="text-5xl text-center mb-2">FaQ</h1>
//         //     <div className="collapse collapse-plus bg-base-200">

//         //         <input type="radio" name="my-accordion-3" defaultChecked />
//         //         <div className="collapse-title text-xl font-medium">
//         //         What is your organization  mission?
//         //         </div>
//         //         <div className="collapse-content">
//         //             <p>Our mission is to combat hunger and food insecurity by redistributing surplus food to those in need, reducing food waste, and fostering community support.</p>
//         //         </div>
//         //     </div>
//         //     <div className="collapse collapse-plus bg-base-200">
//         //         <input type="radio" name="my-accordion-3" />
//         //         <div className="collapse-title text-xl font-medium">
//         //         How can I donate food to your organization?
//         //         </div>
//         //         <div className="collapse-content">
//         //            <p>You can donate food by contacting us directly through our website or hotline. We accept non-perishable items, fresh produce, and prepared meals from individuals, businesses, and organizations.</p>
//         //         </div>
//         //     </div>
//         //     <div className="collapse collapse-plus bg-base-200">
//         //         <input type="radio" name="my-accordion-3" />
//         //         <div className="collapse-title text-xl font-medium">
//         //         What types of food items do you accept?
//         //         </div>
//         //         <div className="collapse-content">
//         //          <p>We accept a wide range of food items, including canned goods, grains, pasta, fruits, vegetables, dairy products, proteins, and shelf-stable items. We appreciate nutritious and non-expired donations.</p>
//         //         </div>
//         //     </div>
//         //     <div className="collapse collapse-plus bg-base-200">
//         //         <input type="radio" name="my-accordion-3" />
//         //         <div className="collapse-title text-xl font-medium">
//         //         How can I stay updated on your organization's activities and impact?
//         //         </div>
//         //         <div className="collapse-content">
//         //          <p>Answer: Hosting a food drive or fundraising event is a great way to support our mission. Please contact us to discuss your ideas and coordinate logistics. We can provide guidance, promotional materials, and support to make your event a success.</p>
//         //         </div>
//         //     </div>
//         //     <div className="collapse collapse-plus bg-base-200">
//         //         <input type="radio" name="my-accordion-3" />
//         //         <div className="collapse-title text-xl font-medium">
//         //         Who receives the donated food?
//         //         </div>
//         //         <div className="collapse-content">
//         //          <p>e work with partner organizations such as food banks, shelters, soup kitchens, and community centers to distribute donated food directly to individuals and families facing food insecurity.</p>
//         //         </div>
//         //     </div>
//         // </div>
//     <div>

//     </div>

//     );
// };

// export default Faq;


import { useState } from 'react';

const accordionData = [{ title: ' What types of food can I donate?', subtitle: 'We accept non-perishable items such as canned goods, dried foods, and packaged snacks, as well as perishable items.', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500' }, { title: 'How do I schedule a food donation?', subtitle: 'Schedule a donation through our website or contact us directly via phone or email for convenient drop-off or pick-up arrangements.', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500' }, { title: 'Are there tax benefits for donating food?', subtitle: 'Yes, food donations may be tax-deductible. Consult a tax professional for guidance, and we provide a receipt upon request.', colorBg: 'bg-red-500', colorBorder: 'border-red-500' }, { title: ' What happens to the food once it’s donated?', subtitle: 'Donated food is inspected, sorted, and distributed to local food banks and shelters to support those in need in our community.', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500' }, { title: 'How can I get involved beyond food donations?', subtitle: 'You can volunteer, organize food drives, or make monetary donations. Visit our website for more ways to support our mission!', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500' }];

export default function VerticalMenuAccordion() {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div
            className='container mx-auto'
            style={{
                backgroundImage: `url('https://i.postimg.cc/GtNgXv4T/fq.jpg')`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Optional: this will make the image cover the entire div
                backgroundPosition: 'center' // Optional: centers the image in the div

            }}
          >
            <div className="mx-auto mt-4  flex min-h-[300px] w-fit gap-1 rotate-90 md:rotate-0">

                {accordionData?.map((data, idx) => (
                    <div key={idx} className="flex ">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`flex h-full lg: w-14 flex-col items-center justify-around ${data?.colorBg} relative rounded-lg text-white`}> {isActive === idx && <span className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>}
                            <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
                            <p className="rotate-[270deg]">Question </p>
                        </button>
                        {/* container */}
                        <div className={`grid place-content-center rounded-lg bg-gray-200 dark:bg-[#18181B] shadow-md ${isActive === idx ? 'opacity-1 scale-1 h-[200px] md:h-auto w-[300px] md:w-56 px-5' : 'w-0 scale-0 opacity-0'} md:ml-2 mt-12 md:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0`}>
                            <h2 className="font-black lg:text-2xl dark:text-white">{data?.title}</h2>
                            <p className="text-black/60 dark:text-white/60">{data?.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
