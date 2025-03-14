import { FaLaptopCode, FaCogs, FaDraftingCompass, FaTools } from 'react-icons/fa';

const services = [
  {
    category: 'Core Web Development',
    icon: <FaLaptopCode  className="text-pink-500 text-[70px]" />,
    services: [
      'Responsive Website Development',
      'Static Site Generation',
      'Landing Page Creation',
      'Email Template Development',
      'Cross-Browser Compatibility Solutions'
    ],
  },
  {
    category: 'Application Development',
    icon: <FaCogs  className="text-pink-500 text-[70px]" />,
    services: [
      'Front-End Framework Implementation (React, Vue, ASP.NET)',
      'Progressive Web Applications (PWAs)',
      'Interactive Web Applications',
      'Single Page Applications (SPAs)',
      'State Management Solutions'
    ],
  },
  {
    category: 'UI/UX Implementation',
    icon: <FaDraftingCompass className="text-pink-500 text-[70px]" />,
    services: [
      'Design-to-Code Conversion',
      'Component Library Development',
      'Animation & Micro-interactions',
      'Prototyping & Wireframing',
      'UI Testing & Refinement'
    ],
  },
  {
    category: 'Optimization & Maintenance',
    icon: <FaTools className="text-pink-500 text-[70px]" />,
    services: [
      'Performance Optimization',
      'Accessibility Implementation (WCAG)',
      'SEO Enhancement',
      'Code Refactoring & Cleanup',
      'Legacy Code Modernization',
      'Website Maintenance & Updates'
    ],
  },
];

const Services = () => {
    const handleGetStartedClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <section className=" bg-transparent mt-6">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F7F7F7] dark:bg-[#161616] p-3 rounded-xl border-[1px] border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.category}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-white space-y-2">
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button onClick={handleGetStartedClick} className="text-black dark:text-white underline font-medium mt-4 inline-block">GET STARTED</button>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default Services;
