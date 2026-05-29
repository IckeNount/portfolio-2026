import SectionWrapper from "../layout/SectionWrapper";
import Button from "../ui/Button";
const Contact = () => (
  <SectionWrapper id="contact">
    <h2 className="font-display text-5xl text-white mb-6">Let's Build</h2>
    <p className="text-white/50 text-lg mb-8">Have a project in mind? Let's talk.</p>
    <Button variant="primary" onClick={() => window.location.href = "mailto:hello@yourdomain.com"}>
      Say Hello →
    </Button>
  </SectionWrapper>
);
export default Contact;
