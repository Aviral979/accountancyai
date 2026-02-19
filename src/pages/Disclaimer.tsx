const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 md:py-20">
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Disclaimer</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: February 19, 2025</p>

        <div className="space-y-8 text-foreground">
          <section>
            <p>
              The information provided on AccountancyAI Online (https://accountancyai.online) is for general educational purposes only. By using this website, you acknowledge and agree to the following disclaimers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">1. Educational Purpose Only</h2>
            <p>
              AccountancyAI Online is designed solely as a supplementary educational tool for Class 11 and Class 12 CBSE Accountancy students. The content on this website, including notes, quizzes, and AI-generated solutions, is intended to assist students in their learning and is not a replacement for official textbooks, classroom instruction, or professional academic guidance. Students are encouraged to use this website alongside their regular studies and consult their teachers for clarification.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">2. No Guarantee of Exam Results</h2>
            <p>
              While AccountancyAI Online aims to provide helpful study material and practice resources, we do not guarantee any specific academic outcomes, exam scores, or results. Academic performance depends on many factors including individual effort, understanding, and preparation methods. Users should not rely solely on this website for exam preparation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">3. AI-Generated Content Accuracy</h2>
            <p className="mb-2">
              Our website uses artificial intelligence technology to generate answers and solutions to accountancy questions. While our AI system is designed to provide accurate and helpful responses:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              <li>AI-generated content may occasionally contain errors, inaccuracies, or outdated information.</li>
              <li>Solutions may not always align with the latest CBSE marking schemes or examination patterns.</li>
              <li>The AI may misinterpret questions, especially handwritten or unclear inputs.</li>
              <li>We strongly recommend cross-checking all AI-generated answers with your textbook or teacher.</li>
            </ul>
            <p className="mt-2">AccountancyAI Online shall not be held responsible for any consequences arising from reliance on AI-generated content.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">4. NCERT/CBSE Content</h2>
            <p>
              AccountancyAI Online does not claim ownership of any NCERT, CBSE, or government-published educational materials. All references to NCERT textbooks, CBSE syllabus, question papers, and related content are used purely for educational purposes and belong to their respective copyright holders. If any content owner has concerns about material on our website, please contact us at <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a> and we will address it promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">5. External Links Disclaimer</h2>
            <p>
              Our website may contain links to external websites or third-party resources. These links are provided for convenience and informational purposes only. AccountancyAI Online does not endorse, control, or take responsibility for the content, accuracy, or availability of any external websites. Visiting external links is at your own risk, and we encourage users to review the privacy policies and terms of any third-party websites they visit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">6. Advertisement Disclaimer</h2>
            <p>
              AccountancyAI Online displays advertisements through Google AdSense to support the free operation of this website. These advertisements are provided by third-party advertisers, and we do not endorse or guarantee the products, services, or claims made in any advertisement. Users interact with advertisements at their own risk. AccountancyAI Online is not responsible for any transactions, disputes, or issues arising from interactions with advertisers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">7. Website Availability</h2>
            <p>
              We strive to keep AccountancyAI Online available and functional at all times. However, we do not guarantee uninterrupted access to the website. The website may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Disclaimer, please contact us at:</p>
            <p className="mt-2 font-medium">Email: <a href="mailto:aviralkumar9793@gmail.com" className="text-primary underline">aviralkumar9793@gmail.com</a></p>
            <p className="mt-1">Website: <a href="https://accountancyai.online" className="text-primary underline">https://accountancyai.online</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
