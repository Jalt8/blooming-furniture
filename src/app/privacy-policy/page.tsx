import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white-daisy min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-forest-green">Privacy Policy</h1>
          <p className="mb-4 text-dark-wood">Last updated: 2024/08/30</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">1. Introduction</h2>
            <p className="text-dark-wood">Welcome to Blooming Furniture ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.bloomingfurniture.com] or use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">2. Information We Collect</h2>
            <p className="text-dark-wood">We collect personal information that you provide to us, such as:</p>
            <ul className="list-disc pl-6 mt-2 text-dark-wood">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information about your furniture and restoration needs</li>
              <li>Payment information when you make a purchase</li>
              <li>Communications you send to us</li>
            </ul>
            <p className="mt-4">We also automatically collect certain information when you visit our website, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP address and browser type</li>
              <li>Pages you view and how you interact with our website</li>
              <li>Device information and geographic location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">3. How We Use Your Information</h2>
            <p className="text-dark-wood">We use your information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Process your payments and fulfill your orders</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage trends and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">4. How We Share Your Information</h2>
            <p className="text-dark-wood">We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Service providers who help us operate our business</li>
              <li>Legal and regulatory authorities, as required by law</li>
              <li>Potential buyers in the event of a business sale or merger</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">5. Your Rights and Choices</h2>
            <p className="text-dark-wood">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access, update, or delete your personal information</li>
              <li>Object to our processing of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request that we restrict our processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">6. Data Security</h2>
            <p className="text-dark-wood">We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">7. Changes to This Privacy Policy</h2>
            <p className="text-dark-wood">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-green">8. Contact Us</h2>
            <p className="text-dark-wood">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="text-dark-wood">Email: info@bloomingfurniture.com</p>
            <p className="text-dark-wood">Phone: (079) 375 2588</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;