

const Faq = () => {
    return (
        <div className="container mx-auto mt-4">
             <h1 className="text-5xl text-center mb-2">FaQ</h1>
            <div className="collapse collapse-plus bg-base-200">

                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What is your organization  mission?
                </div>
                <div className="collapse-content">
                    <p>Our mission is to combat hunger and food insecurity by redistributing surplus food to those in need, reducing food waste, and fostering community support.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I donate food to your organization?
                </div>
                <div className="collapse-content">
                   <p>You can donate food by contacting us directly through our website or hotline. We accept non-perishable items, fresh produce, and prepared meals from individuals, businesses, and organizations.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What types of food items do you accept?
                </div>
                <div className="collapse-content">
                 <p>We accept a wide range of food items, including canned goods, grains, pasta, fruits, vegetables, dairy products, proteins, and shelf-stable items. We appreciate nutritious and non-expired donations.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I stay updated on your organization's activities and impact?
                </div>
                <div className="collapse-content">
                 <p>Answer: Hosting a food drive or fundraising event is a great way to support our mission. Please contact us to discuss your ideas and coordinate logistics. We can provide guidance, promotional materials, and support to make your event a success.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Who receives the donated food?
                </div>
                <div className="collapse-content">
                 <p>e work with partner organizations such as food banks, shelters, soup kitchens, and community centers to distribute donated food directly to individuals and families facing food insecurity.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;