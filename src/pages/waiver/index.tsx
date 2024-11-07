import Navbar from "@/components/navbar";

const termsAndConditions = {
  content: `
    <h2>Wearable Camera Disclaimer & General Service Terms</h2>
    <p>Last Updated: September 10, 2024</p>
    <p>At Mercer Cleaning Company LLC (“we,” “us,” or “our”), we are committed to delivering high-quality cleaning services. The following terms and conditions, along with our wearable camera policy, apply to all clients using our services.</p>
    
    <h3>Purpose of Wearable Cameras</h3>
    <p>Wearable cameras are available for clients who opt-in to:</p>
    <ul>
      <li>Ensure the quality and thoroughness of the services provided.</li>
      <li>Provide additional transparency for both staff and clients.</li>
      <li>Assist in resolving any potential disputes related to the service.</li>
    </ul>
    
    <h3>Compliance with New Jersey Laws</h3>
    <p>In accordance with New Jersey state law, both video and audio recordings require consent from the party being recorded. By opting into the use of a wearable camera, you are giving explicit consent to the recording of both video and audio during the cleaning service.</p>
    
    <h3>Data Collection and Use</h3>
    <p>When requested, wearable cameras will record both video and audio throughout the duration of the service. By opting in, the client consents to the recording of every room in their house from the start of cleaning until the cleaning is completed. The footage will be securely stored and is used solely for:</p>
    <ul>
      <li>Verifying service quality.</li>
      <li>Resolving any disputes between staff and clients.</li>
      <li>Legal or safety concerns where applicable.</li>
    </ul>
    <p>All footage will be retained for 30 days after the cleaning service and automatically deleted after this period unless required for ongoing dispute resolution or legal reasons.</p>
    
    <h3>Client Rights and Consent</h3>
    <p>As a client, you may choose to have your cleaning service recorded by opting into the use of a wearable camera when booking. You have the right to:</p>
    <ul>
      <li>Review the footage within the 30-day retention period if necessary for dispute resolution.</li>
      <li>Decline the use of the wearable camera during your cleaning service.</li>
      <li>Withdraw consent at any time during the recording, which will result in the immediate termination of recording.</li>
    </ul>
    <p>By opting into the use of a wearable camera, you consent to the recording of both video and audio during the cleaning session, subject to the conditions outlined above.</p>
    
    <h3>General Terms and Conditions</h3>
    <ol>
      <li>
        <strong>Service Expectations</strong>
        <p>We strive to meet and exceed client expectations with every cleaning appointment. However, it is important to note that:</p>
        <ul>
          <li>Clients are responsible for providing accurate and detailed information about the cleaning tasks and areas to be serviced.</li>
          <li>Our cleaning staff will do their best to cover all areas requested, but some areas may require extra time or an additional visit depending on the condition and size of the space.</li>
          <li>Any large or hazardous items, including but not limited to heavy furniture, biohazards, or dangerous materials, will not be moved or cleaned without prior agreement.</li>
        </ul>
      </li>
      
      <li>
        <strong>Health and Safety Precautions</strong>
        <p>Our cleaning staff will use industry-approved cleaning agents and equipment to ensure the safety and cleanliness of your home.</p>
        <p>If there are specific allergies or sensitivities to certain products, please notify us in advance so we can accommodate your needs.</p>
        <p>For the safety of our staff, we request that pets are secured and hazardous areas, if any, are made known to us prior to the appointment.</p>
      </li>
      
      <li>
        <strong>Service Cancellations and Rescheduling</strong>
        <p>Clients can cancel or reschedule an appointment without charge if done 24 hours prior to the scheduled service.</p>
        <p>Cancellations made less than 24 hours before the scheduled service will result in the holding of the $30 booking fee. This booking fee can be applied to a future service if rescheduled.</p>
        <p>In cases of rescheduling due to emergencies, we will do our best to accommodate a new appointment time without additional fees.</p>
      </li>
      
      <li>
        <strong>Liability</strong>
        <p>While we take every precaution to protect your home and belongings during cleaning, Mercer Cleaning Company LLC is not responsible for damage to fragile items that are not properly secured before service. Please ensure valuable and fragile items are stored safely away from cleaning areas.</p>
        <p>In the unlikely event of accidental damage to your property, we will assess the situation and determine a fair course of action. This may include repair, replacement, or compensation.</p>
      </li>
      
      <li>
        <strong>Access to Property</strong>
        <p>Clients are responsible for providing access to their property at the scheduled time. This can be done through the provision of keys, security codes, or other arrangements.</p>
        <p>If our staff is unable to access the property within 15 minutes of the scheduled time, the service will be canceled, and the $30 booking fee will be held.</p>
      </li>
      
      <li>
        <strong>Payment Terms</strong>
        <p>Payment for cleaning services is due immediately upon completion of the service unless otherwise agreed upon in writing.</p>
        <p>We accept payment via Stripe, a secure and reliable payment platform.</p>
        <p>Non-payment of services will result in suspension of future services and may be subject to legal action if not resolved within 30 days of service completion.</p>
      </li>
      
      <li>
        <strong>Dispute Resolution</strong>
        <p>In the event of a dispute regarding the quality or scope of services provided, clients are encouraged to contact us immediately for resolution.</p>
        <p>If wearable camera footage was requested, it may be used to resolve disputes in conjunction with client feedback and staff reports.</p>
      </li>
    </ol>
    
    <h3>Contact Us</h3>
    <p>If you have any questions or wish to opt for the use of a wearable camera during your service, please contact us at:</p>
    <p>Mercer Cleaning Company LLC<br />
    1246 River Road, Titusville, NJ, 08560, United States<br />
    Email: <a href="mailto:hello@mercercleaningcompany.com">hello@mercercleaningcompany.com</a></p>
  `,
};

const Waiver = () => {
  return (
    <div className="container pt-5">
      <Navbar />

      <div className="w-full mt-12 prose prose-lg prose:w-full max-w-max prose-li:marker:text-[#0B3B4D]">
        <div
          dangerouslySetInnerHTML={{ __html: termsAndConditions!.content }}
        />
      </div>
    </div>
  );
};

export default Waiver;
