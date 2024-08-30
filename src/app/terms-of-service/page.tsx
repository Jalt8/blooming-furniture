import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white-daisy min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-forest-green">Terms of Service</h1>
          <p className="mb-4 text-dark-wood">Last updated: 2024/08/30</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">1. Acceptance of Terms</h2>
            <p className="text-dark-wood">By accessing or using the services provided by Blooming Furniture ("we", "our", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">2. Description of Services</h2>
            <p className="text-dark-wood">Blooming Furniture provides furniture restoration, repair, and customization services. Our services include, but are not limited to:</p>
            <ul className="list-disc pl-6 mt-2 text-dark-wood">
              <li>Furniture repairs</li>
              <li>Refinishing</li>
              <li>Reupholstery</li>
              <li>Custom furniture creation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">3. User Responsibilities</h2>
            <p className="text-dark-wood">You agree to:</p>
            <ul className="list-disc pl-6 mt-2 text-dark-wood">
              <li>Provide accurate and complete information when using our services</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">4. Intellectual Property</h2>
            <p className="text-dark-wood">All content, designs, and materials on our website are the property of Blooming Furniture and are protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">5. Payment and Refunds</h2>
            <p className="text-dark-wood">Payment terms and refund policies for our services will be provided at the time of service agreement. We reserve the right to refuse or cancel any orders at our discretion.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">6. Limitation of Liability</h2>
            <p className="text-dark-wood">To the fullest extent permitted by law, Blooming Furniture shall not be liable for any:</p>
            <ul className="list-disc pl-6 mt-2 text-dark-wood">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits or revenues, whether incurred directly or indirectly</li>
              <li>Loss of data, use, goodwill, or other intangible losses</li>
            </ul>
            <p className="mt-2 text-dark-wood">resulting from your use of our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">7. Indemnification</h2>
            <p className="text-dark-wood">You agree to indemnify and hold Blooming Furniture harmless from any claims, losses, damages, liabilities, and expenses, including attorney's fees, arising out of your use of our services or any violation of these Terms of Service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">8. Modifications to Terms</h2>
            <p className="text-dark-wood">We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting a notice on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">9. Governing Law</h2>
            <p className="text-dark-wood">These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">10. Contact Information</h2>
            <p className="text-dark-wood">If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="text-dark-wood">Email: info@bloomingfurniture.com</p>
            <p className="text-dark-wood">Phone: (079) 375 2588</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;