const CCPANotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">CCPA Compliance Notice</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: February 19, 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <p>
              AccountancyAI Online (https://accountancyai.online) respects the privacy rights of California residents under the California Consumer Privacy Act (CCPA). This notice explains your rights and our data practices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. Information We Collect</h2>
            <p>
              AccountancyAI Online does not collect personal information from its users. Our website does not require registration, login, or any form of account creation. We do not collect names, email addresses, phone numbers, or any other personally identifiable information.
            </p>
            <p className="mt-2">
              The only data interaction that occurs is when users upload questions or images for AI processing, which are handled temporarily and not stored permanently.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">2. Your Rights Under CCPA</h2>
            <p className="mb-2">As a California resident, you have the following rights:</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Know</h3>
            <p>You have the right to know what personal information we collect, use, disclose, or sell. Since we do not collect personal information, there is no data to report. If you have specific questions, please contact us.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Delete</h3>
            <p>You have the right to request deletion of personal information we have collected. As we do not store personal information, there is typically no data to delete. If you believe we may hold any data related to you, please contact us and we will investigate.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Opt-Out</h3>
            <p>You have the right to opt out of the sale of your personal information. AccountancyAI Online does not sell personal information to any third party. We have never sold personal data and have no plans to do so.</p>

            <h3 className="mb-2 mt-4 text-lg font-medium">Right to Non-Discrimination</h3>
            <p>We will not discriminate against you for exercising any of your CCPA rights. All users receive the same quality of service regardless of any privacy-related requests they make.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">3. We Do Not Sell Personal Data</h2>
            <p>
              AccountancyAI Online does not sell, rent, lease, or trade any personal information of its users to any third party for monetary or other valuable consideration. This commitment applies to all users, including California residents. We firmly believe in user privacy and operate our website without monetizing personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">4. Third-Party Advertising</h2>
            <p>
              Our website uses Google AdSense to display advertisements. Google and its advertising partners may use cookies to serve ads based on browsing activity. This is managed by Google's own privacy policies. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">5. Contact Information</h2>
            <p>For any CCPA-related questions, requests, or concerns, please contact us at:</p>
            <p className="mt-2 font-medium">Email: <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a></p>
            <p className="mt-1">Website: <a href="https://accountancyai.online" className="text-primary underline">https://accountancyai.online</a></p>
            <p className="mt-2 text-muted-foreground">We will respond to all verifiable consumer requests within 45 days.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CCPANotice;
