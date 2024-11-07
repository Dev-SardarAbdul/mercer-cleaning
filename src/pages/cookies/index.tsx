import Navbar from "@/components/navbar";

const cookiesPolicyContent = {
  __html: `
    <h2>Cookies Policy</h2>
    <p>Last updated September 10, 2024</p>
    <p>This Cookie Policy explains how Mercer Cleaning Company LLC ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at mercercleaningcompany.com ("Website"). It explains what these technologies are, why we use them, and your rights to control our use of them.</p>
    <p>In some cases, we may use cookies to collect personal information or information that becomes personal if combined with other data.</p>
    
    <h3>What are cookies?</h3>
    <p>Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently, to improve your experience, and to provide certain reporting information.</p>
    <p>Cookies set by the website owner (in this case, Mercer Cleaning Company LLC) are called “first-party cookies.” Cookies set by parties other than the website owner are called “third-party cookies.” Third-party cookies enable third-party features or functionality on or through the website, such as analytics or targeted advertisements.</p>
    
    <h3>Why do we use cookies?</h3>
    <p>We use first- and third-party cookies for various reasons. Some cookies are required for technical reasons to make our Website operate, which we refer to as "essential" or "strictly necessary" cookies. Other cookies help us improve user experience by tracking and targeting the interests of our users, or to serve advertisements. Third-party cookies may be used for analytics, advertising, and other purposes.</p>
    
    <h3>Types of cookies we use include:</h3>
    <ul>
      <li><strong>Essential cookies:</strong> These cookies are necessary for the Website to function and cannot be disabled.</li>
      <li><strong>Analytics and customization cookies:</strong> These cookies collect information to help us understand how our Website is used or to improve your user experience.</li>
      <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
    </ul>
    
    <h3>How can you control cookies?</h3>
    <p>You have the right to decide whether to accept or reject cookies. You can set your cookie preferences in the Cookie Consent Manager displayed on our Website. The Cookie Consent Manager allows you to accept or reject categories of cookies, except for essential cookies, which are necessary for the Website’s functionality.</p>
    <p>If you choose to reject cookies, you may still use the Website, although some functionality and areas of the Website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</p>
    <p>For information on how to manage cookies on your browser, check the following links for popular browsers:</p>
    <ul>
      <li>Google Chrome</li>
      <li>Mozilla Firefox</li>
      <li>Internet Explorer</li>
      <li>Safari</li>
      <li>Microsoft Edge</li>
    </ul>
    
    <h3>What types of cookies do we use?</h3>
    <p>Here’s a breakdown of the types of cookies we use:</p>
    <ul>
      <li><strong>Essential Cookies:</strong> These are necessary to provide you with services available through our Website and to use some of its features. Without these cookies, essential services like account login cannot be provided.</li>
      <li><strong>Analytics Cookies:</strong> These cookies collect information that helps us understand how our Website is being used, which helps us improve it.</li>
      <ul>
        <li><strong>Example:</strong> Name: _ga, Provider: Google Analytics, Purpose: Used to distinguish users, Expiry: 2 years</li>
      </ul>
      <li><strong>Advertising Cookies:</strong> We use third-party advertising cookies to serve ads based on your online activities and interests.</li>
      <ul>
        <li><strong>Example:</strong> Name: _fbp, Provider: Facebook, Purpose: Used to deliver a series of advertisement products such as real-time bidding from third-party advertisers, Expiry: 3 months</li>
      </ul>
      <li><strong>Unclassified Cookies:</strong> These cookies have not been categorized yet. We are in the process of classifying these cookies with the help of their providers.</li>
    </ul>
    
    <h3>Third-party cookies and tracking technologies</h3>
    <p>In addition to first-party cookies, we use cookies and other tracking technologies from third parties. These cookies are used to monitor and analyze the usage of our Website or to facilitate targeted advertising. We do not control these third-party cookies and recommend that you review the privacy policies of any third-party providers for more information.</p>
    <p>Examples of third-party tracking technologies include:</p>
    <ul>
      <li><strong>Web beacons:</strong> Small graphic images or other web programming code called "web beacons" (also known as "clear gifs" or "pixel tags") may be included in our emails and pages.</li>
      <li><strong>Flash Cookies:</strong> Sometimes, we use "Flash Cookies" (also known as Local Shared Objects or "LSOs") for purposes such as fraud prevention. To manage Flash Cookies, you can use the settings on Adobe’s website.</li>
    </ul>
    
    <h3>Targeted advertising</h3>
    <p>Third parties may serve cookies on your device to show you advertisements relevant to your interests. These companies may use information about your visits to this and other websites to serve relevant advertisements. They may also use cookies or web beacons to track your response to ads.</p>
    
    <h3>How can I control third-party cookies?</h3>
    <p>You can manage the use of third-party cookies through your browser settings. Many third-party cookies used for advertising can be opted out of through industry programs, such as:</p>
    <ul>
      <li>Digital Advertising Alliance (DAA)</li>
      <li>European Interactive Digital Advertising Alliance (EDAA)</li>
    </ul>
    
    <h3>How often will you update this Cookies Policy?</h3>
    <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
    <p>Last Updated: September 10, 2024</p>
    
    <h3>Where can I get further information?</h3>
    <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:hello@mercercleaningcompany.com">hello@mercercleaningcompany.com</a> or by post at:</p>
    <p>Mercer Cleaning Company LLC<br>
    1246 River Road, Titusville, NJ, 08560, United States</p>
  `,
};

const Cookies = () => {
  return (
    <div className="container pt-5">
      <Navbar />

      <div className="w-full mt-12 prose prose-lg prose:w-full max-w-max prose-li:marker:text-[#0B3B4D]">
        <div
          dangerouslySetInnerHTML={{ __html: cookiesPolicyContent!.__html }}
        />
      </div>
    </div>
  );
};

export default Cookies;
