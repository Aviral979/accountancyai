const GDPRNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">GDPR Compliance Notice</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: February 19, 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <p>
              AccountancyAI Online (https://accountancyai.online) is committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (GDPR). This notice explains how we handle data and your rights as a user.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. Our Approach to Data</h2>
            <p>
              AccountancyAI Online follows a privacy-first approach. We do not require registration, login, or any form of account creation. We do not collect, store, or process personal data such as names, email addresses, phone numbers, or any other personally identifiable information from our users.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">2. Data Processing</h2>
            <p className="mb-2">The minimal data processing that occurs on our website includes:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li><strong>Uploaded Questions:</strong> When you upload a question or image for AI processing, it is handled temporarily to generate a response and is not stored permanently.</li>
              <li><strong>Cookies:</strong> Our website uses cookies primarily for Google AdSense advertising. These cookies are managed by Google and its advertising partners.</li>
              <li><strong>Website Analytics:</strong> Basic analytics may be used to understand traffic patterns and improve user experience. This data is anonymized and does not identify individual users.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">3. Your Rights Under GDPR</h2>
            <p className="mb-2">Under the GDPR, you have the following rights regarding your personal data:</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right of Access</h3>
            <p>You have the right to request information about what personal data we hold about you. Since we do not collect personal data, we are unlikely to hold any information about you.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Rectification</h3>
            <p>You have the right to request correction of any inaccurate personal data. As we do not collect personal data, this right is generally not applicable.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Erasure (Right to be Forgotten)</h3>
            <p>You have the right to request deletion of your personal data. Since we do not store personal data, there is typically no data to delete. However, if you believe we may have any data related to you, please contact us.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Restrict Processing</h3>
            <p>You have the right to request that we limit how we use your data. You can manage cookie preferences through your browser settings.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Data Portability</h3>
            <p>You have the right to receive your personal data in a structured format. As we do not collect personal data, this right is generally not applicable.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Object</h3>
            <p>You have the right to object to data processing. You can opt out of personalized advertising by adjusting your Google Ads settings.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">4. Cookies and Advertising</h2>
            <p>
              Google AdSense and its partners may use cookies to display advertisements on our website. You can manage your cookie preferences through your browser settings or opt out of personalized ads through <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">5. Data Protection Officer</h2>
            <p>
              Given the minimal nature of our data processing, we have not appointed a formal Data Protection Officer. However, for any data-related queries or requests, you can contact us directly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">6. Contact for Data Requests</h2>
            <p>For any GDPR-related questions, data access requests, or concerns, please contact us at:</p>
            <p className="mt-2 font-medium">Email: <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a></p>
            <p className="mt-1">Website: <a href="https://accountancyai.online" className="text-primary underline">https://accountancyai.online</a></p>
            <p className="mt-2 text-muted-foreground">We will respond to all legitimate requests within 30 days.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPRNotice;
