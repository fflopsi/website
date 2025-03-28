import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import getMetadata from '../res/metadata';

const title = 'Florian: Legal information';

export const metadata = getMetadata(title);

export default function Impressum() {
  return (
    <Wrapper title={title} route='/legal/' updated='2025-03-28'>
      <h2>Contact</h2>
      <details>
        <summary><span className='link-like'>Author's contact information</span></summary>
        <address>
          Florian Frauenfelder<br />
          Zürcherstrasse 104a<br />
          CH-8102 Oberengstringen<br />
          <Link href='mailto:ffrauenfelde@student.ethz.ch'>ffrauenfelde@student.ethz.ch</Link> <br />
          florian.l.frauenfelder(at)gmail.com<br />
        </address>
      </details>
      <h2>Copyright</h2>
      <p>
        The copyright and all other rights to content, images or other files on this website belong exclusively to Florian Frauenfelder or the specifically named rights holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements, except for personal or educational use of the content belonging to Florian Frauenfelder.
      </p>
      <h2>Disclaimer</h2>
      <p>
        The author does not guarantee whatsoever for the correctness, accuracy, up-to-dateness, reliability and completeness of the information provided. Liability claims against the author for damages of a material or immaterial nature arising from access to or use or non-use of the published information, misuse of the connection or technical faults are excluded.
      </p>
      <p>
        All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to temporarily or permanently cease publication.
      </p>
      <p>
        References and links to third-party websites are outside the area of responsibility of the author. Any responsibility for such websites is rejected. Access to and use of such websites is at the user's own risk.
      </p>
      <h2>Privacy policy</h2>
      <h3>Privacy policy</h3>
      <p>
        This privacy policy explains the nature, scope and purpose of the collection and use of personal data on this <Link href='/'>website</Link> (hereinafter referred to as the <q>website</q>) and provides information about the rights to which you are entitled. These rights are governed by the applicable data protection laws.
      </p>
      <h3>Data collection on this website</h3>
      <p>
        This website is hosted by <Link target='_blank' href='https://vercel.com'>Vercel</Link>. In order to optimise and maintain this website, we may log technical errors that may occur when you visit this website. Furthermore, when you use this website, it automatically collects information that your device's browser transmits to the host provider. These are:
      </p>
      <ul>
        <li>Event timestamp</li>
        <li>URL</li>
        <li>Referrer</li>
        <li>Query parameters</li>
        <li>Geolocation</li>
        <li>Device operating system and version</li>
        <li>Browser and version</li>
        <li>Device type</li>
      </ul>
      <p>
        This data is collected and stored by the host provider in order to optimise processes and procedures, in particular in connection with the use of the website and the security and stability of the computer system. Further information can be found in the <Link target='_blank' href='https://vercel.com/legal/privacy-policy'>privacy policy of Vercel</Link> and the <Link target='_blank' href='https://vercel.com/docs/analytics/privacy-policy'>analytics privacy policy</Link>. Insofar as the GDPR is applicable, the basis for this data processing is Art. 6 para. 1 lit. f GDPR.
      </p>
      <h3>Contact form</h3>
      <p>
        If you use the contact form on this website, your details from the enquiry form will be processed by the author of the website for the purpose of handling your enquiry and in the event of follow-up questions. As a rule, this usually requires the following information:
      </p>
      <ul>
        <li>First name and surname</li>
        <li>E-mail address</li>
        <li>Subject</li>
        <li>Message content</li>
      </ul>
      <p>
        We use the data you provide to answer your enquiry. Insofar as the GDPR is applicable, the basis for this data processing is Art. 6 para. 1 lit. f GDPR.
      </p>
      <h3>Cookies</h3>
      <p>
        I may use cookies on this website in the future. Cookies are small files that are stored on your device, by your browser. Some of the cookies used are automatically deleted when you leave the website. Other cookies remain stored on your device until you delete them or until they expire. These cookies can make it possible to recognise your browser the next time you visit the website. In your browser, you can set that you are informed in advance about the setting of cookies and can decide on a case-by-case basis whether you want to exclude the acceptance of cookies for certain cases or in general, or that cookies are completely prevented. This may limit the functionality of the website. Cookies that are required for the electronic communication process, the functionality of the website or optimise your user experience are - insofar as the GDPR is applicable - stored on the basis of Art. 6 para. 1 lit. f GDPR.
      </p>
      <h3>Links</h3>
      <p>
        On the website you will find links to third-party websites. I am not responsible for the content and data protection precautions on external websites which you can reach via the links. Please inform yourself about data protection directly on the respective websites.
      </p>
      <h3>Your rights</h3>
      <p>
        To the extent provided for by the data protection law applicable to you, you can request information free of charge about the data stored about you, its origin and recipients and the purpose of the data processing. You also have the right to rectification, erasure, restriction of or objection to processing and, if the GDPR applies, to the disclosure of this data for transfer to another organisation, subject to the statutory requirements. You can revoke any consent you have given at any time with effect for the future. All you need to do is send me an informal email. Please note that the above rights are subject to legal restrictions and may impair or prevent the provision of our services. You are entitled to enforce your claims in court or to lodge a complaint with the competent data protection authority. The Swiss Federal Data Protection and Information Commissioner is responsible for Switzerland (<Link target='_blank' href='http://www.edoeb.admin.ch'>their website</Link>).
      </p>
      <h3>Final provisions</h3>
      <p>
        I may change or adapt this privacy policy at any time. The current privacy policy can be accessed <Link href='/legal/'>here</Link>.
      </p>
    </Wrapper>
  );
}
