const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: February 19, 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <p>
              Welcome to AccountancyAI Online (https://accountancyai.online). Your privacy is important to us. This Privacy Policy explains how we handle information when you use our website. By using our website, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. Information We Do Not Collect</h2>
            <p className="mb-2">AccountancyAI Online does not require any login, registration, or sign-up. We do not collect, store, or process any of the following personal information:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Payment information</li>
              <li>Any other personally identifiable information (PII)</li>
            </ul>
            <p className="mt-2">We are committed to providing a completely anonymous learning experience for all users.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">2. Cookies and Google AdSense</h2>
            <p className="mb-2">Our website uses cookies to enhance your experience and to serve advertisements through Google AdSense. These cookies may include:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>Cookies set by Google AdSense and its partners to display personalized or non-personalized ads based on your browsing activity.</li>
              <li>Analytics cookies to understand website traffic and usage patterns.</li>
              <li>Functional cookies to remember your preferences on the website.</li>
            </ul>
            <p className="mt-2">Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" className="text-primary underline" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">3. Uploaded Content Handling</h2>
            <p className="mb-2">When you upload a question or image for AI-based solving:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>The content is processed temporarily by our AI system to generate a response.</li>
              <li>Uploaded questions and images are not stored permanently on our servers.</li>
              <li>We do not use your uploaded content for any purpose other than providing you with an answer.</li>
              <li>No uploaded data is shared with third parties except as necessary for AI processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">4. Children's Privacy</h2>
            <p>
              AccountancyAI Online is designed for students of Class 11 and Class 12. While our content is educational and appropriate for students of all ages, we do not knowingly collect any personal information from children under 13 years of age. Since our website does not require registration or login, no personal data is collected from any user, including minors. Parents and guardians are encouraged to supervise their children's internet usage.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">5. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services on our website:</p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li><strong>Google AdSense</strong> - For displaying advertisements. Google may collect and use data according to its own privacy policy.</li>
              <li><strong>AI Processing Services</strong> - For generating answers to uploaded questions. Data is processed temporarily and not retained.</li>
            </ul>
            <p className="mt-2">We recommend reviewing the privacy policies of these third-party services for more information on how they handle data.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">6. Consent</h2>
            <p>
              By using AccountancyAI Online, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our website. Continued use of the website after any changes to this Privacy Policy will constitute your acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this page periodically to stay informed about how we protect your privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 font-medium">Email: <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a></p>
            <p className="mt-1">Website: <a href="https://accountancyai.online" className="text-primary underline">https://accountancyai.online</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
