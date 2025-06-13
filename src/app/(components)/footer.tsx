import FooterWrapper from "../ui/footer/footer";
import { footerComponents } from "../ui/footer/footerComponents";
import { footerData } from "../lib/footer-data";

const Footer = () => (
  <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
    {footerData.map((footer) => (
      <FooterWrapper key={footer.title} title={footer.title} href={footer.href}>
        {footerComponents[footer.componentKey]}
      </FooterWrapper>
    ))}
  </ul>
);

export default Footer;
