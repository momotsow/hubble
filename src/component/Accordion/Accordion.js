import React, { useState } from 'react';
import { FaArrowCircleRight, FaChevronDown, FaChevronUp  } from 'react-icons/fa';
import './accordion.css';

const items = [
  {
    id: 'img1',
    heading: 'Lender',
    paragraph:
      'Simplify the mortgage process for every closing with a powerful pair of products: our award-winning eClose platform and best-in-class eVault.',
    image:
      'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Lender-Accordion-eVault.png',
  },
  {
    id: 'img2',
    heading: 'Title & Escrow',
    paragraph:
      'Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.',
    image:
      'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png',
  },
  {
    id: 'img3',
    heading: 'Signing Service',
    paragraph: 'Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Scheduling.png',
  },
  {
    id: 'img4',
    heading: 'Notary Signing Agent',
    paragraph: 'Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Notary-signing-Agents.png',
  },
];

const AccordionSection = () => {
  const [activeItem, setActiveItem] = useState(items[0].id); // Initialize with the id of the first item

  const toggleAccordion = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <div className='accordion-body'>
      <div className='headline'>
        <h2>Connecting the industry through digital closing solutions</h2>
        <p>Select your organization type to learn how Snapdocs can help you save time and money on every transaction.</p>
      </div>

      <div className='all-items container'>
        {items.map((item) => (
          <div className='accordion-item' key={item.id}>
            <div className='item-text'>
              <div
                className='heading'
                id={item.id}
                onClick={() => toggleAccordion(item.id)}
              >
                <h3 className='heading-span'>{item.heading}</h3>
                {activeItem === item.id ? (
                  <FaChevronUp
                    className={`heading-arrow active`}
                  />
                ) : (
                  <FaChevronDown
                    className={`heading-arrow`}
                  />
                )}
              </div>
              {activeItem === item.id && (
                <div className='item-panel-container'>
                  <p className='paragraph-text'>{item.paragraph}</p>

                  <div className='cta'>
                    <a href='https://www.snapdocs.com/digital-mortgage-closing-platform'>
                      <p className='cta1'>Explore the eSuite</p>
                    </a>
                    <a href='https://www.snapdocs.com/digital-mortgage-closing-platform'>
                      <p className='cta2'>Request a demo</p>
                    </a>
                  </div>

                  <a href='https://www.snapdocs.com/digital-mortgage-closing-platform'>
                    <p className='learn-more'>
                      Learn more<span>
                        <FaArrowCircleRight className='circle-arrow' />
                      </span>
                    </p>
                  </a>
                </div>
              )}
            </div>

            <div className='accordion-img' id={item.id}>
              {activeItem === item.id && (
                <div className='accordion-accord'>
                  <img src={item.image} className='img' alt='' />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;