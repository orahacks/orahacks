import "./FAQ.scss";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";

const FAQ = ({ faqsData }) => {
    return (
        <section className="faq padding">
            <div className="boxed">
                <h2 className="heading-primary">FAQs</h2>
                <Accordion allowToggle>
                    {faqsData.map((faq, index) => {
                        return (
                            <AccordionItem
                                className="accordion-item"
                                key={index}
                            >
                                <AccordionButton className="accordion-btn">
                                    <Box as="span" flex="1" textAlign="left">
                                        <h4 className="heading-quinary accordion-heading">
                                            {faq.heading}
                                        </h4>
                                    </Box>
                                    <AccordionIcon className="accordion-icon" />
                                </AccordionButton>
                                <AccordionPanel
                                    pb={4}
                                    className="accordion-body"
                                >
                                    <p
                                        className=" body-regular"
                                        dangerouslySetInnerHTML={{
                                            __html: faq.body,
                                        }}
                                    ></p>
                                </AccordionPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;